import { useSystemStore } from '~/store/system';

export default defineNuxtRouteMiddleware(() => {
	const system = useSystemStore();

	if (!system.isAuth) {
		if (system.getToken !== null) {
			system.authCheck();
		}
	}

	// if (authStore.getToken !== undefined) {
	// 	return;
	// }
});
