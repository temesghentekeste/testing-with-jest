function orderTotal(order) {
  const total = order.items.reduce(
    (prev, cur) => prev + cur.price * cur.quantity,
    0
  );
  console.log(total);
  return total;
}

module.exports = orderTotal