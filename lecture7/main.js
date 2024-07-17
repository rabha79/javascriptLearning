//day29
//Loop

for(let i =0 ; i<3 ; i+=1 )
{
    console.log('hello world')
    console.log('hello rabha')
}

// for(i = 10; i>=0 ; i--)
// {
//     console.log(i)
// }

// for(i =0 ;i<=3;i++)
// {
//     console.log('rabha '+ i)
// }

//day30

let names = ['rabha','aya','dina','shorouk']
for(i=0;i<names.length;i++)
{
    console.log(names[i])
}

for(i=names.length;i>=0;i--)
{
    console.log(names[i])
}

//day31
//nested Loop

let cars = ['BMW','Kia','honda']
let models = [2021,2022,2023]

for(i=0;i<cars.length;i++)
{
    console.log(`cars:${cars[i]}`)
    for(j=0;j<models.length;j++)
    {
        console.log(`models:${models[j]}`)
    }
    console.log('___________________')
}

//day32
//break - continue

//continue

let users = ['rabha','rabha1','rabha2',1,2,3,'rabha3','rabha4']

for(i=0;i<users.length;i++)
{
    if(typeof users[i] =='number')
    {
        continue;
    }
    console.log(users[i])
}
//break
for(i=0;i<users.length;i++)
{
    if( users[i] == 1)
    {
        break;
    }
    console.log(users[i])
}


//day33
//while loop - do while loop

//while loop
let r =0;
while( r<4 )
{
    document.write('<h1>hello world</h1>')
    r++;
}

// do while loop
let a=0
do{
    document.write('<h1>hello</h1>')
a++;
}while(a<4)