const hexatorgb = (code) => {
  let r = parseInt(code.slice(1, 3), 16);
  let g = parseInt(code.slice(3, 5), 16);
  let b = parseInt(code.slice(5, 7), 16);
  return { r, g, b };
};
console.log(hexatorgb("#ff33cc"));
