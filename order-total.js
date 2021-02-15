function orderTotal(order) {
  const total = order.items.reduce((prev, cur) => {
    if (!cur.quantity) {
      return prev + cur.price * 1;
    }
    return prev + cur.price * cur.quantity;
  }, 0);
  return total;
}

module.exports = orderTotal;
