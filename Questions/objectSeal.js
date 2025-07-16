const obj = {
  name: "jsg",
  address: {
    city: "bhiwani",
  },
};
console.log(Object.isSealed(obj));
const restrictChangementRecursively = (obj) => {
  for (let item in obj) {
    const value = obj[item];
    if (typeof value === "object") {
      restrictChangementRecursively(value);
    }
  }
  Object.seal(obj);
  return obj;
};

Object.seal(obj);
// obj.age = "24"; // should not be added -> working fine
// obj.address.nearby = "rohtak"; // should not be added -> not working due to nested
// console.log(newObj);

const newObj = restrictChangementRecursively(obj);

newObj.age = "24"; // working fine
newObj.address.nearby = "rohtak"; // working fine
console.log(newObj);
