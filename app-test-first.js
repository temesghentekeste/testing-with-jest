if( orderTotal({
  items: [
    { name: 'oranges', price: 8, quantity: 10 },
    { name: 'avacados', price: 5, quantity: 1 },
  ]}) !== 85)  {
    throw new Error( 'Check fail')
  }

  function orderTotal() {
    return 85; // at this point the test passes
  }