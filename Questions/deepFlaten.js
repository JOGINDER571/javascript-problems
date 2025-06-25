function flaten(obj, prefix) {
  let output = {};
  for (let item in obj) {
    let value = obj[item];
    const newKey = prefix ? prefix + "." + item : item;
    if (Array.isArray(value)) {
      const { ...arrobj } = value;
      let flat = flaten(arrobj, newKey);
      output = { ...output, ...flat };
    } else if (typeof value === "object") {
      let flat = flaten(value, newKey);
      output = { ...output, ...flat };
    } else {
      output = { ...output, [newKey]: value };
    }
  }
  return output;
}

const obj = {
  a: 12,
  b: 14,
  c: {
    p: 5,
    o: {
      l: {
        r: 3,
      },
    },
    q: 9,
  },
};

console.log(flaten(obj));
