// Promise.any takes an array of promises and it return a single promise that fullfills as soon as any of the input promises that fullfill. if all promises rejected then it will return a aggregate error, which contain all the rejected reasons.

function promiseAny(promises) {
  return new Promise((res, rej) => {
    let i = 0,
      errors = {};
    promises.forEach((promise) => {
      promise
        .then((data) => {
          res(data);
        })
        .catch((err) => {
          errors[i++] = err;
          if (i >= promises.length) {
            rej(errors);
          }
        });
    });
  });
}
let counter = 0;
function createAsync(time) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      counter++;
      if (counter < 4) {
        rej(time);
      } else {
        res(time);
      }
    }, time * 100);
  });
}

promiseAny([createAsync(1), createAsync(2), createAsync(3)])
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err, "final err");
  });
