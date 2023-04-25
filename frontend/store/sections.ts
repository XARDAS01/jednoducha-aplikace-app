import { defineStore } from 'pinia';
import { usePopupStore } from './popups';
import { useSystemStore } from './system';
import { useCustomFetch } from '~/composable/fetch';

export const useSectionsStore = defineStore('sectionsStore', () => {
	const sections = reactive({
		user: [],
		book: [],
		myBooks: [],
		token: [],
		navigationLinks: [
			{ id: 1, name: 'user', title: 'Users' },
			{ id: 2, name: 'book', title: 'Books' },
			{ id: 3, name: 'myBooks', title: 'My books' },
			{ id: 4, name: 'token', title: 'Tokens' },
		],
	});

	const getSectionUser = computed(() => sections.user);
	const getSectionBook = computed(() => sections.book);
	const getSectionMyBook = computed(() => sections.myBooks);
	const getSectionToken = computed(() => sections.token);
	const getNavigationLinks = computed(() => sections.navigationLinks);

	function getSectionByName (name:string) {
		if (name === 'user') { return getSectionUser; }
		else if (name === 'token') { return getSectionToken; }
		else if (name === 'book') { return getSectionBook; }
	}

	async function userSectionLoad () {
		const result = await useCustomFetch<{}>('/user/getAll', 'GET');
		if (result.data.value.code === 200) {
			sections.user = result.data.value.payload;
		}
	}

	async function bookSectionLoad () {
		const result = await useCustomFetch<{}>('/book/getAll', 'GET');
		if (result.data.value.code === 200) {
			sections.book = result.data.value.payload;
		}
	}

	function myBooksSectionLoad () {
		sections.myBooks = sections.book.filter(book => book.authorUid === useSystemStore().getUid);
	}

	async function tokenSectionLoad () {
		const result = await useCustomFetch<{}>('/token/getAll', 'GET');
		if (result.data.value.code === 200) {
			sections.token = result.data.value.payload;
			useSystemStore().setUid(sections.token.find(token => token.token === useSystemStore().getToken).uid);
		}
	}

	async function addAction (body:object) {
		const result = await useCustomFetch<{}>('/book/add', 'POST', body);
		if (result.data.value.code === 201) {
			usePopupStore().togglePopup(false);
			bookSectionLoad();
		}
	}

	async function registerNewUserAction (body:object) {
		const result = await useCustomFetch<{}>('/auth/registration', 'POST', body);
		if (result.data.value.code === 201) {
			usePopupStore().togglePopup(false);
			userSectionLoad();
			tokenSectionLoad();
		}
	}

	async function editSectionUserItem (userId:number, body:object) {
		const result = await useCustomFetch<{}>('/user/edit?userId=' + userId, 'POST', body);
		if (result.data.value.code === 201) {
			const objIndex = sections.user.findIndex(user => user.id === userId);
			sections.user[objIndex] = result.data.value.payload;
		}
	}

	async function loadAllSections () {
		await tokenSectionLoad();
		await userSectionLoad();
		await bookSectionLoad();
		await myBooksSectionLoad();
		await useSystemStore().loaded();
	}

	// async function load () {
	// 	const result = await useCustomFetch<{}>(useRoute().params.name + '/getAll', 'GET');
	// 	if (result.data.value.code === 200) {
	// 		section.data = result.data.value.payload;
	// 	}
	// 	console.log(sectionData);
	// }

	// async function addAction (body:object) {
	// 	const result = await useCustomFetch<{}>(useRoute().params.name + '/add', 'POST', body);
	// 	if (result.data.value.code === 201) {
	// 		usePopupStore().togglePopup(false);
	// 	}
	// }

	// async function registerNewUserAction (body:object) {
	// 	const result = await useCustomFetch<{}>('/auth/registration', 'POST', body);
	// 	if (result.data.value.code === 201) {
	// 		usePopupStore().togglePopup(false);
	// 	}
	// }

	return { sections, editSectionUserItem, getSectionByName, getSectionUser, getSectionBook, getSectionMyBook, getSectionToken, userSectionLoad, getNavigationLinks, bookSectionLoad, tokenSectionLoad, addAction, registerNewUserAction, loadAllSections };
});
