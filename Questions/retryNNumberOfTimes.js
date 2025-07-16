let count = 0;

const wait = (ms = 300) => new Promise((resolve) => setTimeout(resolve, ms));

function createPromise() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      count++;
      if (count > 3) {
        res(count);
      } else {
        rej("Promise failed");
      }
    }, 100);
  });
}

function retryNNumberOfTimes(promise, n, message) {
  return promise()
    .then((result) => {
    //   console.log(result, "resolved");
      return Promise.resolve(result);
    })
    .catch((err) => {
      if (n > 0) {
        return wait(100).then((d) => {
          return retryNNumberOfTimes(promise, n - 1, message);
        });
      } else {
        return Promise.reject(message);
      }
    });
}

retryNNumberOfTimes(createPromise, 3, "Retrying failed promises")
  .then((results) => {
    console.log("All promises resolved:", results);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
