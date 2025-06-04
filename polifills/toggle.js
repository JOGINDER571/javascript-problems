// Create a toggle function that accepts list of arguments and each of them when invoked in a cycle.

function createToggle(...args) {
  let current = 0;
  return function () {
    console.log(args[current++]);
    if (current === args.length) {
      current = 0;
    }
  };
}

const toggle = createToggle("on", "off");
toggle();
toggle();
toggle();
toggle();
