// day1 

// to write something in tbe browser as we write it with a html
document.write('hello world');

// to write something in the console
console.log('hello world');

// to write something like a message it is pop up
// when we use this every thing in html will disappears 
// window.alert('hello world');

// day2
/*
how to edit something in html --->
first--> i will select the item 
second--> i will choose which thing i want to change
*/ 
document.querySelector('h1').style.color ='blue';


// write as we write it with html
document.write('<h1>hello world1</h1>')


/*
console--> it is an object 
 it make enable to write anything in the console
*/
// console.log('hello')

// enable me to write a wrong message
// console.error('test')

/* to control the browser window
the window -->have all the commands in the js
the console is object and the document is object 
the window have inside it (console + document)
*/
// window.alert('test')

// window.print();

// window.document.write('rabha hello')
// window.console.error('test')

// cause we already work in window we do not need to writ it 

// so we can write
// alert('happy')
// print()

// day3

// f12 open console

/*
to know if there is any error in my code we should open console
in this code will display rabha1-rabha2 and will display the error in which line
*/

// document.write('<h1>rabha1</h1>')
// document.write('<h1>rabha2</h1>')
// document.wrte('<h1>rabha3</h1>')
// document.write('<h1>rabha4</h1>')
// document.write('<h1>rabha5</h1>')
 

// day4
/*
javascript ---> primitive - non primitive 
primitive ---> (string["text"] - Number[10] - Boolean[true-false] - null - undefined )

*/ 

// document.write( typeof 'hhhhh') //string
// document.write( typeof 10) // number 
// document.write( typeof 10.5)  // number
// document.write( typeof '10') //string
// document.write(10+50) //60
// document.write('10' + '50') //1050
// document.write(10+'50') //1050
// document.write( typeof true) // boolean 
// document.write( typeof undefined) // undefined
// let x
// document.write( typeof x) // undefined

// document.write( typeof null ) // object

// day 5

/*
variables --> var - let - const
*/

// var name =10 ;
// name ='rabha';
// name = 'rabha gharib';// if i want to change the value of the variable
// console.log(name);

var x;
x=10;
x=60;

let y;
y=20;
y=80;
/*
here in const it is not available to write like that we should make in one line
const z;
z=50;
*/
// i can not change the variable in the const
const z=50;

// the difference between var and let 

// in var we can make that
var r =4;
var r=8;
// in let and const we can not do it 
// let c = 6;
// let c = 9;

let e;
console.log(e) //undefined

var w;
console.log(w) //undefined

// in const i cant make this i should give a value to variable
const t =1;
console.log(t)

// day 6
// concatenation --> join somethings together

let name = 'rabha';
let age = 22;
let q= ' '
console.log(name +q+ age); //rabha 22
console.log(name+' '+age);//rabha 22
// console.log('my name is '+name+ ' '+ ',my age is '+age) =
 console.log(`my name is ${name} and my age is ${age}`)




