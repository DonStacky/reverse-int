module.exports = function reverse (n) {
    let str = String(n);
  let i = 0;
  let result = '';
  while (i < str.length) {
    if (str[i] === '-') {
        i += 1;
    }
    result = str[i] + result;
    i += 1;
  }
  return Math.abs(result);
}
