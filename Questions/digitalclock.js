// create a digital clock which shows time in HH:MM:SS

const clock = () => {
  const time = new Date();
  const h = time.getHours();
  const m = time.getMinutes();
  const s = time.getSeconds();
  const ms = time.getMilliseconds();
  return pad(h) + ":" + pad(m) + ":" + pad(s) + ":" + pad(ms);
};
function pad(...args) {
  return String(args[0]).length === 1 ? "0" + args[0] : args[0];
}
// setInterval(() => {
console.log(clock());
// }, 1000);
