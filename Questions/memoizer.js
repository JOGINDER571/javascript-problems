// Creating a function that memoizer or caches the result for the given input so that the subsequent call for the same input will be faster.

const memoizer = (fn) => {
  let caches = {};
  return function () {
    const key = arguments[0];

    if (caches[key]) {
      return caches[key];
    } else {
      const result = fn(key);
      caches[key] = result;
      return result;
    }
  };
};

function factorial(n) {
  if (n == 0 || n == 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

const memo = memoizer(factorial);
let a = memo(100);
console.log(a);
let b = memo(100);
console.log(b);
