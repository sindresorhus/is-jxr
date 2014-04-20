'use strict';
var assert = require('assert');
var readChunk = require('read-chunk');
var isJxr = require('./index');

function check(filename) {
	return isJxr(readChunk.sync(filename, 0, 3));
}

it('should detect JPEG XR from Buffer', function () {
	assert(check('fixture.jxr'));
	assert(!check('fixture.png'));
});
