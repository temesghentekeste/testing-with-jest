class Calculator {
  constructor(firstNumber, secondNuber) {
    this.firstNumber = firstNumber;
    this.secondNuber = secondNuber;
  }

  add() {
    return this.firstNumber + this.secondNuber;
  }

  subtract() {
    return this.firstNumber - this.secondNuber;
  }

  multiply() {
    return this.firstNumber * this.secondNuber;
  }

  divide() {
     if( this.secondNuber === 0 ) {
       throw new Error('Error: Divide by zero!');
     }
     return this.firstNumber / this.secondNuber;
  }
}

module.exports = Calculator