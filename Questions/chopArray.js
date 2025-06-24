const chop = (arr, n) => {
  let output = [],
    i = 0;
  while (i < arr.length) {
    output.push(arr.slice(i, n + i));
    i += n;
  }
  console.log(output);
};

chop([1, 2, 3, 4, 5], 2);
