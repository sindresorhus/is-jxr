import test from 'ava';
import readChunk from 'read-chunk';
import m from '.';

const check = filename => m(readChunk.sync(filename, 0, 3));

test('detects JPEG XR from Buffer', t => {
	t.true(check('fixture.jxr'));
	t.false(check('fixture.png'));
});
