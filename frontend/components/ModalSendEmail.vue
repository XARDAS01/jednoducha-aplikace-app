<template>
	<div class="modal">
		<section class="modal__wrapper">
			<form v-if="section === 'simple'" class="modal__wrapper__form form" @submit.prevent="sendSimpleEmail">
				<!-- Send simple email -->
				<div class="form__container">
					<input
						v-model="simpleEmailForm.to"
						type="email"
						placeholder="To"
					>
					<input
						type="email"
						placeholder="yuri.raduntcev@gmail.com"
						disabled
					>
					<input
						v-model="simpleEmailForm.subject"
						type="text"
						placeholder="Subject"
					>
					<textarea
						v-model="simpleEmailForm.body"
						type="text"
						placeholder="Body"
					/>
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

			<!-- Send email with attachment -->
			<form v-if="usePopupStore().getName === 'attachment'" class="modal__wrapper__form form" @submit.prevent="sendAttachmentEmail">
				<div class="form__container">
					<input
						v-model="attachmentEmailForm.to"
						type="email"
						placeholder="To"
					>
					<input
						type="email"
						placeholder="yuri.raduntcev@gmail.com"
						disabled
					>
					<input
						v-model="attachmentEmailForm.subject"
						type="text"
						placeholder="Subject"
					>
					<textarea
						v-model="attachmentEmailForm.body"
						type="text"
						placeholder="Body"
					/>
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
		</section>
	</div>
</template>

<script setup lang="ts">
import { useCustomFetch } from './../composable/fetch';
import { usePopupStore } from './../store/popups';

const props = defineProps({
	section: {
		type: String,
	},
});

const simpleEmailForm = reactive({});
const attachmentEmailForm = reactive({});

async function sendSimpleEmail () {
	const result = await useCustomFetch('/email/send-simple-email', 'POST', simpleEmailForm);
	if (result.data.value.code === 200) {
		usePopupStore().togglePopup(false);
	}
}

async function sendAttachmentEmail () {
	const result = await useCustomFetch('/email/send-email-with-attachment', 'POST', attachmentEmailForm);
	if (result.data.value.code === 200) {
		usePopupStore().togglePopup(false);
	}
}
</script>

<style scoped>
.form {
	@apply flex flex-col max-w-[30rem] m-auto pb-[3rem];
}

.form__container {
	@apply flex flex-col p-[1rem];
}

.form__container input,
.form__container textarea {
	@apply bg-lightGrey p-[1rem] m-[0.5rem] rounded-md;
}

.form__container button:hover {
	@apply bg-brandColor;
}
</style>
