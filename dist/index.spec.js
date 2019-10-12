'use strict';

var _ = require('.');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('test with object (valid json format)', function () {
    var data = '{"foo": "bar"}';
    expect((0, _2.default)(data)).toEqual(expect.objectContaining({ foo: expect.anything() }));
});
test('test with object (invalid json)', function () {
    var data = '{foo: "bar"}';
    expect((0, _2.default)(data)).toMatchObject({});
});
test('test with string', function () {
    expect((0, _2.default)('foo')).toMatchObject({});
});
test('test with number', function () {
    expect((0, _2.default)(123)).toMatchObject({});
});
test('test with number (string)', function () {
    expect((0, _2.default)('123')).toMatchObject({});
});