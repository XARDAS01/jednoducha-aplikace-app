<template>
	<div class="modal">
		<section class="modal__wrapper">
			<div class="modal__wrapper__item" v-html="useEmailTemplatesStore().templates.item" />

			<div class="modal__wrapper__item">
				<form class="modal__wrapper__form form" @submit.prevent="submit">
					<div class="form__container">
						<input
							v-model="emailTemplateForm.appeal"
							type="text"
							placeholder="Osloveni"
						>
						<input
							v-model="emailTemplateForm.prize"
							type="text"
							placeholder="Vyhra"
						>
					</div>
					<div class="form__container">
						<button
							type="submit"
							class="btn btn-fill--dark"
						>
							Send
						</button>
					</div>
				</form>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
import { useEmailTemplatesStore } from './../store/emailTemplates';

const emailTemplateForm = reactive({
	appeal: '',
	prize: '',
});

function submit () {
	useEmailTemplatesStore().sendEmailTemplates(emailTemplateForm.appeal, emailTemplateForm.prize);
}
</script>

<style scoped>
.modal__wrapper {
	@apply flex flex-row;
}
.modal__wrapper__item {
	@apply w-[32rem] h-[50rem] overflow-scroll;
}

.form {
	@apply flex flex-col max-w-[30rem] m-auto ml-[1rem];
}

.form__container {
	@apply flex flex-col;
}

.form__container input {
	@apply bg-lightGrey p-[1rem] mb-[1rem] rounded-md;
}

.form__container button:hover {
	@apply bg-brandColor;
}
</style>
