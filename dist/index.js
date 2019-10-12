"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var jsonParse = function jsonParse(data) {
  var obj = {};

  try {
    obj = JSON.parse(data);
  } catch (e) {}

  return typeof obj === 'number' ? {} : obj;
};

var _default = jsonParse;
exports["default"] = _default;