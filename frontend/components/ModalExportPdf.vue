<template>
	<div class="modal">
		<section class="modal__wrapper">
			<button
				type="button"
				class="btn btn-fill--dark controllers__item--global controllers__item__export--global"
				@click="exportPdf"
			>
				Download
			</button>

			<button
				type="button"
				class="btn btn-fill--dark controllers__item--global controllers__item__add--global"
				@click="sendPdfToEmail"
			>
				Send to email
			</button>
		</section>
	</div>
</template>

<script setup lang="ts">
import { useSystemStore } from './../store/system';
import { useCustomFetch } from './../composable/fetch';
import { usePopupStore } from '~~/store/popups';

const props = defineProps({
	section: {
		type: String,
	},
});

// function exportPdf () {
// 	useSystemStore().csvDownload(props.section);
// }

// function sendCsvToEmail () {
// 	usePopupStore().togglePopup(false);
// 	usePopupStore().togglePopup(true, 'attachment', { title: 'Send email with attachment' });
// }
</script>

<style scoped>
.modal__wrapper {
	@apply flex justify-center;
}
</style>
