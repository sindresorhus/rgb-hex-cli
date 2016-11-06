import test from 'ava';
import execa from 'execa';

test(async t => {
	t.is(await execa.stdout('./cli.js', ['255', '154', '253']), 'ff9afd');
	t.is(await execa.stdout('./cli.js', ['rgb(40, 42, 54)']), '282a36');
	t.is(await execa.stdout('./cli.js', ['rgba(40, 42, 54, 75%)']), '282a36bf');
});
