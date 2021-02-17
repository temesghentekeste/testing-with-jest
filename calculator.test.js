const Calculator = require('./calculator');

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

test('divide by zero throws an error', () => {
  let calculator = new Calculator(10, 0);
  expect(() => calculator.divide()).toThrow('Error: Divide by zero!');
});
