const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arrOfDigits = String(n).split('');
  let resArr = [];

  for (let idx in arrOfDigits) {
    let tempArr = [...arrOfDigits];
    tempArr.splice(idx, 1);
    resArr.push(tempArr.join(''));
  }
  return Math.max(...resArr);
}

module.exports = {
  deleteDigit
};
