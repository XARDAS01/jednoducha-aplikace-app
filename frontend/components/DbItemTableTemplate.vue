<template>
	<div class="template">
		<div class="template__wrapper">
			<table v-if="items?.length" class="template__wrapper__table table table-container__table">
				<tr class="table__row">
					<th
						v-for="(item, key) of items[0]"
						:key="item.id"
						class="table__row__cell"
					>
						{{ key }}
					</th>
				</tr>
				<tr
					v-for="row of items"
					:key="row.id"
					class="table__row"
				>
					<td
						v-for="cell of row"
						:key="cell.id"
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

	<!-- <modal-template
		v-if="popup.getStatus"
		:title="popup.getData.title"
		@closeModalWindow="closeModalWindow"
	>
		<template #content>
			<modal-add-form :section="useRoute().params.name" @refreshData="refreshData" />
		</template>
	</modal-template> -->
</template>

<script setup lang="ts">
import { usePopupStore } from './../store/popups';
const popup = usePopupStore();

const props = defineProps({
	items: {
		type: Array,
	},
});

async function onClickCell (id) { await navigateTo(useRoute().fullPath + '/' + id); }
</script>

<style scoped>
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
