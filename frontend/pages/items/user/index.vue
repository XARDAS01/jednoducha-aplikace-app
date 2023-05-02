<template>
	<div class="page">
		<section class="page__wrapper">
			<div class="page__wrapper__controllers--global controllers--global">
				<button
					type="button"
					class="btn btn-fill--dark controllers__item--global controllers__item__export--global"
					:disabled="useSectionsStore().getSectionUser.length === 0"
					@click="openModalWindow('exportCsv', 'Export CSV')"
				>
					Export CSV
				</button>

				<button
					type="button"
					class="btn btn-fill--dark controllers__item--global controllers__item__add--global"
					@click="openModalWindow('addNew', 'Add new user')"
				>
					Add new
				</button>
			</div>

			<db-item-table-template :items="useSectionsStore().getSectionUser" />
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
				section="user"
			/>

			<modal-export-csv
				v-if="usePopupStore().getName === 'exportCsv'"
				section="user"
			/>

			<modal-send-email
				v-if="usePopupStore().getName === 'attachment'"
				:section="usePopupStore().getName"
			/>
		</template>
	</modal-template>
</template>

<script setup lang="ts">
import { useSectionsStore } from './../../../store/sections';
import { usePopupStore } from './../../../store/popups';

function openModalWindow (name:string, title:string) { usePopupStore().togglePopup(true, name, { title }); }
function closeModalWindow () { usePopupStore().togglePopup(false); }
</script>
