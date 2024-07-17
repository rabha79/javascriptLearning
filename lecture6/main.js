// day25

// if

let num1 = 10;
let num2 = 6;

if(num1 > num2)
{
   console.log('it is true');
}

 let role = prompt('what is your role');

if(role == 'admin')
{
    document.write('hello admin');
}
else if(role == 'moderator')
{
    document.write('hello moderator');
}
else
{
    document.write('hello user');
}

// day26

let result = prompt('your result ?')

if(result >= 85)
{
    document.write('excellent')
}
else if(result >= 75)
{
    document.write('very good')
}
else if(result >= 65)
{
    document.write('good')
}
else if(result >= 65)
{
    document.write('accepted')
}
else
{
    document.write('fail')  
}

// day27
// else --> :

let age = prompt('enter your age')
age >= 18?
       document.write('hello user')
       :document.write('no you are so young')


// another way
let age1 = prompt('enter age')
age1>18?
   document.write('you above 18')
   :age1==18?
       document.write('you 18')
   :document.write('you under 18')

//in one line
let age2 = prompt('enter any age')
let result1 = age2>18?'hello user':age2 == 18?'you can enter':'no you cant';
 console.log(result1)



// switch
let role1 = prompt('enter role')
switch(role1)
{
    case'admin':
        document.write('hello admin');
        break;
    case'moderator':
        document.write('hello moderator');
        break;
    case'editor':
        document.write('hello editor');
        break;
    default:
        document.write('hello user') ;
}

