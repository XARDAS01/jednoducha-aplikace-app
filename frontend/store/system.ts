import { defineStore } from 'pinia';
import { useSectionsStore } from './../store/sections';
import { useCustomFetch } from '~/composable/fetch';

export const useSystemStore = defineStore('systemStore', () => {
	// STATE
	const system = reactive({
		loading: true,
		isAuth: false,
		token: localStorage.getItem('token') || null,
		uid: '',
	});

	// GETTERS
	const isAuth = computed(() => system.isAuth);
	const getToken = computed(() => system.token);
	const getUid = computed(() => system.uid);
	const getLoadingStatus = computed(() => system.loading);

	// ACTIONS
	function authCheck () {
		system.isAuth = true;
	}

	async function sendRegistrationFormToServer (user:object) {
		const result = await useCustomFetch<{}>('/auth/registration', 'POST', user);
		if (result.data.value.code === 201) {
			onAuth(result.data.value.payload.token);
		}
	}

	async function sendLoginFormToServer (user:object) {
		const result = await useCustomFetch<{}>('/api/v1/auth/login', 'POST', user);
		if (result.data.value.code === 200) {
			onAuth(result.data.value.payload.token);
		}
	}

	async function onAuth (token:string) {
		localStorage.setItem('token', token);
		system.isAuth = true;
		useSectionsStore().loadAllSections();
		await navigateTo('/');
	}

	function setUid (uid:string) {
		system.uid = uid;
	}

	function loaded () {
		system.loading = false;
	}

	return { system, loaded, getLoadingStatus, isAuth, getUid, setUid, authCheck, getToken, sendRegistrationFormToServer, sendLoginFormToServer };
});
