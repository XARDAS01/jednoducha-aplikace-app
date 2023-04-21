import { defineStore } from 'pinia';

export const usePopupStore = defineStore('popupStore', () => {
	// STATE
	const popup = reactive({
		status: false,
		name: '',
		data: {
			title: '',
		},
	});

	// GETTERS
	const getStatus = computed(() => popup.status);
	const getName = computed(() => popup.name);
	const getData = computed(() => popup.data);

	// ACTIONS
	function togglePopup (popupStatus:boolean, popupName?:string, popupData?:object) {
		popup.status = popupStatus;
		popup.name = popupName || 'popup';
		popup.data = popupData || { title: 'Modal window' };
	}

	return { popup, getStatus, getName, getData, togglePopup };
});
