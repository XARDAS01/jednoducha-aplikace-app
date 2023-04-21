<template>
	<div class="auth">
		<div class="auth__wrapper">
			<!-- LOGIN FORM -->
			<form v-if="isActiveLoginForm" class="auth__wrapper__form form" @submit.prevent="loginSubmit">
				<div class="form__header">
					<h1 class="form__header__title">
						Login
					</h1>
				</div>
				<div class="form__body">
					<input
						v-model="loginForm.login"
						type="login"
						placeholder="Login"
					>
					<input
						v-model="loginForm.password"
						type="password"
						placeholder="Password"
					>
				</div>
				<div class="form__footer">
					<button type="submit" class="btn btn-fill--dark">
						Login
					</button>
				</div>

				<div class="form__switch">
					Don't have an account yet?<br>
					<button type="button" @click="isActiveLoginForm = false">
						Registration
					</button>
				</div>
			</form>

			<!-- REGISTRATION FORM -->
			<form v-else class="auth__wrapper__form form" @submit.prevent="registrationSubmit">
				<div class="form__header">
					<h1 class="form__header__title">
						Registration
					</h1>
				</div>
				<div class="form__body">
					<input
						v-model="registrationForm.name"
						type="name"
						placeholder="Name"
					>
					<input
						v-model="registrationForm.surname"
						type="surname"
						placeholder="Surname"
					>
					<input
						v-model="registrationForm.email"
						type="text"
						placeholder="E-mail"
					>
					<input
						v-model="registrationForm.login"
						type="login"
						placeholder="Login"
					>
					<input
						v-model="registrationForm.password"
						type="password"
						placeholder="Password"
					>
				</div>
				<div class="form__footer">
					<button type="submit" class="btn btn-fill--dark">
						Registration
					</button>
				</div>

				<div class="form__switch">
					Already have an account?<br>
					<button type="button" @click="isActiveLoginForm = true">
						Login
					</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useSystemStore } from './../store/system';

const loginForm = reactive({});
const registrationForm = reactive({});
const isActiveLoginForm = ref(true);

function registrationSubmit () { useSystemStore().sendRegistrationFormToServer(registrationForm); }
function loginSubmit () { useSystemStore().sendLoginFormToServer(loginForm); }
</script>

<style scoped>
.auth {
  @apply flex justify-center items-center w-full;
}
.auth__wrapper {
  @apply flex items-center justify-center w-full max-w-[40rem] h-[45rem] bg-brandColor rounded-md;
}

.form {
  @apply flex flex-col items-center;
}

.form__header__title {
  @apply text-[3.4rem] pb-[2rem];
}

.form__body {
  @apply flex flex-col;
}

.form__body input {
  @apply w-[20rem] text-black bg-lightGrey p-[1rem] m-[0.5rem] rounded-md;
}
.form__footer button {
  @apply w-[20rem] mt-[1rem];
}
.form__footer button:hover {
  @apply bg-brandColor;
}
.form__switch {
  @apply text-center pt-[1.5rem];
}
.form__switch button {
  @apply text-[1.4rem] font-bold;
}
.form__switch button:hover {
  @apply text-secondBrandColor;
}
</style>
