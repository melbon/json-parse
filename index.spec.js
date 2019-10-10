const jsonParse = require('.');

test('test with object (valid json format)', () => {
    const data = '{"foo": "bar"}';
    expect(jsonParse(data)).toEqual(expect.objectContaining({foo: expect.anything()}));
});
test('test with object (invalid json)', () => {
    const data = '{foo: "bar"}';
    expect(jsonParse(data)).toMatchObject({});
});
test('test with string', () => {
    expect(jsonParse('foo')).toMatchObject({});
});
test('test with number', () => {
    expect(jsonParse(123)).toMatchObject({});
});
