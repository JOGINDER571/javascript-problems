// In currying , we return a function for each function invoked which accept the next arguments inline , with the help of currying we can transform a function with multiple arguments into sequence of nested function.

function sum(...args) {
  let storage = [...args];
  function currying(...args) {
    if (args.length === 0) {
      return storage.reduce((a, b) => a + b, 0);
    }

    storage = [...storage, ...args];
    return currying;
  }

  currying.valueOf = function () {
    return storage.reduce((a, b) => a + b, 0);
  };

  currying.value = currying.valueOf;
  return currying;
}

console.log(sum(1)(2)(6)());
