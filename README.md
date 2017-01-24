# ijia-js-loader
Javascript Raw loader module for Webpack

## About
让开发者通过引入文件或模块，获取其经过压缩的字符内容。
Allows developers to get their compressed character content by introducing a file or module.

## Installation

```
npm install ijia-js-loader
```

## Usage

``` javascript
var fileContent = require("ijia-js-loader!./file.js");
var fileContent = require("ijia-js-loader!module");
// => returns file.js content as string with compressed


// OR
module: {
	loaders: [
		{test: "file.js", loaders: ["ijia-js-loader"]}
	]
}
```

## Usage Scene(Web Worker)

```
window['workerInlineScript'] = require("ijia-js-loader!pako") + require("ijia-js-loader!Parser") + require("ijia-js-loader!Loader");
```


## License

MIT (http://www.opensource.org/licenses/mit-license.php)