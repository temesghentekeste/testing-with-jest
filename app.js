const someOrder = {
  items: [
    { name: 'oranges', price: 8, quantity: 10 },
    { name: 'avacados', price: 5, quantity: 1 },
    { name: 'mango', price: 5, quantity: 2 },
    { name: 'bananas', price: 2, quantity: 10 },
    { name: 'shipping', price: 40, shipping: true },
  ],
};

const orderTotal = (order) => {
  const totalItems = order.items
    .filter((x) => !x.shipping)
    .reduce((prev, cur) => prev + cur.price * cur.quantity, 0);

    const shippingItem = order.items.find( x => !!x.shipping)
    const shipping = totalItems > 1000 ? 0 : shippingItem.price;
    return totalItems + shipping
};

console.log(orderTotal(someOrder));
