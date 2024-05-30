const convertToCelsius = function(temp) {
  //Round to one decimal
  let tempCelcius = Math.round(((temp - 32) * (5 / 9)) * 10) / 10;
  return tempCelcius;
};

const convertToFahrenheit = function(temp) {
  let tempFahrenheit = Math.round(((temp * (9 / 5)) + 32) * 10) / 10;
  return tempFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
