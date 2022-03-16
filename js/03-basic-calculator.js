// IMPORT THE MODULE
import * as calc from './modules/calculator.js';

// COLLECT NUMBER 1, NUMBER 2, AND OPERATION FROM THE USER
let num1 = parseInt(prompt('Please enter a number'));
let num2 = parseInt(prompt('Please enter a second number'));
let operation = prompt('Please enter a type of operation as add, subtract, multiply or divide').toLowerCase();

// CHECK TO SEE WHAT OPERATION THEY'RE USING
switch (operation) {
    case 'add': 
        window.alert(calc.add(num1, num2));
        break;
    case 'subtract':
        window.alert(calc.sub(num1, num2));
        break;
    case 'multiply':
        window.alert(calc.mult(num1, num2));
        break;
    case 'divide':
        window.alert(calc.divide(num1, num2));
    default:
        window.alert('Sorry, Don\'t know that operation') ;   
}


// CALL THE APPROPRIATE FUNCTION



