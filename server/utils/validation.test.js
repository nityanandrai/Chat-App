const expect = require('expect');

const {isRealString} = require('./validation.js');

describe('Validation of String', () => {
  it('Should reject non-string values', () => {
    var res = isRealString(8);

    expect(res).toBe(false);
  });

  it('Should reject string with only values', () => {
    var res = isRealString('  ');

    expect(res).toBe(false);
  });

  it('Should allow non-space string values', () => {
    var res = isRealString(' nitya ');

    expect(res).toBe(true);
  });
});
