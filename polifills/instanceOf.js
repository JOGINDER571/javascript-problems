// In JavaScript, every object has a special hidden property called [[Prototype]] (commonly accessed via __proto__ or Object.getPrototypeOf()), which points to another object. This is part of JavaScript’s prototype chain, and it's how inheritance is implemented.

const instanceOf = (obj, target) => {
  if (obj === null || typeof obj !== "object") return false;

  while (obj) {
    console.log(obj.__proto__, "ok", target.prototype);
    if (obj.__proto__ === target.prototype) return true;
    obj = obj.__proto__;
  }
  return false;
};

class Person {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    console.log(`Hi ${this.name}`);
  }
}

class PM extends Person {}
class Q {}

const user = new PM("alice");
// console.log(instanceOf(user, PM));
// console.log(instanceOf(user, Person));
// console.log(instanceOf(user, Q));

obj = {
  name: "hi",
};
obj1 = {
  age: "34",
};
// obj.__proto__ = obj1;
Object.setPrototypeOf(obj, obj1);
console.log(obj.age);
