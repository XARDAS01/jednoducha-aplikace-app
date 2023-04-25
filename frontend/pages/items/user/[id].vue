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
					<label class="form__container__label" for="surname">Surname: </label>
					<input
						id="surname"
						v-model="form.surname"
						class="form__container__input"
						type="lastname"
						placeholder="Surname"
					>
				</div>

				<div class="form__container">
					<label class="form__container__label" for="surname">Email: </label>
					<input
						id="email"
						v-model="form.email"
						class="form__container__input"
						type="email"
						placeholder="Email"
					>
				</div>

				<div class="form__container">
					<label class="form__container__label" for="login">Login: </label>
					<input
						id="login"
						v-model="form.login"
						class="form__container__input"
						type="login"
						placeholder="Login"
					>
				</div>

				<div class="form__container">
					<label class="form__container__label" for="password">Password: </label>
					<input
						id="password"
						v-model="form.password"
						class="form__container__input"
						type="text"
						placeholder="Password"
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
const item = useSectionsStore().getSectionUser.find(user => user.id === Number(useRoute().params.id));

const form = reactive({
	name: item.name,
	surname: item.surname,
	email: item.email,
	login: item.login,
	password: item.password,
	uid: item.uid,
});

function submit () {
	useSectionsStore().editSectionUserItem(item.id, form);
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
