//day36
//hoisting

console.log(x) //undefined 
 var x=5

// js is this way will read like that
/*
var x
console.log(x)
x=5
*/

//but let is not

console.log(y)// error Cannot access 'y' before initialization
let y =5;

// we will call function before make it !!
console.log(hello())
function hello() // function declaration
{
    return 1;
}

// because js read it like that

/*
function hello()
{
    return 1;
}
console.log(hello())
*/


// دي مش هتطلع فوق 
let hello1 = function() // function expression
{
    return 1;
}
hello1()

// day37
// scope and self invoked
// function call it self

(function(){
    console.log('hello2');
})();

// it will print array
function calc(...numbers)
{
    console.log(numbers)
}
calc(50,60,70,80,80) //[50, 60, 70, 80, 80]

//day38
//arrow function

let rabha = () =>{
    return 1;
}
//==
/*
let rabha = () => 1
let rabha = _ => 1
*/
console.log(rabha()) //1