function createPromise(i) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(i);
    }, i * 100);
  });
}

function executeParallel(arr, callback) {
  arr.forEach((promise) => {
    promise.then((res) => {
      callback(res);
    });
  });
}

executeParallel(
  [createPromise(1), createPromise(2), createPromise(3)],
  (val) => {
    console.log(val);
  }
);
