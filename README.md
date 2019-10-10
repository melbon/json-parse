# simple-json-parser
Parse JSON without SyntaxError

## Install
```
$ npm install simple-json-parser
```

##Usage
```js
const jsonParse = required('simple-json-parser');

const obj1 = jsonParse('{"foo":"bar"}');
/* 
{
    "foo: "bar"
}
*/

const obj2 = jsonParse('foo');
/*
    {}
*/
```