module.exports = {
	extends: [
		"./node_modules/fe-coding-standard/stylelint-default.json",
		"stylelint-config-recommended-vue",
	],
	rules: {
		"scss/operator-no-unspaced": null,
		"at-rule-no-unknown": [
			true,
			{
				ignoreAtRules: [
					"tailwind",
					"apply",
					"variants",
					"responsive",
					"screen",
					'layer',
				],
			},
		],
		"scss/at-rule-no-unknown": [
			true,
			{
				ignoreAtRules: [
					"tailwind",
					"apply",
					"variants",
					"responsive",
					"screen",
					'layer',
				],
			},
		],
		"declaration-block-trailing-semicolon": null,
		"no-descending-specificity": null,
	}
};
