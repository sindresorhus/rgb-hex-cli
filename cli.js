#!/usr/bin/env node
import meow from 'meow';
import rgbHex from 'rgb-hex';

const cli = meow(`
	Examples
	  $ rgb-hex 255 154 253
	  ff9afd
	  $ rgb-hex 'rgb(40, 42, 54)'
	  282a36
	  $ rgb-hex 'rgba(40, 42, 54, 75%)'
	  282a36bf
`, {
	importMeta: import.meta,
});

console.log(rgbHex(cli.input.join(' ')));
