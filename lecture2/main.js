// day7
//(+_-_*_/_%_**)
let num1 = 4;
let num2 = 8;

console.log(num1 + num2) //12
console.log(num1 - num2) //-4
console.log(num1 * num2) //32
console.log(num1 / num2) //0.5
console.log(num1 % num2) //4
console.log(num1 ** num2) //65536

console.log('num1' + num2) //num18
console.log('num1' - num2) //Nan --> not a number
console.log('num1' * num2) //Nan
console.log('num1' / num2) //Nan
console.log('num1' % num2) //Nan

// increment
let num = 7;
num = num + 3; // => num += 3
console.log(num)
// decrement
let number = 7;
number = number - 3; // => num -= 3
console.log(number)
// add one 
let num3=8
num3++
console.log(num3)
// minus one
let num4=8
num4++
console.log(num4)

let num5=10;
console.log(++num5) //11

let num6=10
console.log(num6++) //10

//day8
// transform string to number
console.log('5'+'4') //54
console.log('5'-'4') //1
console.log('5'*'4') //20
console.log('5'/'4') //1.25
console.log('5'%'4') //1
console.log('5'**'4') //625
console.log('5'-'rabha') //NaN

console.log(typeof NaN) //number

// to turn a string to a number with + we but before the the string +
console.log(+'5' + +'6');  //11
console.log(-'5') //-5 --> negative number
console.log(+'rabha') //NaN
console.log(+true) //1
console.log(+false) //0
console.log(+undefined) //NaN
console.log(+null) //0

//day9
// we have in js a function to turn the string to number

console.log(Number('5')) //5
// if we have a number and with it a string and we need to turn it to number
console.log(parseInt('7 rabha')) //7
console.log(parseInt(' rabha 7 rabha')) //NaN
console.log(parseInt('7.7')) //7 ---> turn the number without float
console.log(parseFloat('7.7')) //7.7


//day10

// max number in js

console.log(Number.MAX_VALUE) //1.7976931348623157e+308
console.log(Number.MAX_VALUE + 789456123) //1.7976931348623157e+308
// the save number in js
console.log(Number.MAX_SAFE_INTEGER) //9007199254740991
// the minimum save number
console.log(Number.MIN_SAFE_INTEGER) //-9007199254740991
// if we want to know if the number is safe or not 
console.log(Number.isSafeInteger(9007199254740991)) //true
console.log(Number.isSafeInteger(90071992547409911)) //false
// if we want to know if the number is integer or not
console.log(Number.isInteger(5)) //true
console.log(Number.isInteger('5')) //false
// if we want to know if the value is not a number 
console.log(Number.isNaN(5)) //false
console.log(Number.isNaN(5 - 'rabha')) //true

//day11

console.log(Math.E) //2.718281828459045
console.log(Math.PI) //3.141592653589793
// turn negative number to positive number
console.log(Math.abs(-4)) //4
// square of numbers
console.log(Math.sqrt(4)) //2
// to get the power 
console.log(Math.pow(4,2)) //16
// to get round of any number
console.log(Math.round(4.6)) //5
console.log(Math.round(4.3)) //4
// ceil
console.log(Math.ceil(4.6)) //5
console.log(Math.ceil(4.3)) //5
//floor
console.log(Math.floor(4.9)) //4
console.log(Math.floor(4.3)) //4
// to get the minimum number of the range of numbers
console.log(Math.min(7,5,4,2,1,0,3,-10)) //-10
// to get the maximum number of the range of numbers
console.log(Math.max(7,5,4,2,1,0,100,3,-10))//100

//day12
//حساب زكاة المال

let zakah = window.prompt()
console.log(0.025* zakah +' جنية')