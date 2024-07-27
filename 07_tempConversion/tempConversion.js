const convertToCelsius = function (degree) {
  // round to up to one decimal place
  return Math.round((((degree - 32) * 5) / 9) * 10) / 10;
};

const convertToFahrenheit = function (degree) {
  // round to up to one decimal place
  return Math.round(((degree * 9) / 5 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
