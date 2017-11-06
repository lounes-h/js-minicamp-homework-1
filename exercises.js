//Do not change any of the function names

function multiplyByTen(num) {
  // return num after multiplying it by ten
  var byTen = num * 10;
  return byTen;
}

function subtractFive(num) {
  // return num after subtracting five
  var subFive = num - 5;
  return subFive;
}

function areSameLength(str1, str2) {
  // return true if the two strings have the same length
  var str1Lenght = str1.length;
  var str2Lenght = str2.length;

  if(str1Lenght == str2Lenght){
    return true;
  }
  return false;
}

function areEqual(x, y) {
  // return true if x and y are the same
  // otherwise return false
  if(x == y){
    return true;
  }
  return false;
}

function lessThanNinety(num) {
  // return true if num is less than ninety
  // otherwise return false
  if(num < 90)
  {
    return true;
  }
  return false;
}

function greaterThanFifty(num) {
  // return true if num is greater than fifty
  // otherwise return false
  if(num > 50)
  {
    return true;
  }
  return false;
}

function add(x, y) {
  // add x and y together and return the value
  var sum = x + y;
  return sum;
}

function subtract(x, y) {
  // subtract y from x and return the value
  var substractValue = x - y;
  return substractValue;
}

function divide(x, y) {
  // divide x by y and return the value
  var divideValue = x / y;
  return divideValue;
}

function multiply(x, y) {
  // multiply x by y and return the value
  var multiplyValue = x * y;
  return multiplyValue;
}

function getRemainder(x, y) {
  // return the remainder from dividing x by y
  var remainderValue = x % y;
  return remainderValue;
}

function isEven(num) {
  // return true if num is even
  // otherwise return false
  var evenValue = num % 2;
  if(evenValue == 0){
    return true;
  }
  return false;
}

function isOdd(num) {
  // return true if num is false
  // otherwise return false
  var oddValue = num % 2;
  if(oddValue != 0){
    return true;
  }
  return false;
}

function square(num) {
  // square num and return the new value
  var squareValue = Math.pow(num, 2);
  return squareValue;
}

function cube(num) {
  // cube num and return the new value
  var cubeValue = Math.pow(num, 3);
  return cubeValue;
}

function raiseToPower(num, exponent) {
  // raise num to whatever power is passed in as exponent
  var raiseValue = Math.pow(num, exponent);
  return raiseValue;
}

function roundNumber(num) {
  // round num and return it
  var roundValue = Math.round(num);
  return roundValue;
}

function roundUp(num) {
  // round num up and return it
  var roundUpValue = Math.ceil(num);
  return roundUpValue;
}

function addExclamationPoint(str) {
  // add an exclamation point to the end of str and return the new string
  // 'hello world' -> 'hello world!'
  var exclamationValue = str + '!';
  return exclamationValue;
}

function combineNames(firstName, lastName) {
  // return firstName and lastName combined as one string and separated by a space.
  // 'Lambda', 'School' -> 'Lambda School'
  var combineValue = firstName + ' ' + lastName;
  return combineValue;
}

function getGreeting(name) {
  // Take the name string and concatenate other strings onto it so it takes the following form:
  // 'Sam' -> 'Hello Sam!'
  var greetingValue = 'Hello ' + name + '!';
  return greetingValue;
}

// If you can't remember these area formulas then head over to Google or look at the test code.
 
function getRectangleArea(length, width) {
  // return the area of the rectangle by using length and width
  var rectangleAreaValue = length * width;
  return rectangleAreaValue;
}

function getTriangleArea(base, height) {
  // return the area of the triangle by using base and height
  var triangleAreaValue = (base * height) / 2;
  return triangleAreaValue;
}

function getCircleArea(radius) {
  // return the rounded area of the circle given the radius
  var circleAreaValue = Math.PI * Math.pow(radius, 2);
  return Math.round(circleAreaValue) ;
}

function getRectangularPrismVolume(length, width, height) {
  // return the volume of the 3D rectangular prism given the length, width, and height
  var rectangularPrismeVolumeValue = length * width * height;
  return rectangularPrismeVolumeValue;
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  multiplyByTen: multiplyByTen,
  subtractFive: subtractFive,
  areSameLength: areSameLength,
  areEqual: areEqual,
  lessThanNinety: lessThanNinety,
  greaterThanFifty: greaterThanFifty,
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply,
  getRemainder: getRemainder,
  isEven: isEven,
  isOdd: isOdd,
  square: square,
  cube: cube,
  raiseToPower: raiseToPower,
  roundNumber: roundNumber,
  roundUp: roundUp,
  addExclamationPoint: addExclamationPoint,
  combineNames: combineNames,
  getGreeting: getGreeting,
  getRectangleArea: getRectangleArea,
  getTriangleArea: getTriangleArea,
  getCircleArea: getCircleArea,
  getRectangularPrismVolume: getRectangularPrismVolume
};
