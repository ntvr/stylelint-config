import * as fs from 'node:fs';
import { beforeEach, describe, it } from 'node:test';
import assert from 'node:assert/strict';
import stylelint from 'stylelint';
import configScss from '../scss.js';

const validScss = fs.readFileSync('./__tests__/__fixtures__/scss-valid.scss', 'utf-8');

describe('valid scss with scss config', () => {
	let result;

	beforeEach(async () => {
		result = await stylelint.lint({
			code: validScss,
			config: configScss,
		});
	});

	it('should not fail', () => {
		assert.equal(result.errored, false);
	});
});
