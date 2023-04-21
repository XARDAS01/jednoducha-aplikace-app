<template>
	<div class="page">
		<div class="page__wrapper">
			<form v-if="result" class="page__wrapper__form form">
				<div class="form__section">
					<div
						v-for="(item, key) of result.data.value.payload"
						:key="item.id"
						class="form__section__item"
					>
						<label :for="item">{{ key }}: </label>
						<input
							:id="item"
							v-model="form"
							type="text"
							:placeholder="item"
						>
					</div>
					<br>

					<!-- {{ result.data.value.payload }} -->

					{{ form }}
				</div>

				<div class="form__section">
					btn save
				</div>
			</form>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useCustomFetch } from './../../../composable/fetch';

const form = reactive({});

const result = await useCustomFetch<{}>(useRoute().params.name + '/getById?id=' + useRoute().params.id, 'GET');
</script>
