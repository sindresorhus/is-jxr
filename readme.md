# is-jxr

> Check if a Buffer/Uint8Array is a [JPEG XR](https://en.wikipedia.org/wiki/JPEG_XR) image


## Install

```
$ npm install is-jxr
```


## Usage

##### Node.js

```js
const readChunk = require('read-chunk');
const isJxr = require('is-jxr');
const buffer = readChunk.sync('unicorn.jxr', 0, 3);

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

Accepts a Buffer (Node.js) or Uint8Array.

It only needs the first 3 bytes.


## Related

- [file-type](https://github.com/sindresorhus/file-type) - Detect the file type of a Buffer/Uint8Array


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
