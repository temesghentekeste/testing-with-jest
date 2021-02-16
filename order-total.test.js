const orderTotal = require('./order-total');

it('works', () => {
  expect(1).toBe(1);
});

it('Quantity', () => {
  expect(
    orderTotal({
      items: [
        { name: 'oranges', price: 8, quantity: 10 },
        { name: 'avacados', price: 5, quantity: 1 },
      ],
    })
  ).toBe(85);
});

it("Another Quantity", () => {
  expect( orderTotal({
    items: [
      { name: 'bananas', price: 10, quantity: 10 },
      { name: 'apple', price: 15, quantity: 20 },
    ],
  })).toBe(400)
})


it('Without Quantity', () => {
  expect(
    orderTotal({
      items: [
        { name: 'bananas', price: 10 },
        { name: 'apple', price: 15 },
      ],
    })
  ).toBe(25);
});



test('object assignment', () => {
  const data = { one: 1 };
  data['two'] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});