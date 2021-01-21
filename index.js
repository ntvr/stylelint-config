module.exports = {
	extends: 'stylelint-config-standard',
	rules: {
		indentation: 'tab',
		'at-rule-no-vendor-prefix': true,
		'declaration-no-important': true,
		'declaration-property-value-blacklist': [
			{
				'/^background/': [
					'http:',
					'https:',
				],
				'/^border/': [
					'none',
				],
				'/^transition/': [
					'/all/',
				],
			},
			{
				message: 'Transitioning all properties, absolute background URLs and `border: none` are '
					+ 'black-listed (declaration-property-value-blacklist)',
			},
		],
		'font-family-name-quotes': 'always-where-recommended',
		'function-url-quotes': 'never',
		'max-line-length': 120,
		'max-nesting-depth': [
			2, {
				ignore: ['blockless-at-rules'],
			},
		],
		'media-feature-name-no-vendor-prefix': true,
		'property-no-vendor-prefix': true,
		'selector-attribute-quotes': 'always',
		'selector-max-compound-selectors': 3,
		'selector-max-id': 0,
		'selector-max-specificity': '0,4,0',
		'selector-max-universal': 0,
		'selector-nested-pattern': [
			'^&:',
			{
				message: 'Only pseudo-classes and pseudo-elements can be nested (selector-nested-pattern)',
			},
		],
		'selector-no-qualifying-type': true,
		'selector-no-vendor-prefix': true,
		'value-no-vendor-prefix': true,
		'at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: [
					'content',
					'each',
					'else',
					'else if',
					'error',
					'for',
					'function',
					'if',
					'include',
					'mixin',
					'return',
				],
			},
		],
	},
};
