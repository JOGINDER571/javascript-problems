// Promise.all takes the array of promises and it will return a single promise that fullfills with all values if all input promises fullfill. if any promise rejects then it will immediately rejects with reason.

//  by reduce method

// function promiseAll(promises) {
//   return new Promise((res, rej) => {
//     let out = [],
//       i = 0;
//     return promises.reduce((a, b) => {
//       return a.then((d) => {
//         return b
//           .then((da) => {
//             i++;
//             out.push(da);
//             if (i >= promises.length) {
//               res(out);
//             }
//           })
//           .catch((err) => {
//             rej("final error");
//           });
//       });
//     }, Promise.resolve());
//   });
// }

// by foreach
function promiseAll(promises) {
  return new Promise((res, rej) => {
    let out = [],
      i = 0;
    promises.forEach((promise) => {
      promise
        .then((data) => {
          out[i++] = data;
          if (i >= promises.length) {
            res(out);
          }
        })
        .catch((err) => {
          rej("failed");
        });
    });
  });
}

function createAsync(time) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (time == 1) {
        rej(time);
      } else {
        res(time);
      }
    }, time * 100);
  });
}

promiseAll([createAsync(1), createAsync(2), createAsync(3)])
  .then((d) => {
    console.log(d, "final");
  })
  .catch((err) => {
    console.log(err, "final err");
  });
