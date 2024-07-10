// day13

// turn  number to string
let x=100;
console.log(String(x)) //100 --> as a string'100'
console.log(String(50)) //'50'
// another way
console.log(x.toString()) //'100'
// console.log(100.toString()) --> this is not valid because . after the number make it float we should use -->() or ..
console.log((100).toString())
console.log(100..toString())

//day14
// string(repeat-length-search-slice-split)

//repeat
let name = 'rabha gharib'
console.log(name.repeat(5))
//length
console.log(name.length)
let num=100;
console.log(num.length) //undefined
console.log(name[0]) //r
console.log(name[1]) //a

//charAt
console.log(name.charAt(0)) //r
console.log(name.charAt(0)) //a
console.log(name[20]) //undefined
console.log(name.charAt(20)) //

//indexOf ---> from left to right
console.log(name.indexOf('b')) //2
console.log(name.indexOf('b',3)) //11
console.log(name.indexOf('gharib')) //6

//lastIndexOf ---> from right to left
console.log(name.lastIndexOf('b')) //11
console.log(name.lastIndexOf('r')) //9
console.log(name.lastIndexOf('r',8)) //0

//slice
console.log(name.slice()) //rabha gharib
console.log(name.slice(6)) //gharib
console.log(name.slice(0,4)) //rabh

//split
let name1 = 'rabha gharib mohammed gharib'
console.log(name.split()) //['rabha gharib']
console.log(name.split(' ')) //['rabha', 'gharib']
console.log(name1.split(' ')) //['rabha', 'gharib', 'mohammed', 'gharib']
console.log(name1.split(' ',2)) // ['rabha', 'gharib']

//day15
console.log(name.slice()) //rabha gharib
console.log(name.substring()) //rabha gharib
console.log(name.substr()) //rabha gharib

console.log(name.slice(-6)) //gharib
console.log(name.slice(-6,-4)) //gh
console.log(name.substring(-6,-4)) //      --->مبتقبلش قيمه فرديه

let name2= 'i love java script'
console.log(name2.slice(2,6)) //love
console.log(name2.substring(2,6)) //love
console.log(name2.substr(2,6)) //love j

//day16

//search
//includes
console.log(name2.includes('o')) //true
console.log(name2.includes('z')) //false
console.log(name2.indexOf('z',3)) //-1
console.log(name2.lastIndexOf('r',8)) //-1

console.log(name2.startsWith('i')) //true
console.log(name2.startsWith('r')) //false
console.log(name2.startsWith('l',2)) //true
console.log(name2.startsWith('love',2)) //true

console.log(name2.endsWith('t')) //true
console.log(name2.endsWith('e',6)) //true
console.log(name2.endsWith('o',6)) //false