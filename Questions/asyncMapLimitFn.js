Array.prototype.choppedArray = function (limit) {
  let arr = this;
  let outputs = [],
    i = 0;
  while (i < arr.length) {
    let part = arr.slice(i, limit + i);
    outputs.push(part);
    i += limit;
  }
  return outputs;
};

function mapLimitFn(arr, limit, fn) {
  const chunks = arr.choppedArray(limit);
  return new Promise((resolve, reject) => {
    const reduce = chunks.reduce((a, b) => {
      return a.then((val) => {
        return new Promise((res, rej) => {
          let results = [],
            task = 0;
          b.forEach((item) => {
            fn(item, (err, out) => {
              if (err) {
                rej(err);
              } else {
                results.push(out);
              }
              task++;
              if (task >= b.length) {
                res([...val, ...results]);
              }
            });
          });
        });
      });
    }, Promise.resolve([]));

    reduce
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

const numPromise = mapLimitFn([1, 2, 3, 4], 3, function (num, cb) {
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
