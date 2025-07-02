// Promise.allsettled takes an array of promises and it will return the single promise with all settled values of fullfilled and rejected input promise.

function promiseAllSettle(promises) {
  return new Promise((res) => {
    let settled = 0,
      output = new Array(promises.length);
    promises.forEach((promise, index) => {
      promise
        .then((data) => {
          output[index] = { status: "fullfill", data };
        })
        .catch((err) => {
          output[index] = { status: "rejected", err };
        })
        .finally(() => {
          settled++;
          if (settled >= promises.length) {
            res(output);
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
      if (counter <= 2) {
        rej(time);
      } else {
        res(time);
      }
    }, time * 100);
  });
}

promiseAllSettle([createAsync(1), createAsync(2), createAsync(3)])
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
