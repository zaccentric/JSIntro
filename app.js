// Zach Moore
// zm0864047
// CIS-131-W01

// 3, 2, 1 Code ...

// Write a program that displays your name and age
console.log("Zach Moore");
console.log("19");

// Write a program that displays the results of adding, subtracting, multiplying and dividing 6 by 3.
console.log(6 + 3);
console.log(6 - 3);
console.log(6 * 3);
console.log(6 / 3);

// Observe the following program and try to predict the values it displays.
console.log(4 + 5);
console.log("4 + 5");
console.log("4" + "5");
// Check your prediction by executing it.


// Playing with Variables

// Write a program that asks the user for his first name and his last name. 
// The program then displays them in one sentence.
let firstName = prompt("Enter your first name: ");
let lastName = prompt("Enter your last name: ");
console.log(firstName + " " + lastName);

// Observe the following program and try to predict the final values of its variables.
// Check your prediction by executing it.
let a = 2;
a -= 1;
a++;
let b = 8;
b += 2;
const c = a + b * b;
const d = a * b + b;
const e = a * (b + b);
const f = a * b / a;
const g = b / a * a;
console.log(a, b, c, d, e, f, g);

// Write a program that asks the user for a raw price. 
// After that, it calculates the corresponding final price using a VAT rate of 20.6%.
let rawPrice = prompt("Enter a raw price: ");
let finalPrice = rawPrice * 0.206;
console.log("The final price is " + finalPrice);

// Write a program that asks for a temperature in Celsius degrees, then displays it in Fahrenheit degrees.
let tempC = 32;
let tempF = (tempC * (9/5)) + 32;
console.log("The temperature in Fehrenheit degrees is " + tempF);

// Observe the following program.
// Add the necessary code to swap the values of variables number1 and number2.
let number1 = 3;
let number2 = 5;
console.log(number1); // Should show 3
console.log(number2); // Should show 5