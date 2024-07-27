const reverseString = function (str) {
  len = str.length;
  let reversedString = "";
  for (i = len - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
