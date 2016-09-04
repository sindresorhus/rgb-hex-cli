#!/usr/bin/env node
'use strict';
const meow = require('meow');
const rgbHex = require('rgb-hex');

const cli = meow(`
	Examples
	  $ rgb-hex 255 154 253
	  ff9afd
		$ rgb-hex 234129131
		ea8183
		$ rgb-hex 'rgb(40, 42, 54)'
	  282a36
`);

console.log(rgbHex(cli.input.length === 1 ? cli.input[0].toString().match(/.{1,3}/g).join() : cli.input.join(' ')));
