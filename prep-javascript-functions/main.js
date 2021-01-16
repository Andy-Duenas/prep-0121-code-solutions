function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
var addTwoNumbersResults = addTwoNumbers(2, 2);
console.log(addTwoNumbersResults);

function convertHoursToMinutes(num1) {
  return num1 * 60;
}
var convertHoursToMinutesResults = convertHoursToMinutes(2);

console.log(convertHoursToMinutesResults);

function personalizeGreeting(str) {
  return 'Hello ' + str;
}

var personalizeGreetingResults = personalizeGreeting('World');

console.log(personalizeGreetingResults);

function returnDataType(type) {
  return typeof (type);
}

var returnDataTypeResults = returnDataType(1072);

console.log(returnDataTypeResults);

function addAndMultiplyBy5(num1, num2) {
  var sumOfNums = num1 + num2;
  return sumOfNums * 5;
}

var addAndMultiplyBy5Results = addAndMultiplyBy5(10, 5);

console.log(addAndMultiplyBy5Results);

function multiplyAndDivideBy5(num1, num2) {
  return num1 * num2 / 5;
}

var multiplyAndDivideBy5Results = multiplyAndDivideBy5(35, 10);

console.log(multiplyAndDivideBy5Results);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var subtractTwoNumbersResults = subtractTwoNumbers(22, 7);

console.log(subtractTwoNumbersResults);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

var getCircleCircumferenceResults = getCircleCircumference(5);

console.log(getCircleCircumferenceResults);

function returnFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var returnFullNameResults = returnFullName('Andy', 'Duenas');

console.log(returnFullNameResults);

function cubeNumber(num) {
  return Math.pow(num, 3);
}

var cubeNumberResults = cubeNumber(5);

console.log(cubeNumberResults);

function returnMathScience(num1, num2) {
  var results = num1 + num2;

  return 'If you add ' + num1 + ' and ' + num2 + ' together you get ' + results;
}

var returnMathScienceResults = returnMathScience(5, 12);

console.log(returnMathScienceResults);
