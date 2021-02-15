const someOrder = {
  items: [
    { name: 'oranges', price: 8 },
    { name: 'avacados', price: 5 },
    { name: 'mango', price: 5 },
    { name: 'bananas', price: 2 },
  ],
};

const orderTotal = order => order.items.reduce((prev, cur) => prev + cur.price, 0)

console.log(orderTotal(someOrder));