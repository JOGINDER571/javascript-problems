class Stream {
  constructor() {
    this.subscriptions = [];
  }
  subscribe(callback) {
    if (typeof callback !== "function") {
      throw new Error("invalid input");
    }
    this.subscriptions.push(callback); 
  }

  push(value) {
    this.subscriptions.forEach((method) => {
      method(value);
      //   method.call(this, value);
    });
  }
}
const stream = new Stream();
stream.subscribe((value) => console.log(value));
stream.subscribe((value) => console.log(value * 2));
stream.subscribe((value) => console.log(value * 3));
stream.push(2);
