import test from 'ava';
import {execa} from 'execa';

test('assumed rgb', async t => {
	const {stdout} = await execa('./cli.js', ['255', '154', '253']);
	t.is(stdout, 'ff9afd');
});

test('rgb', async t => {
	const {stdout} = await execa('./cli.js', ['rgb(40, 42, 54)']);
	t.is(stdout, '282a36');
});

test('rgba', async t => {
	const {stdout} = await execa('./cli.js', ['rgba(40, 42, 54, 75%)']);
	t.is(stdout, '282a36bf');
});
