// Method chaining is an object oriented paradigm , in which method usually share a same reference which in javascript is sharing by this(current context) from each method.

class Calculator {
  constructor() {
    this.total = 0;
  }

  add(n) {
    this.total += n;
    return this;
  }

  sub(n) {
    this.total -= n;
    return this;
  }

  mul(n) {
    this.total *= n;
    return this;
  }

  div(n) {
    this.total /= n;
    return this;
  }
}

const calculator = new Calculator();

console.log(calculator.add(3).sub(1).mul(2).div(2).total);
