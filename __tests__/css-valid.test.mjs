import * as fs from 'node:fs';
import { beforeEach, describe, it } from 'node:test';
import assert from 'node:assert/strict';
import stylelint from 'stylelint';
import configMain from '../index.js';
import configOrder from '../order.js';

const validCss = fs.readFileSync('./__tests__/__fixtures__/css-valid.css', 'utf-8');

describe('valid css with main config', () => {
	let result;

	beforeEach(async () => {
		result = await stylelint.lint({
			code: validCss,
			config: configMain,
		});
	});

	it('should not fail', () => {
		assert.equal(result.errored, false);
	});
});

describe('valid css with order config', () => {
	let result;

	beforeEach(async () => {
		result = await stylelint.lint({
			code: validCss,
			config: configOrder,
		});
	});

	it('should not fail', () => {
		assert.equal(result.errored, false);
	});
});
