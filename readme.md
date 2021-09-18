# is-jxr

> Check if a Buffer/Uint8Array is a [JPEG XR](https://en.wikipedia.org/wiki/JPEG_XR) image

## Install

```sh
npm install is-jxr
```

## Usage

##### Node.js

```js
import {readChunk} from 'read-chunk';
import isJxr from 'is-jxr';

const buffer = await readChunk('unicorn.jxr', {length: 3});

isJxr(buffer);
//=> true
```

##### Browser

```js
const xhr = new XMLHttpRequest();
xhr.open('GET', 'unicorn.jxr');
xhr.responseType = 'arraybuffer';

xhr.onload = () => {
	isJxr(new Uint8Array(this.response));
	//=> true
};

xhr.send();
```

## API

### isJxr(buffer)

Accepts a `Buffer` (Node.js) or `Uint8Array`.

It only needs the first 3 bytes.

## Related

- [file-type](https://github.com/sindresorhus/file-type) - Detect the file type of a Buffer/Uint8Array
