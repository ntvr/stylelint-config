import * as fs from 'node:fs';
import { beforeEach, describe, it } from 'node:test';
import assert from 'node:assert/strict';
import stylelint from 'stylelint';
import config from '../index.js';

const invalidCss = fs.readFileSync('./__tests__/__fixtures__/css-invalid.css', 'utf-8');

describe('invalid css with main config', () => {
	let result;

	beforeEach(async () => {
		result = await stylelint.lint({
			code: invalidCss,
			config,
		});
	});

	it('should fail', () => {
		assert.equal(result.errored, true);
	});

	it('should fail due to !important', () => {
		assert.equal(result.errored, true);
		const { warnings } = result.results[0];
		assert.ok(warnings.length > 0);
		assert.ok(warnings.some((warning) => warning.rule === 'declaration-no-important'));
	});
});
