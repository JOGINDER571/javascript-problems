const obj2 = {
  name: "jsg",
  skills: {
    lang: "c++",
    angry: true,
  },
};

const obj1 = {
  age: 27,
  skills: {
    lang: "javascript",
  },
};

function merge(...args) {
  function merging(obj) {
    let output = {};
    for (let item in obj) {
      const value = obj[item];
      if (typeof value === "object") {
        let res = merging(value);
        output = { ...output, [item]: res };
      } else {
        // output[item] = value;
        output = { ...output, [item]: value };
      }
    }
    // console.log(output);
    return output;
  }
  let res = {};

  for (let item of args) {
    res = { ...res, ...merging(item) };
  }

  return res;
}

console.log(merge(obj1, obj2));
