import * as fs from 'node:fs';
import { beforeEach, describe, it } from 'node:test';
import assert from 'node:assert/strict';
import stylelint from 'stylelint';
import configOrder from '../order.js';
import configCssModules from '../cssModules.js';

const validCssModules = fs.readFileSync('./__tests__/__fixtures__/css-modules-valid.css', 'utf-8');

describe('valid css modules with order config', () => {
	let result;

	beforeEach(async () => {
		result = await stylelint.lint({
			code: validCssModules,
			config: configOrder,
		});
	});

	it('should not fail', () => {
		assert.equal(result.errored, false);
	});
});

describe('valid css modules with cssModules config', () => {
	let result;

	beforeEach(async () => {
		result = await stylelint.lint({
			code: validCssModules,
			config: configCssModules,
		});
	});

	it('should not fail', () => {
		assert.equal(result.errored, false);
	});
});
