const challenges = require('./challenges')
// Capitalize Firt Letter in a String
test('capitalize the first letter', () => {
  let str = 'temesghen'
  str = challenges.flCapitalize(str)
  expect(() => (str).toBe('Temesghen'));
});


// Reverse String
test('reverse a given string', () => {
  let str = 'temesghen';
  str = challenges.reverseString(str);
  expect(() => str.toBe('nehgsemet'));
});