const { queryString, parse } = require('./queryString');

describe('Object to query string', () => {
  it('should create a valid query string when an object is provided', () => {
    const obj = {
      name: 'thiago',
      profession: 'developer',
    };

    expect(queryString(obj)).toBe('name=thiago&profession=developer');
  });

  it('should create a valid query string even when an array is passed', () => {
    const obj = {
      name: 'thiago',
      abilities: ['JS', 'TDD', 'BBQ'],
    };
    expect(queryString(obj)).toBe('name=thiago&abilities=JS,TDD,BBQ');
  });

  it('should throw an error when object is passed as value', () => {
    const obj = {
      name: 'Fabio',
      abilities: {
        first: 'JS',
        second: 'TDD',
      },
    };

    expect(() => {
      queryString(obj);
    }).toThrowError();
  });
});

describe('Query string to object', () => {
  it('should convert a query string to object', () => {
    const qs = 'name=thiago&profession=developer';
    expect(parse(qs)).toEqual({
      name: 'thiago',
      profession: 'developer',
    });
  });

  it('should convert a query string with one pair of key value into an object', () => {
    const qs = 'name=thiago';
    expect(parse(qs)).toEqual({
      name: 'thiago',
    });
  });

  it('should convert a query string into an object taking care of coma separated values', () => {
    const qs = 'name=thiago&abilities=BBQ,SBBQ';
    expect(parse(qs)).toEqual({
      name: 'thiago',
      abilities: ['BBQ', 'SBBQ'],
    });
  });
});
