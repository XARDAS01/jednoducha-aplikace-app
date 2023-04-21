<template>
	<div class="page">
		<div class="page__wrapper">
			<!-- <div class="page__wrapper__header header">
				<h1 class="header__title">
					Title: {{ $route.params.name }}
				</h1>
			</div> -->

			<div class="page__wrapper__controllers controllers">
				<button
					type="button"
					class="btn btn-fill--dark controllers__item controllers__item__export"
					:disabled="useSectionsStore().sections[useRoute().params.name][0].length === 0"
					@click="exportCSV"
				>
					Export CSV
				</button>

				<button
					v-if="useRoute().params.name === 'user' || useRoute().params.name === 'book'"
					type="button"
					class="btn btn-fill--dark controllers__item controllers__item__add"
					@click="openModalWindow"
				>
					Add new
				</button>
			</div>

			<!-- <div class="page__wrapper__search">
				<input type="text" placeholder="Search">
			</div> -->

			<div class="page__wrapper__table-container">
				<table v-if="useSectionsStore().sections[useRoute().params.name][0]" class="table-container__table table">
					<tr class="table__row">
						<th v-for="(value, key, index) of useSectionsStore().sections[useRoute().params.name][0]" :key="value.id" class="table__row__cell">
							{{ key }}
						</th>
					</tr>
					<tr v-for="row of useSectionsStore().sections[useRoute().params.name]" :key="row.id" class="table__row">
						<td
							v-for="(cell, Index) of row"
							:key="Index"
							class="table__row__cell"
							@click="onClickCell(row.id)"
						>
							{{ cell }}
						</td>
					</tr>
				</table>

				<div v-else class="table--empty">
					Empty table
				</div>
			</div>

			<!-- <ul class="page__wrapper__list list">
				<li v-for="(item, key) of data.payload[0]" :key="item.id" class="list__item">
					<router-link to="/item/3">
						key: {{ key }}, item: {{ item }}
					</router-link>
				</li>
			</ul> -->
		</div>
	</div>

	<modal-template
		v-if="popup.getStatus"
		:title="popup.getData.title"
		@closeModalWindow="closeModalWindow"
	>
		<template #content>
			<modal-add-form :section="useRoute().params.name" @refreshData="refreshData" />
		</template>
	</modal-template>
</template>

<script setup lang="ts">
import { usePopupStore } from './../../store/popups';
import { useSectionsStore } from './../../store/sections';

const popup = usePopupStore();

function openModalWindow () { popup.togglePopup(true, '', { title: 'Add new to ' + useRoute().params.name }); }
function closeModalWindow () { popup.togglePopup(false); }
async function exportCSV () {
	await navigateTo('https://jednoducha-aplikace-production.up.railway.app/api/v1/' + useRoute().params.name + '/export', {
		external: true,
	});
}
async function onClickCell (id) { await navigateTo('/item/' + useRoute().params.name + '/' + id);	}
</script>

<style scoped>
.page {
  /* @apply; */
}
.header {
  @apply p-[0.5rem];
}
.header__title {
  @apply text-[1.8rem];
}

.controllers {
  @apply flex pb-[1rem];
}
.controllers__item {
  @apply text-[1rem] mr-[1rem];
}
.controllers__item__add {
  @apply w-[15rem];
}

.page__wrapper__search {
  /* @apply  */
}
.page__wrapper__search input {
  @apply bg-[lightgrey] rounded-sm;
}

.page__wrapper__table-container {
	@apply overflow-auto;
}
.table {
  @apply w-full h-full text-left;
}
.table--empty {
	@apply text-[2rem] bg-brandColor p-[2rem];
}
.table__row {
  @apply cursor-pointer;
}
.table__row th {
  @apply bg-brandColor;
}
.table__row:hover {
  @apply bg-brandColor;
}
.table__row__cell {
  @apply p-[1rem];
}

</style>
