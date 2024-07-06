const convertToCelsius = function(degreeFarenheit) {
  let degreeCelsius = (degreeFarenheit -32) * 5 / 9;
  return Math.round(degreeCelsius * 10) / 10;
};

const convertToFahrenheit = function(degreeCelsius) {
  let degreeFarenheit = degreeCelsius * 9 / 5 +32;
  return Math.round(degreeFarenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
