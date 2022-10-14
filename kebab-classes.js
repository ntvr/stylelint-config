module.exports = {
	rules: {
		'selector-class-pattern': [
			'^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
			{
				message: 'Expected class selector to be kebab-case',
			},
		],
	},
};
