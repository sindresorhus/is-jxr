import test from 'ava';
import {readChunkSync} from 'read-chunk';
import isJxr from './index.js';

const check = filename => isJxr(readChunkSync(filename, {length: 3}));

test('detects JPEG XR from Buffer', t => {
	t.true(check('fixture.jxr'));
	t.false(check('fixture.png'));
});
