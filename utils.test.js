jest.mock('http');

const {loadTitle} = require("./utils")

test('should print an uppercase letter', () => {
  // expect(printTitle()).toBe('DELECTUS AUT AUTEM');
  return loadTitle().then( title => {
    console.log(title, "*******");
    expect(title).toBe('DELECTUS AUT AUTEM');
  })
})