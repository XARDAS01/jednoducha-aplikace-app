<template>
	<div class="page">
		<section v-if="item" class="page__wrapper">
			<form class="page__wrapper__form form" @submit.prevent="submit">
				<div class="form__container">
					<label class="form__container__label" for="id">ID: </label>
					<input
						id="id"
						class="form__container__input"
						type="id"
						placeholder="ID"
						:value="item.id"
						disabled
					>
				</div>

				<div class="form__container">
					<label class="form__container__label" for="name">Name: </label>
					<input
						id="name"
						v-model="form.name"
						class="form__container__input"
						type="name"
						placeholder="Name"
					>
				</div>

				<div class="form__container">
					<label class="form__container__label" for="isbn">ISBN: </label>
					<input
						id="isbn"
						v-model="form.isbn"
						class="form__container__input"
						type="text"
						placeholder="ISBN"
					>
				</div>

				<div class="form__container">
					<label class="form__container__label" for="authorUid">Author UID: </label>
					<input
						id="authorUid"
						v-model="form.authorUid"
						class="form__container__input"
						type="text"
						placeholder="Author UID"
					>
				</div>

				<div class="form__container">
					<label class="form__container__label" for="lastEditDate">Last Edit Date: </label>
					<input
						id="lastEditDate"
						v-model="form.lastEditDate"
						class="form__container__input"
						type="text"
						placeholder="Last Edit Date"
					>
				</div>

				<div class="form__container">
					<button class="btn btn-fill--dark" type="submit">
						Save
					</button>
				</div>
			</form>
		</section>

		<section v-else class="page__wrapper">
			empty
		</section>
	</div>
</template>

<script setup lang="ts">
import { useSectionsStore } from './../../../store/sections';
const item = useSectionsStore().getSectionBook.find(user => user.id === Number(useRoute().params.id));

const form = reactive({
	name: item.name,
	isbn: item.isbn,
	authorUid: item.authorUid,
	lastEditDate: item.lastEditDate,
});

function submit () {
	//
}
</script>

<style scoped>
.form {
  @apply flex flex-col max-w-[40rem] m-auto pb-[3rem];
}

.form__container {
  @apply flex flex-col p-[1rem];
}

.form__container input {
  @apply bg-brandColor text-white p-[1rem] m-[0.5rem] rounded-md;
}

.form__container button:hover {
  @apply bg-brandColor;
}
</style>
