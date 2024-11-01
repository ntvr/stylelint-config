module.exports = {
	extends: ['airbnb-base'],
	env: {
		node: true,
		es2021: true,
	},
	rules: {
		indent: ['error', 'tab'],
		'no-tabs': 'off',
		'import/extensions': [
			'error',
			'ignorePackages',
		],
	},
};
