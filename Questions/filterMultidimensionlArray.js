const filter = (arr, test) => {
  const result = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      const output = filter(item, test);
      result.push(output);
    } else {
      if (test(item)) {
        result.push(item);
      }
    }
  }
  return result;
};

// let arr = [[1, [2, [3, "foo", { a: 1 }]], "bar"]];
// let filtered = filter(arr, (e) => typeof e === "string");
// console.log(JSON.stringify(filtered));

// count number of elements in nested array

const countElement = (arr, test) => {
  let count = 0;
  for (let item of arr) {
    if (Array.isArray(item)) {
      count += countElement(item, test);
    } else {
      if (test(item)) {
        count++;
      }
    }
  }
  return count;
};

let arr = [[1, [2, [3, "foo", { a: 1 }]], "bar"]];
let filtered = countElement(arr, (e) => typeof e === "number");
console.log('hi',filtered);
