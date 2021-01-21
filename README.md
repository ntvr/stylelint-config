# stylelint-config-ntvr

[![NPM version](http://img.shields.io/npm/v/@ntvr/stylelint-config-ntvr.svg)](https://www.npmjs.org/package/@ntvr/stylelint-config-ntvr)
[![Build Status](https://travis-ci.org/ntvr/stylelint-config-ntvr.svg?branch=master)](https://travis-ci.org/ntvr/stylelint-config-ntvr)
[![dependency Status](https://david-dm.org/ntvr/stylelint-config-ntvr/status.svg)](https://david-dm.org/ntvr/stylelint-config-ntvr)
[![peerDependency Status](https://david-dm.org/ntvr/stylelint-config-ntvr/peer-status.svg)](https://david-dm.org/ntvr/stylelint-config-ntvr?type=peer)
[![devDependency Status](https://david-dm.org/ntvr/stylelint-config-ntvr/dev-status.svg)](https://david-dm.org/ntvr/stylelint-config-ntvr?type=dev)
[![Downloads per month](https://img.shields.io/npm/dm/@ntvr/stylelint-config-ntvr.svg?style=flat)](https://npmcharts.com/compare/@ntvr/stylelint-config-ntvr)

> Ntvr' shareable config for [Stylelint](https://github.com/stylelint/stylelint).

Extends [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) with
more strict rules and giving preference to indentation with 4 spaces.

To see the rules that this config uses, please read the [config itself](./index.js).

## Installation

Install [Stylelint](https://github.com/stylelint/stylelint) and this config:

```bash
$ yarn add --dev stylelint @ntvr/stylelint-config-ntvr
```

## Usage

Apply the config in your `.stylelintrc` file:

```json
{
  "extends": "@ntvr/stylelint-config-ntvr"
}
```

### Suggested Extension

To further extend control over coding style of your stylesheets, you can also check for rules order
using [stylelint-order](https://github.com/hudochenkov/stylelint-order) plugin along with our config
[@ntvr/stylelint-config-ntvr-order](https://github.com/ntvr/stylelint-config-ntvr-order).
