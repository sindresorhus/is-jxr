'use strict';
module.exports = buffer => {
	if (!buffer || buffer.length < 3) {
		return false;
	}

	return buffer[0] === 73 &&
		buffer[1] === 73 &&
		buffer[2] === 188;
};
