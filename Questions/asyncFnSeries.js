function asyncTask(i) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(i);
    }, i * 100);
  });
}

// by using for of loop and async/await

async function asyncFnSeriesForOf(promises) {
  for (let promise of promises) {
    try {
      const output = await promise;
      console.log(output);
    } catch (err) {
      console.log(err);
    }
  }
}

// asyncFnSeriesForOf([asyncTask(1), asyncTask(2), asyncTask(3)]);

async function asyncFnSeriesByReduce(promises) {
  promises.reduce((prev, curr) => {
    return prev.then((data) => {
      return curr.then((res) => {
        console.log(res);
      });
    });
  }, Promise.resolve([]));
}

// asyncFnSeriesByReduce([asyncTask(1), asyncTask(2), asyncTask(3)]);

function asyncFnSeriesByRecursion(promises) {
  const promise = promises.shift();
  if (!promise) return;
  promise.then((res) => {
    console.log(res);
  });
  if (promises.length > 0) {
    asyncFnSeriesByRecursion(promises);
  }
}

asyncFnSeriesByRecursion([asyncTask(1), asyncTask(2), asyncTask(3)], (val) => {
  console.log(val);
});
