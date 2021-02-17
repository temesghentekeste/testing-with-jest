const challenges = require('./challenges');


// beforeEach(() => initializeDb())
// afterEach(() => closeDb());

beforeAll(() => initializeDb())
afterAll(() => closeDb());

const initializeDb = () => console.log('Database initialized...');
const closeDb = () => console.log('Database closed...');

// Capitalize Firt Letter in a String
test('flCapitalize function to exist', () => {
  expect(challenges.flCapitalize).toBeDefined();
});

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

// Working with async data: promise
test('user fetched should be Leanne Graham', () => {
  expect.assertions(1);
  return challenges.fetchUser().then((data) => {
    expect(data.name).toEqual('Leanne Graham');
  });
});

// Working with async data: aync/await
test('user fetched should be Leanne Graham', async () => {
  expect.assertions(1);
  const data = await challenges.fetchUser();
  expect(data.name).toEqual('Leanne Graham');
});
