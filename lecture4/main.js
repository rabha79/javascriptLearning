// day17
// DataType : [array]

let names = ['rabha','aya' ,'shorouk','dina','fatma']
console.log(names) // ['rabha', 'aya', 'shorouk', 'dina', 'fatma']
console.log(names[0]) //rabha
console.log(names.length) //5
// to change something in the array
names[0]='antesar'
console.log(names) //['antesar', 'aya', 'shorouk', 'dina', 'fatma']

//nested array

let objects = [1,2,3,'rabha',true,undefined,null,[7,8,9]]
console.log(objects) //[1, 2, 3, 'rabha', true, undefined, null, Array(3)]
console.log(objects[7]) //[1, 2, 3]
// i want to print the number 9 of the second array
console.log(objects[7][2]) //9

let object = [1,2,3,[4,5,6,[7,8,9]]]
// to print number 8
console.log(object[3][3][1]) //8

//day18
//add and remove elements from array
// add elements in the end of the array
names.push('rabha')
console.log(names) //['antesar', 'aya', 'shorouk', 'dina', 'fatma', 'rabha']
// add elements in the front of the array
names.unshift('rawda')
console.log(names) //['rawda', 'antesar', 'aya', 'shorouk', 'dina', 'fatma', 'rabha']

//delete the first index
names.shift()
console.log(names) //['antesar', 'aya', 'shorouk', 'dina', 'fatma', 'rabha']

//delete the last index
names.pop()
console.log(names) //['antesar', 'aya', 'shorouk', 'dina', 'fatma']

//day19
//splice and slice array

//splice --> it take two parameter the start element to delete from and how many elements do you want to delete
names.splice(0,2)
console.log(names) //['shorouk', 'dina', 'fatma']
// delete element and but instead of it another elements
names.splice(0,1,'rabha','antesar') //['rabha', 'antesar', 'dina', 'fatma']
console.log(names)

// slice does not affect of the array
console.log(names.slice(0,2)) //['rabha', 'antesar']
console.log(names) //['rabha', 'antesar', 'dina', 'fatma']
console.log(names.slice(-2)) //['dina', 'fatma']

//day20
//search in array
// indexOf --> to know if string is in the array or not and return the index of it
// from left to right
console.log(names.indexOf('rabha')) //0
// if i want to search from index 2
console.log(names.indexOf('rabha',2)) //-1

//lastIndexOf
// from right to left
console.log(names.lastIndexOf('rabha'))//0
console.log(names.lastIndexOf('rabha',-1)) //0

//includes
console.log(names.includes('rabha')) //true
console.log(names.includes('rabha',2)) //false

//day21
//sort and reverce array

//reverse
console.log(names.reverse()) //['fatma', 'dina', 'antesar', 'rabha']

//sort -->arrange elements alphabetically
console.log(names.sort()) //['antesar', 'dina', 'fatma', 'rabha']

//day22
//concat and join array

let arr1 = ['antesar','rabha','dina']
let arr2 = ['aya','shorouk','rawda']

//concat --> arr1 = arr1 + arr2
console.log(arr1.concat(arr2)) //['antesar', 'rabha', 'dina', 'aya', 'shorouk', 'rawda']
console.log(arr1.concat(arr2 ,'fatma')) //['antesar', 'rabha', 'dina', 'aya', 'shorouk', 'rawda', 'fatma']

// join ---> turn any array to string
console.log(names.join()) //antesar,dina,fatma,rabha
console.log(names.join('_')) //antesar_dina_fatma_rabha

