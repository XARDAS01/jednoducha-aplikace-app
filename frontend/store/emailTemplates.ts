import { defineStore } from 'pinia';
import { useCustomFetch } from '~/composable/fetch';
import { usePopupStore } from '~/store/popups';

export const useEmailTemplatesStore = defineStore('emailTemplates', () => {
	const templates = reactive({
		item: [],
	});

	const getEmailTemplates = computed(() => templates.item);

	async function loadEmailTemplates () {
		const result = await useCustomFetch<{}>('/templates/getTemplates', 'GET');
		if (result.data.value.code === 200) {
			templates.item = result.data.value.payload;
		}
	}

	async function sendEmailTemplates (appeal:string, prize:string) {
		const result = await useCustomFetch<{}>('/email/send-email-with-html-template?appeal=' + appeal + '&prize=' + prize, 'GET');
		if (result.data.value.code === 200) {
			usePopupStore().togglePopup();
		}
	}

	return { templates, getEmailTemplates, loadEmailTemplates, sendEmailTemplates };
});
