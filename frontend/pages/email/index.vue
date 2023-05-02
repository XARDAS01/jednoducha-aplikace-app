<template>
	<div class="page">
		<section class="page__wrapper">
			<ul class="page__wrapper__list-controller list-controller">
				<li class="list-controller__item" @click="openModalWindow('simple', 'Send simple email')">
					<button class="list-controller__item" type="button">
						Send simple email
					</button>
				</li>
			</ul>

			<h2 class="page__wrapper__title">
				Choose the template you want to send
			</h2>

			<ul class="page__wrapper__list-templates list-templates">
				<li
					class="list-templates__item"
					@click="openModalWindow('template', 'Send email template')"
					v-html="useEmailTemplatesStore().templates.item"
				/>

				<li class="list-templates__item" />
			</ul>
		</section>
	</div>

	<modal-template
		v-if="usePopupStore().getStatus"
		:title="usePopupStore().getData.title"
		@closeModalWindow="usePopupStore().togglePopup(false)"
	>
		<template #content>
			<modal-send-email
				v-if="usePopupStore().getName === 'simple'"
				:section="usePopupStore().getName"
			/>

			<modal-send-email-template
				v-if="usePopupStore().getName === 'template'"
			/>
		</template>
	</modal-template>
</template>

<script setup lang="ts">
import { usePopupStore } from './../../store/popups';
import { useEmailTemplatesStore } from './../../store/emailTemplates';

function openModalWindow (type:string, title:string) { usePopupStore().togglePopup(true, type, { title }); }
</script>

<style scoped>
.list-controller {
	@apply flex flex-row justify-start;
}

.list-controller__item {
	@apply w-[20rem] h-[4rem] mr-[3rem] text-center text-[1.2rem] rounded-lg border border-secondBrandColor bg-secondBrandColor cursor-pointer;
}

.list-controller__item:hover {
	@apply bg-bgColor border border-secondBrandColor;
}

.page__wrapper__title {
	@apply text-[2rem] py-[2rem];
}

.list-templates {
	@apply flex;
}

.list-templates__item {
	@apply h-[45rem] w-[32rem] overflow-scroll cursor-pointer rounded-lg;
}

.list-templates__item:first-child {
	@apply mr-[5rem];
}
</style>
