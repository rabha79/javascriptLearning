//day34
//function

function hello()
{
    console.log('hello world')
}

hello()

//function(parameter)
function hello1(name)
{
    console.log('hello world ' + name)
}

hello1('rabha')

// age with days
function calcAge(age)
{
    let result = age * 365;
    console.log(result)
}

calcAge(22)

function pro(price,taxes,ads)
{
    let product = price+taxes;
    let result = product+ads;
    console.log(result);
}
pro(2000,40,20)


// function return

function pro1(price,taxes,ads)
{
    let product = price+taxes;
    let result = product+ads;
    return result;
}
let x = pro1(2000,40,20)
console.log(x)


function rabha()
{
    console.log('rabha')
    return 100;
    console.log('rabha')// anything after return as it does not  exist
}

let r = rabha()
console.log(r)

function days(age)
{
    let result = age*365;
    return result;
}
let day = days(22);

function hoursAge(age)
{
    let result = age*24;
    return result;
}

let hour = hoursAge(day)
console.log(hour + ' hours')




