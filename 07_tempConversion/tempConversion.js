const convertToCelsius = function(number) {
  let celsiusConversion;
  celsiusConversion = (number-32)*(5/9);
  let celsiusConversionRounded;
  celsiusConversionRounded = Math.round(celsiusConversion*10) / 10;
  return celsiusConversionRounded;
};

const convertToFahrenheit = function(number) {
  let fahrenheitConversion;
  fahrenheitConversion = (number*(9/5)+32);
  let fahrenheitConversionRounded;
  fahrenheitConversionRounded = Math.round(fahrenheitConversion*10) / 10;
  return fahrenheitConversionRounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
