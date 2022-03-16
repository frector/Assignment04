//STEP 1
/*function halfNumber (num) {
    let half = num / 2;
    console.log(`Half of ${num} is ${half}`);
}
halfNumber(700);*/

//STEP 2
/*function squareNumber (num) {
    let square = num ** 2;
    console.log(`The result of squaring the number ${num} is ${square}`);
}
squareNumber(6);*/
//STEP 3
/*function percentOf(a, b){
    let percent = Math.round((a / b)*100);
    console.log(`${a} is ${percent}% of ${b}`);
}
percentOf(4,60);*/
//STEP 4
/*function findModulusOf(x,y){
    let mod = (y % x);
    console.log(`${mod} is the modulus of ${x} and ${y}`);
}
findModulusOf(4,10);*/
//STEP 5
let num1 = prompt('Please choose a number');
let num2 = prompt('Please choose another number');
let num3 = prompt('Please choose one more number');
function sumNums(num1, num2, num3) {
    let sum = num1 + num2 + num3;
    return sum;
}
console.log(sumNums);