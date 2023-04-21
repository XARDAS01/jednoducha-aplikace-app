import { defineStore } from 'pinia';
import { usePopupStore } from './popups';
import { useCustomFetch } from '~/composable/fetch';

export const useItemStore = defineStore('itemStore', () => {
	const item = reactive({
		data: {},
	});

	const getSectionData = computed(() => item.data);

	async function getByUid (name:string, uid:string) {
		const result = await useCustomFetch<{}>(useRoute().params.name + '/' + name + '/getById?uid=' + uid, 'GET');
		if (result.data.value.code === 200) {
			item.data = result.data.value.payload;
		}
	}

	return { item, getSectionData };
});
