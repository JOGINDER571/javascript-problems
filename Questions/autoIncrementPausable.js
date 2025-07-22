const increment = (initial, step) => {
  let interval;
  const start = () => {
    if (!interval) {
      interval = setInterval(() => {
        console.log(initial);
        initial += step;
      }, 1000);
    }
  };

  const stop = () => {
    clearInterval(interval);
  };
  return { start, stop };
};

const pausablefn = increment(0, 3);
pausablefn.start();

setTimeout(() => {
  pausablefn.stop();
}, 6000);
