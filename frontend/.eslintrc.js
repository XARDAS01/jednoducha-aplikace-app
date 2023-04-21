module.exports = {
	root: true,
	parserOptions: {
		ecmaVersion: 'latest',
		parser: '@typescript-eslint/parser',
		sourceType: 'module',
	},
	env: {
		'vue/setup-compiler-macros': true,
	},
	extends: [
		'eslint:recommended',
		'plugin:vue/vue3-recommended',
		'plugin:@typescript-eslint/recommended',
		'@nuxtjs/eslint-config-typescript',
		'./node_modules/fe-coding-standard/eslint-default.json',
	],
	plugins: [
		'vue',
		'@typescript-eslint',
	],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-tabs': 'off',
		'vue/html-indent': [ 'error', 'tab' ],
		'vue/no-useless-v-bind': 'error',
		'vue/component-name-in-template-casing': [ 'error', 'kebab-case', {
			registeredComponentsOnly: false,
			ignores: [],
		} ],
		'vue/html-button-has-type': [ 'error', {
			button: true,
			submit: true,
			reset: true,
		} ],
		'vue/script-setup-uses-vars': 'error',
		'vue/no-multiple-template-root': 'off',
		'@typescript-eslint/no-unused-vars': 'warn',
		// handled by typescript rule
		'no-undef': 'off',
		'no-unused-vars': 'off',
		// messes up script with and without setup
		'import/first': 'off',
	},
};
