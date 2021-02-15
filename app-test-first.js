if( orderTotal({
  items: [
    { name: 'oranges', price: 8, quantity: 10 },
    { name: 'avacados', price: 5, quantity: 1 },
  ]}) !== 85)  {
    throw new Error( 'Check fail: Happy path(1)')
  }

  if (
    orderTotal({
      items: [
        { name: 'bananas', price: 10, quantity: 10 },
        { name: 'apple', price: 15, quantity: 20 },
      ],
    }) !== 400
  ) {
    throw new Error('Check fail: Happy path(2)');
  }

  function orderTotal(order) {
    const total = order.items.reduce( (prev, cur) => prev + cur.price * cur.quantity, 0)
    console.log(total);
    return total;
  }