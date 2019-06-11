
function stringToFixed(value, precision) {
  var stringValue = value.toString()
  var decimalPosition = stringValue.indexOf('.');  // gets the original index for the position of the decimal
  var updatedString = stringValue.replace(/\./, '');  // removes the decimal completely from value
  var newDecimalIndex;
  var stringNewDecimal;
  var roundedString;
  var finalResultNumber;
 
  if (precision === undefined) {
    precision = 0;
  }

  // if value is an integer no need to move decimal and run rounding calculations
  // can just complete calculation for number of digits after the decimal
  if (Number.isInteger(value)) {
    return value.toFixed(precision);
  }

  // calculates new position index for decimal
  newDecimalIndex = decimalPosition + precision;
  // adds decimal back to value but in new position
  stringNewDecimal = updatedString.substring(0, newDecimalIndex) + '.' + updatedString.substring(newDecimalIndex,  updatedString.length);

  // for edge case/rounding issue when value is less than 1 and precision is 0
  // i.e. stringToFixed (0.6, 0) === 0 (which is not correct, should === 1)
  if (value < 1 && precision === 0) {
    return roundedString = Math.round(Number(stringNewDecimal)).toString();
  }

  roundedString = Math.round(Number(stringNewDecimal)).toString();

  // covers the issue for calculation of roundedString when value is less than 1 (i.e. 0.615)
  // Number(061.5) === 61.5, then Math.round(61.5) === 62
  // need to add back the zero in order to correctly add decimal back in place
  if (stringValue[0] === '0') {
    roundedString = '0' + roundedString;
  }
  
  // adds decimal back to initial position
  // converting string to number in order to run native toFixed which will solve for allowing user to effectively choose precision (i.e stringToFixed(1.05, 5) === 1.05000)
  finalResultNumber = Number(roundedString.substring(0, decimalPosition) + '.' + roundedString.substring(decimalPosition, roundedString.length));
  
  return finalResult = finalResultNumber.toFixed(precision);
}