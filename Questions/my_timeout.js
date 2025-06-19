const myTimeout = {
  timeids: [],
  setTimeout: function (fn, delay) {
    const id = setTimeout(fn, delay);
    this.timeids.push(id);
    return id;
  },
  cleatAllTimeout: function () {
    while (this.timeids.length > 0) {
      const id = this.timeids.pop();
      clearTimeout(id);
    }
  },
};

myTimeout.setTimeout(() => console.log("heelo1"), 1000);
myTimeout.setTimeout(() => console.log("heelo2"), 1000);
myTimeout.setTimeout(() => console.log("heelo3"), 1000);
myTimeout.cleatAllTimeout();
