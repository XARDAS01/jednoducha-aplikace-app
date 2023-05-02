<template>
	<div class="page">
		<section class="page__wrapper">
			<div class="page__wrapper__controllers--global controllers--global">
				<button
					type="button"
					class="btn btn-fill--dark controllers__item--global controllers__item__export--global"
					:disabled="useSectionsStore().getSectionBook.length === 0"
					@click="exportCSV"
				>
					Export CSV
				</button>

				<!-- <button
					type="button"
					class="btn btn-fill--dark controllers__item--global controllers__item__export--global"
					:disabled="useSectionsStore().getSectionBook.length === 0"
					@click="openModalWindow('exportPdf', 'Export PDF')"
				>
					Export PDF
				</button> -->

				<button
					type="button"
					class="btn btn-fill--dark controllers__item--global controllers__item__add--global"
					@click="openModalWindow('addNew', 'Add new to book')"
				>
					Add new
				</button>
			</div>

			<db-item-table-template :items="useSectionsStore().getSectionBook" />
		</section>
	</div>

	<modal-template
		v-if="usePopupStore().getStatus"
		:title="usePopupStore().getData.title"
		@closeModalWindow="closeModalWindow"
	>
		<template #content>
			<modal-add-form
				v-if="usePopupStore().getName === 'addNew'"
				section="book"
			/>

			<modal-export-csv
				v-if="usePopupStore().getName === 'exportPdf'"
			/>
		</template>
	</modal-template>
</template>

<script setup lang="ts">
import { useSectionsStore } from './../../../store/sections';
import { usePopupStore } from './../../../store/popups';
import { useSystemStore } from './../../../store/system';

function openModalWindow (name:string, title:string) { usePopupStore().togglePopup(true, name, { title }); }
function closeModalWindow () { usePopupStore().togglePopup(false); }

function exportCSV () {
	useSystemStore().csvDownload('book');
}
</script>
