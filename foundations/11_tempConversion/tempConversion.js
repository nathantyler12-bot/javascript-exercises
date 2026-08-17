const convertToCelsius = function(fahrenheitInput) {
  celciusOutput = (fahrenheitInput - 32) * 5/9
  if (celciusOutput != Math.round(celciusOutput)) {
    celciusOutput = +celciusOutput.toFixed(1)
  }
  return celciusOutput
};

const convertToFahrenheit = function(celciusInput) {
  fahrenheitOutput = (celciusInput * 9/5) + 32
  if (fahrenheitOutput != Math.round(fahrenheitOutput)) {
    fahrenheitOutput = +fahrenheitOutput.toFixed(1)
  }
  return fahrenheitOutput
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
