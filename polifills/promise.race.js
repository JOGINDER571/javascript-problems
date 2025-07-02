// Promise.race take the array of promises and it return the promise that settles as soon as any of the input promises whether its fullfield or rejected.

function promiseRace(promises) {
  return new Promise((res, rej) => {
    let i = 0;
    promises.forEach((promise) => {
      promise
        .then((data) => {
          res(data);
        })
        .catch((err) => {
          rej(err);
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

promiseRace([createAsync(1), createAsync(2), createAsync(3)])
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err, "final err");
  });
