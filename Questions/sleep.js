// Javascript does not have inbuilt function for sleep , but with the help of promises/async await we can make it.

const sleep = (wait) => {
  return new Promise((resolve) => setTimeout(resolve, wait));
};

sleep(2000)
  .then((data) => {
    console.log("print after some time");
  })
  .catch((err) => {
    console.log(err);
  });
