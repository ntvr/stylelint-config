module.exports = {
	plugins: [
		'stylelint-order',
	],
	rules: {
		'order/order': [
			'dollar-variables',
			'custom-properties',
			{
				name: 'extend',
				type: 'at-rule',
			},
			{
				hasBlock: false,
				name: 'include',
				type: 'at-rule',
			},
			'declarations',
			'rules',
		],
		'order/properties-order': [

			// All properties
			'all',

			// Content
			'content',

			// Position
			'position',
			'inset',
			'inset-inline',
			'inset-inline-start',
			'inset-inline-end',
			'inset-block',
			'inset-block-start',
			'inset-block-end',
			'top',
			'right',
			'bottom',
			'left',
			'contain',
			'contain-intrinsic-size',
			'contain-intrinsic-inline-size',
			'contain-intrinsic-width',
			'contain-intrinsic-block-size',
			'contain-intrinsic-height',
			'isolation',
			'z-index',

			// General appearance
			'appearance',

			// Box model
			'direction',
			'container',
			'container-name',
			'container-type',
			'display',
			'flex',
			'flex-grow',
			'flex-shrink',
			'flex-basis',
			'flex-direction',
			'flex-flow',
			'flex-wrap',
			'grid',
			'grid-area',
			'grid-template',
			'grid-template-columns',
			'grid-template-rows',
			'grid-template-areas',
			'grid-column',
			'grid-column-start',
			'grid-column-end',
			'grid-row',
			'grid-row-start',
			'grid-row-end',
			'grid-auto-columns',
			'grid-auto-rows',
			'grid-auto-flow',
			'grid-gap',
			'grid-column-gap',
			'grid-row-gap',
			'columns',
			'column-count',
			'column-fill',
			'column-span',
			'column-width',
			'column-rule',
			'column-rule-width',
			'column-rule-style',
			'column-rule-color',
			'gap',
			'column-gap',
			'row-gap',
			'place-self',
			'place-content',
			'place-items',
			'align-self',
			'align-content',
			'align-items',
			'justify-self',
			'justify-content',
			'justify-items',
			'order',
			'table-layout',
			'empty-cells',
			'shape-outside',
			'shape-image-threshold',
			'shape-margin',
			'clip-path',
			'float',
			'clear',
			'box-sizing',
			'inline-size',
			'min-inline-size',
			'max-inline-size',
			'width',
			'min-width',
			'max-width',
			'block-size',
			'min-block-size',
			'max-block-size',
			'height',
			'min-height',
			'max-height',
			'aspect-ratio',
			'object-fit',
			'object-position',
			'padding',
			'padding-inline',
			'padding-inline-start',
			'padding-inline-end',
			'padding-block',
			'padding-block-start',
			'padding-block-end',
			'padding-top',
			'padding-right',
			'padding-bottom',
			'padding-left',
			'margin',
			'margin-inline',
			'margin-inline-start',
			'margin-inline-end',
			'margin-block',
			'margin-block-start',
			'margin-block-end',
			'margin-top',
			'margin-right',
			'margin-bottom',
			'margin-left',
			'overflow',
			'overflow-inline',
			'overflow-x',
			'overflow-block',
			'overflow-y',
			'overflow-anchor',

			// Typography
			'font',
			'font-style',
			'font-weight',
			'font-size',
			'font-size-adjust',
			'line-height',
			'font-family',
			'font-variant',
			'font-variant-alternates',
			'font-variant-caps',
			'font-variant-east-asian',
			'font-variant-emoji',
			'font-variant-ligatures',
			'font-variant-numeric',
			'font-variant-position',
			'font-feature-settings',
			'font-stretch',
			'font-synthesis',
			'font-synthesis-weight',
			'font-synthesis-style',
			'font-synthesis-small-caps',
			'font-synthesis-position',
			'font-kerning',
			'font-optical-sizing',
			'font-palette',
			'font-display',
			'src',
			'letter-spacing',
			'quotes',
			'text-align',
			'text-align-last',
			'text-indent',
			'text-decoration',
			'text-decoration-color',
			'text-decoration-line',
			'text-decoration-style',
			'text-decoration-thickness',
			'text-decoration-skip-ink',
			'text-underline-offset',
			'text-underline-position',
			'text-overflow',
			'text-shadow',
			'text-rendering',
			'text-size-adjust',
			'text-transform',
			'text-wrap',
			'text-wrap-mode',
			'text-wrap-style',
			'writing-mode',
			'white-space',
			'white-space-collapse',
			'word-break',
			'word-spacing',
			'overflow-wrap',
			'hyphens',
			'vertical-align',
			'list-style',
			'list-style-image',
			'list-style-position',
			'list-style-type',
			'counter-increment',
			'counter-reset',
			'counter-set',

			// Decorations
			'color-scheme',
			'color',
			'color-interpolation',
			'accent-color',
			'border',
			'border-width',
			'border-style',
			'border-color',
			'border-image',
			'border-image-outset',
			'border-image-repeat',
			'border-image-slice',
			'border-image-source',
			'border-image-width',
			'border-inline',
			'border-inline-width',
			'border-inline-style',
			'border-inline-color',
			'border-inline-start',
			'border-inline-start-width',
			'border-inline-start-style',
			'border-inline-start-color',
			'border-inline-end',
			'border-inline-end-width',
			'border-inline-end-style',
			'border-inline-end-color',
			'border-block',
			'border-block-width',
			'border-block-style',
			'border-block-color',
			'border-block-start',
			'border-block-start-width',
			'border-block-start-style',
			'border-block-start-color',
			'border-block-end',
			'border-block-end-width',
			'border-block-end-style',
			'border-block-end-color',
			'border-top',
			'border-top-width',
			'border-top-style',
			'border-top-color',
			'border-right',
			'border-right-width',
			'border-right-style',
			'border-right-color',
			'border-bottom',
			'border-bottom-width',
			'border-bottom-style',
			'border-bottom-color',
			'border-left',
			'border-left-width',
			'border-left-style',
			'border-left-color',
			'border-radius',
			'border-start-start-radius',
			'border-start-end-radius',
			'border-end-start-radius',
			'border-end-end-radius',
			'border-top-left-radius',
			'border-top-right-radius',
			'border-bottom-right-radius',
			'border-bottom-left-radius',
			'border-collapse',
			'border-spacing',
			'background',
			'background-image',
			'background-position',
			'background-position-x',
			'background-position-y',
			'background-size',
			'background-repeat',
			'background-attachment',
			'background-origin',
			'background-clip',
			'background-color',
			'background-blend-mode',
			'paint-order',
			'stroke',
			'fill',
			'outline',
			'outline-color',
			'outline-style',
			'outline-width',
			'outline-offset',
			'box-decoration-break',
			'box-shadow',

			// Effects and transforms
			'visibility',
			'opacity',
			'mix-blend-mode',
			'filter',
			'backdrop-filter',
			'mask',
			'mask-clip',
			'mask-composite',
			'mask-image',
			'mask-mode',
			'mask-origin',
			'mask-position',
			'mask-repeat',
			'mask-size',
			'mark-border',
			'mask-border-mode',
			'mask-border-outset',
			'mask-border-repeat',
			'mask-border-slice',
			'mask-border-source',
			'mask-border-width',
			'mask-type',
			'translate',
			'rotate',
			'scale',
			'perspective',
			'perspective-origin',
			'transform',
			'transform-box',
			'transform-origin',
			'transform-style',
			'backface-visibility',
			'image-orientation',
			'image-rendering',

			// Interactions
			'user-select',
			'pointer-events',
			'resize',
			'touch-action',
			'scroll-behavior',
			'scroll-snap-type',
			'scroll-padding',
			'scroll-padding-inline',
			'scroll-padding-inline-start',
			'scroll-padding-inline-end',
			'scroll-padding-block',
			'scroll-padding-block-start',
			'scroll-padding-block-end',
			'scroll-padding-top',
			'scroll-padding-right',
			'scroll-padding-bottom',
			'scroll-padding-left',
			'scroll-snap-align',
			'scroll-margin',
			'scroll-margin-inline',
			'scroll-margin-inline-start',
			'scroll-margin-inline-end',
			'scroll-margin-block',
			'scroll-margin-block-start',
			'scroll-margin-block-end',
			'scroll-margin-top',
			'scroll-margin-right',
			'scroll-margin-bottom',
			'scroll-margin-left',
			'scroll-snap-stop',
			'overscroll-behavior',
			'overscroll-behavior-inline',
			'overscroll-behavior-block',
			'overscroll-behavior-x',
			'overscroll-behavior-y',
			'caret-color',
			'cursor',
			'scrollbar-color',
			'scrollbar-gutter',
			'scrollbar-width',

			// Transitions and animations
			'transition',
			'transition-property',
			'transition-duration',
			'transition-timing-function',
			'transition-delay',
			'transition-behavior',
			'animation',
			'animation-name',
			'animation-duration',
			'animation-timing-function',
			'animation-delay',
			'animation-iteration-count',
			'animation-direction',
			'animation-fill-mode',
			'animation-play-state',
			'will-change',
		],
	},
};
