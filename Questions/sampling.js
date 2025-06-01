// Create a function that accepts a function as a input and a count and execute that input function once for a given count of calls. known as sampling function

function Sampling(fn, count) {
  let currentCount = 0;
  return function (...args) {
    currentCount++;
    if (currentCount === count) {
      fn();
      currentCount = 0;
    }
  };
}

function message() {
  console.log("Hello, how are you?");
}

const sample = Sampling(message, 2);
sample();
sample();
sample();
sample();
sample();
