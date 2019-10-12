'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var jsonParse = function jsonParse(data) {
    var obj = {};
    try {
        obj = JSON.parse(data);
    } catch (e) {}
    return typeof obj === 'number' ? {} : obj;
};

exports.default = jsonParse;