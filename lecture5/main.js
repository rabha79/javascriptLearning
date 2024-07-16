//day23
//comparison in js(==)

let x ='rabha';
let y = 'ALI';
let z ='rabha';

console.log(x==y); // false
console.log(x==z); //true

// turn lowerCase to upperCase
console.log(x.toUpperCase())
// turn upperCase to lowerCase
console.log(y.toLowerCase())

// to remove the distance before and after the string

let name ='  rabha  '
console.log(name.trim())

// let askEmail = prompt('enter your email');
// let email = 'rabhaGharib@gamil.com';
// console.log(askEmail.toLowerCase().trim() == email);


// day24
// == values
console.log(5 == 5) //true
console.log(5 == '5') //true

// === values and datatype
console.log(5 === '5') //false
// <  ,  >
console.log(4>3) //true
console.log(4<3) //false
// <=
console.log(4<=4) //true

// != ---> لا تساوي
console.log( 4 != 4 ) //false

// && ,  ||
let product = 'tv-samsung';
let size = 50;
let salary = 10000;

// &&
console.log(salary >= 10000 && size == 50); // true
console.log(salary >= 10000 && size == 40); //false

console.log(salary >= 10000 || size == 40); //true
console.log(salary >= 10000 || size == 50); //true
console.log(salary >= 20000 || size == 40); //false
