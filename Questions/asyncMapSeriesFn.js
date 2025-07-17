function mapSeries(arr, fn) {
  let results = [];
  const final = arr.reduce((prev, curr) => {
    return prev.then((d) => {
      return new Promise((resolve, reject) => {
        fn(curr, (err, result) => {
          if (err) {
            reject(err);
          } else {
            results.push(result);
            resolve(result);
          }
        });
      });
    });
  }, Promise.resolve([]));
  return final.then((data) => results);
}

const numPromise = mapSeries([1, 2, 3, 4], function (num, cb) {
  setTimeout(() => {
    num = num * 2;
    if (num === 10) {
      cb(true);
    } else {
      cb(null, num);
    }
  }, 1000);
});

numPromise
  .then((results) => {
    console.log("All promises resolved:", results);
  })
  .catch((err) => {
    console.error("Error:", err);
  });
