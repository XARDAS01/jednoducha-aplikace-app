<template>
	<div class="page">
		<section class="page__wrapper">
			<div class="page__wrapper__controllers--global controllers--global">
				<button
					type="button"
					class="btn btn-fill--dark controllers__item--global controllers__item__export--global"
					:disabled="useSectionsStore().getSectionToken.length === 0"
					@click="exportCSV"
				>
					Export CSV
				</button>
			</div>

			<db-item-table-template :items="useSectionsStore().getSectionToken" />
		</section>
	</div>
</template>

<script setup lang="ts">
import { useSectionsStore } from './../../../store/sections';
import { useSystemStore } from './../../../store/system';

function exportCSV () {
	useSystemStore().csvDownload('token');
}
</script>
