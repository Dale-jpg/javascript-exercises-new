const convertToCelsius = function(number) {
  let celsiusConversion;
  celsiusConversion = (number-32)*(5/9);

  return celsiusConversion;
};

const convertToFahrenheit = function(number) {
  let fahrenheitConversion;
  fahrenheitConversion = (number *(9/5) +32);
  
  return fahrenheitConversion;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
