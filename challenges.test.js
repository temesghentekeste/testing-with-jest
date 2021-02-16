const challenges = require('./challenges')

test('capitalize the first letter', () => {
  let str = 'temesghen'
  str = challenges.flCapitalize(str)
  expect(() => (str).toBe('Temesghen'));
});