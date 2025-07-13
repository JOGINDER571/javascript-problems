const obj = {
  name: "jsg",
  address: {
    city: "bhiwani",
  },
};

const restrictChangementRecursively = (obj) => {
  for (let item in obj) {
    const value = obj[item];
    if (typeof value === "object") {
      restrictChangementRecursively(value);
    }
  }
  Object.freeze(obj);
  return obj;
};

Object.freeze(obj);
// obj.name = "nivya"; // should not be update -> working fine
// obj.address.city = "rohtak"; // should not be update -> not working due to nested
// console.log(obj);

const newObj = restrictChangementRecursively(obj);
console.log(Object.isFrozen(newObj))
newObj.name = "nivya"; // working fine
newObj.address.city = "rohtak"; // working fine
console.log(newObj);
