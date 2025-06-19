const rgbtohexa = (rgb) => {
  const { r, g, b } = rgb;
  return `#` + r.toString(16) + g.toString(16) + b.toString(16);
};

console.log(rgbtohexa({ r: 255, g: 51, b: 255 }));
