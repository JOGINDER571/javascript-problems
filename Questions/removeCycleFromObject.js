const list = function (val) {
  this.val = val;
  this.next = null;
};

const item1 = new list(1);
const item2 = new list(2);
const item3 = new list(3);

item1.next = item2;
item2.next = item3;
item3.next = item1;

const removeCycle = (obj) => {
  const set = new WeakSet([obj]);

  (function cycle(obj) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === "object") {
          if (set.has(obj[key])) {
            delete obj[key];
          } else {
            set.add(obj[key]);
            cycle(obj[key]);
          }
        }
      }
    }
  })(obj);
};
// removeCycle(item1);
// console.log(item1);

// 2nd method , using json.stringify -> it accepts a replacer function that can be used to alter the value of the stringification process.

const getCircularReplacer = () => {
  const seen = new WeakSet();
  return (key, value) => {
    if (typeof value === "object" && key !== null) {
      console.log(value);
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
};

console.log(JSON.stringify(item1, getCircularReplacer()));
