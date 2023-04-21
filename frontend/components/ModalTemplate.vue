<template>
	<section
		class="modal"
		@click.self="onCloseModalWindow"
	>
		<div class="modal__wrapper">
			<div
				v-if="title"
				class="modal__wrapper__header header"
			>
				<div class="header__title">
					<h2>
						{{ title }}
					</h2>

					<div
						class="modal__wrapper__closeBox"
						@click="onCloseModalWindow"
					>
						<button
							type="button"
							class="modal__wrapper__closeBox__closeBtn"
						/>
					</div>
				</div>
			</div>

			<div class="modal__wrapper__content content">
				<slot name="content" />
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
const props = defineProps({
	title: {
		type: String,
		required: false,
	},
});

const emit = defineEmits([ 'closeModalWindow' ]);
const onCloseModalWindow = () => { emit('closeModalWindow'); };
onBeforeMount(() => { document.getElementsByTagName('html')[0].style.overflowY = 'hidden'; });
onBeforeUnmount(() => { document.getElementsByTagName('html')[0].style.overflowY = 'auto'; });
</script>

<style scoped>
.modal {
	@apply fixed top-0 left-0 flex items-center justify-center w-full h-full z-[9999999] bg-darkPurpleTransparent;
}

.modal__wrapper {
	@apply relative w-full max-w-[60rem] max-h-[75rem] overflow-auto

  tablet:rounded-md;
}

.modal__wrapper__header {
	@apply flex items-center text-center justify-center bg-brandColor px-[1.5rem] pt-[3rem] pb-[2.4rem];
}

.header__title {
	@apply text-white text-[2rem] font-bold leading-[5.4rem] relative w-full max-w-[160rem] px-[3.5rem]

		tablet:text-[3.2rem] tablet:leading-[6.4rem];
}

.content {
	@apply relative min-h-[7rem] bg-brandColor text-[black];
}

.modal__wrapper__closeBox {
	@apply absolute top-[-1.5rem] right-0 w-[2.2rem] h-[3.2rem] cursor-pointer

		tablet:top-[1.5rem] tablet:w-[3.2rem];
}

.modal__wrapper__closeBox__closeBtn::before {
	@apply absolute top-1/2 left-1/2 w-[2rem] h-[0.1rem] bg-white content-[""] -translate-x-1/2 -translate-y-1/2 -rotate-45

		tablet:w-[3rem];
}

.modal__wrapper__closeBox__closeBtn::after {
	@apply absolute top-1/2 left-1/2 w-[2rem] h-[0.1rem] bg-white content-[""] -translate-x-1/2 -translate-y-1/2 rotate-45

		tablet:w-[3rem];
}
</style>
