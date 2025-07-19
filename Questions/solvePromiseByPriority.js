function solvePromise(promises) {
  promises = promises.sort((a, b) => a.priority - b.priority);
  return new Promise((resolve, reject) => {
    let rejected = [],
      result = [],
      completed = 0,
      mostPriority = 0;
    promises.forEach((element) => {
      element.task
        .then((data) => {
          result.push(element.priority);
        })
        .catch((err) => {
          rejected.push(element.priority);
          const filter = promises.filter((p) => {
            return !rejected.includes(p.priority);
          });
          // console.log("filter", filter);
          if (
            filter?.length > 0 &&
            promises[mostPriority].priority !== filter[0].priority
          ) {
            mostPriority = filter[0].priority - 1;
          }
        })
        .finally(() => {
          completed++;
          if (result.includes(promises[mostPriority].priority)) {
            return resolve(result);
          }

          if (completed >= promises.length) {
            return reject("All promises rejected");
          }
        });
    });
  });
}

function createPromise() {
  const value = Math.floor(Math.random() * 5);
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (value > 7) {
        rej("value");
      } else {
        // console.log("value", value);
        res(value);
      }
    }, value * 100);
  });
}

const tasks = [
  { task: createPromise(), priority: 4 },
  { task: createPromise(), priority: 3 },
  { task: createPromise(), priority: 2 },
  { task: createPromise(), priority: 1 },
];

solvePromise(tasks)
  .then((data) => {
    console.log("pass", data);
  })
  .catch((err) => {
    console.log("failed", err);
  });
