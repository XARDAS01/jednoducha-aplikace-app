<template>
	<div class="page">
		<section class="page__wrapper">
			<div class="page__wrapper__controllers--global controllers--global">
				<button
					type="button"
					class="btn btn-fill--dark controllers__item--global controllers__item__export--global"
					:disabled="useSectionsStore().getSectionMyBook.length === 0"
					@click="exportCSV"
				>
					Export CSV
				</button>

				<button
					type="button"
					class="btn btn-fill--dark controllers__item--global controllers__item__add--global"
					@click="openModalWindow"
				>
					Add new
				</button>
			</div>

			<db-item-table-template :items="useSectionsStore().getSectionMyBook" />
		</section>
	</div>

	<modal-template
		v-if="usePopupStore().getStatus"
		:title="usePopupStore().getData.title"
		@closeModalWindow="closeModalWindow"
	>
		<template #content>
			<modal-add-form
				section="book"
			/>
		</template>
	</modal-template>
</template>

<script setup lang="ts">
import { useSectionsStore } from './../../../store/sections';
import { usePopupStore } from './../../../store/popups';
import { useSystemStore } from './../../../store/system';

function openModalWindow () { usePopupStore().togglePopup(true, '', { title: 'Add new to book' }); }
function closeModalWindow () { usePopupStore().togglePopup(false); }

async function exportCSV () {
	await navigateTo('https://jednoducha-aplikace-production.up.railway.app/api/v1/book/exportMyBooks?token=' + useSystemStore().getToken, {
		external: true,
	});
}
</script>
