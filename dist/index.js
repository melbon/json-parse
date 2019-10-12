'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var jsonParse = function jsonParse(data) {
    if (typeof data !== 'number') {
        try {
            return JSON.parse(data);
        } catch (e) {}
    }
    return {};
};

exports.default = jsonParse;