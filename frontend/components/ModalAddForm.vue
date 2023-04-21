<template>
	<div class="modal">
		<div class="modal__wrapper">
			<!-- USER ADD FORM -->
			<form v-if="section === 'user'" class="modal__wrapper__form form" @submit.prevent="submitUserAdd">
				<div class="form__container">
					<input
						v-model="userAddForm.name"
						type="name"
						placeholder="Name"
					>
					<input
						v-model="userAddForm.surname"
						type="surname"
						placeholder="Surname"
					>
					<input
						v-model="userAddForm.email"
						type="text"
						placeholder="E-mail"
					>
					<input
						v-model="userAddForm.login"
						type="login"
						placeholder="Login"
					>
					<input
						v-model="userAddForm.password"
						type="password"
						placeholder="Password"
					>
				</div>
				<div class="form__container">
					<button
						type="submit"
						class="btn btn-fill--dark"
					>
						Save
					</button>
				</div>
			</form>

			<!-- BOOK ADD FORM -->
			<form v-if="section === 'book'" class="modal__wrapper__form form" @submit.prevent="submitBookAdd">
				<div class="form__container">
					<input
						v-model="bookAddForm.name"
						type="text"
						placeholder="Book name"
					>
					<input
						v-model="bookAddForm.isbn"
						type="text"
						placeholder="ISBN"
					>
					<!-- <input
						v-model="bookAddForm.token"
						type="text"
						placeholder="User token"
					> -->
				</div>

				<div class="form__container">
					<button
						type="submit"
						class="btn btn-fill--dark"
					>
						Save
					</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useSectionsStore } from './../store/sections';
import { useSystemStore } from './../store/system';

const props = defineProps({
	section: {
		type: String,
	},
});

const emit = defineEmits([ 'refreshData' ]);

const userAddForm = reactive({});
const bookAddForm = reactive({
	token: useSystemStore().getToken,
});

function submitUserAdd () { useSectionsStore().registerNewUserAction(userAddForm); emit('refreshData'); }
function submitBookAdd () { useSectionsStore().addAction(bookAddForm); emit('refreshData'); }
</script>

<style scoped>
.form {
  @apply flex flex-col max-w-[30rem] m-auto pb-[3rem];
}

.form__container {
  @apply flex flex-col p-[1rem];
}

.form__container input {
  @apply bg-lightGrey p-[1rem] m-[0.5rem] rounded-md;
}

.form__container button:hover {
  @apply bg-brandColor;
}
</style>
