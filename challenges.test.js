const challenges = require('./challenges');
// Capitalize Firt Letter in a String
test('capitalize the first letter', () => {
  let str = 'temesghen';
  str = challenges.flCapitalize(str);
  expect(str).toBe('Temesghen');
});

// Reverse String
test('reverse a given string', () => {
  let str = 'temesghen';
  str = challenges.reverseString(str);
  expect(str).toBe('nehgsemet');
});

// Testing an object equality: toEqual
test('user should be Temesghen Bahta object', () => {
  expect(challenges.createUser()).toEqual({
    firstName: 'Temesghen',
    lastName: 'Bahta',
  });
});

// Testing an object equality: toStrictEqual
test('user should be Temesghen Bahta object', () => {
  expect(challenges.createUser()).toStrictEqual({
    firstName: 'Temesghen',
    lastName: 'Bahta',
  });
});

// Testing an object equality: toBe
test('user should not be Temesghen Bahta object', () => {
  expect(challenges.createUser()).not.toBe({
    firstName: 'Temesghen',
    lastName: 'Bahta',
  });
});
