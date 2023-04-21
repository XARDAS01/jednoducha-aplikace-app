<template>
	<div class="nuxt-container layout">
		<nuxt-layout v-if="system.isAuth">
			<nav>
				<the-navigation />
			</nav>

			<main class="content">
				<nuxt-page />
			</main>
		</nuxt-layout>

		<nuxt-layout v-else>
			<auth-window />
		</nuxt-layout>
	</div>
</template>

<script setup lang="ts">
import { useSystemStore } from './store/system';
import { useSectionsStore } from './store/sections';

const system = useSystemStore();
const sections = useSectionsStore();

onMounted(() => {
	if (system.isAuth) { sections.loadAllSections(); }
});
</script>

<style scoped>
.content {
	@apply fixed top-5 right-0 left-[18rem] bottom-0;
}
</style>
