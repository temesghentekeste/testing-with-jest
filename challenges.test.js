const challenges = require('./challenges');
const Calculator = require('./calculator');
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

// Calculator tests
test('adds two numbers', () => {
  const calculator = new Calculator(2, 3);
  expect(calculator.add()).toBe(5);
});

test('subtract second num from first num', () => {
  const calculator = new Calculator(2, 3);
  expect(calculator.subtract()).toBe(-1);
  expect(calculator.subtract()).not.toBe(-10);
  expect(calculator.subtract()).not.toBeNull();
});

test('multiply two numbers', () => {
  const calculator = new Calculator(2, 3);
  expect(calculator.multiply()).toBe(6);
});

test('divide two numbers', () => {
  let calculator = new Calculator(10, 2);
  expect(calculator.divide()).toBe(5);

});
