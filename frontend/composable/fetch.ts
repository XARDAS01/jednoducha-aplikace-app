export const useCustomFetch = <T = unknown>(url: string, method: string, body?: object) => {
	const baseURL = 'https://jednoducha-aplikace-production.up.railway.app';
	const localeBaseURL = 'http://localhost:8080';
	const apiVersion = '/api/v1';

	// const apiBaseURL = baseURL + apiVersion;
	const apiBaseURL = localeBaseURL + apiVersion;
	// const token = localStorage.getItem('token');

	// if (!token) {
	// 	navigateTo('/');
	// }

	return useFetch<{ payload: T }>(url, {
		baseURL: apiBaseURL,
		method,
		// headers: {
		// 	Authorization: `Bearer ${ token }`,
		// },
		body: JSON.stringify(body),
	});
};
