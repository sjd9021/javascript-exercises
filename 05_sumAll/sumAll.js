const sumAll = function (num1, num2) {
  //if num1 or num2 not a number or negative then return error
  if (
    num1 < 0 ||
    num2 < 0 ||
    typeof num1 !== "number" ||
    typeof num2 !== "number" ||
    !Number.isInteger(num1) ||
    !Number.isInteger(num2)
  ) {
    return "ERROR";
  }

  //find which number is greater
  const min = Math.min(num1, num2);
  const max = Math.max(num1, num2);
  sum = 0;
  for (i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
