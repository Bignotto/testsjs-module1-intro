const { queryString } = require('./queryString');

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
      name: 'thiago',
      abilities: ['JS', 'TDD', 'BBQ'],
    };
    expect(queryString(obj)).toBe('name=thiago&abilities=JS,TDD,BBQ');
  });
});
