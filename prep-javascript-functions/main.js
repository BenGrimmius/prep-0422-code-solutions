function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return 60 * hours;
}

var minutes = convertHoursToMinutes(2);
console.log('minutes', minutes);

function getGreeting(name) {
  return 'Hello' + ' ' + name;
}

var greeting = getGreeting('World');
console.log('Greeting', greeting);

function addAndMultiplyBy5(x, y) {
  return (x + y) * 5;
}

var total = addAndMultiplyBy5(10, 5);
console.log('Add and Multiply by 5', total);

function multiplyAndDivideBy5(x, y) {
  return (x * y) / 5;
}

var divideBy5 = multiplyAndDivideBy5(35, 10);
console.log('Multiply and divide by 5', divideBy5);

function subractTwoNumbers(x, y) {
  return x - y;
}

var subtract = subractTwoNumbers(22, 7);
console.log('Subtract Two Numbers', subtract);

function getCircleCircumference(radius) {
  return 2 * 3.14159265359 * radius;
}

var circumference = getCircleCircumference(5);
console.log('Circumberence', circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var fullName = getFullName('Ben', 'Grimmius');
console.log('Full Name', fullName);

function cube(x) {
  return x * x * x;
}

var getcube = cube(5);
console.log('5 Cubed', getcube);
