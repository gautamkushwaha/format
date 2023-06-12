// const character = 'Gautama'

// console.log(character);

// const inputs =  document.querySelectorAll('input');
// console.log(inputs);

// inputs.forEach(input=>{
//     console.log(input);
// })

// let character = 'Gautam';
// let age = 30;
// let isBlackBelt = false;

// // character = 20;
// character= 'Kumar'

// // age = 'warren';
// age = 20
 
// // isBlackBelt = 'yes';
// isBlackBelt = true;


// const circ = (diameter: number)=>{
//     return diameter * Math.PI;

// }
// console.log(circ(6.5));




//arrays

// let names = ['luigi', 'mario', 'yoshi'];

// names.push('toad');

// // names.push(3);
// // names[0] = 3;

// let numbers = [10, 20, 30, 40];
// numbers.push(25);
// // numbers.push('gautam')
// // numbers[1]= 'ram'

// let mixed = ['ken', 4 , 'chun-lli', 8, 9];

// mixed.push('ryu');
// mixed.push(10);
// mixed[0] = 3;




// //objects

// let ninja = {
//     name : 'mario',
//     belt: 'black',
//     age: 30
// };

// ninja.age = 40;
// ninja.name = 'ryu';
// // ninja.age = '45'

// // ninja.skills = ['fighting', ' sneaking']

// ninja={
//     name: 'Gautam',
//     belt: 'white',
//     age : 20,
//     // skills: ['programming']
// }



//explicit types

// let character : string;
//  let age: number;
//  let isLoggedIn: boolean;

// //  age = "luigi"
 
// age= 30

// // isloggedIn = 25;

// isLoggedIn = true;

// //arrays


// let ninjas: string[]= [];

// ninjas.push('shaun')



// //union types
// let mixed: (string|number|boolean)[]= [];
// mixed.push('hello');
// mixed.push(20)
// mixed.push(false);
// console.log(mixed);

// let uid: string|Number;
// uid = '123'
// uid = 123;

// //objects

// let ninjaOne: object;
// ninjaOne = {name: 'Utam', age: 45};

// let ninjaTwo:{
//    name: string,
//    age: number, 
//    beltColor: string 
// }

// ninjaTwo = {name: 'mario', age: 20, beltColor: "black"}


// let age: any = 25;

// age = true;
// console.log(age);
// age = 'hello';
// console.log(age);
// age = { name: 'luigi'};
// console.log(age);


// let mixed: any[]=[];

// mixed.push(5);
// mixed.push('mario');
// mixed.push(false);
// console.log(mixed);

// let ninja: {name: any, age: any}

// ninja= { name:'yoshi', age: 25 };

// console.log(ninja)

// ninja= { name: 25, age: "yoshi"}

// console.log(ninja)

// console.log('test')





//fuction type

// let greet: Function;

//  greet = ()=>{
  
//     console.log('hello world')
// }

// const add = (a: number, b: number, c: number |  string = 10)=>{
//     console.log(a+b)
//     console.log(c)
// }

// add(5, 10, '20');

// const minus = (a: number, b: number): number=>{
//     return a+b;
// }

// let result = minus(10,7)
//console.log(result)



//type specification funtion

// const logDetails = (uid: string| number, item: string) =>{
//     console.log(`${item} has a uid of ${uid}`);
// }
// const greet= (user:{name: string, uid: string|number})=>{
//     console.log(`${user.name}says hello`);
// }

// const greetAgain= (user:{name: string, uid: string|number})=>{
//     console.log(`${user.name}says hello`);
// }




//videos 9 and  type specifications

// type stringOrNum = string|number
// type objWithName = {name: string, uid:stringOrNum}

// const logDetails = (uid: stringOrNum , item: string)=>{
//     console.log(`${item} has  a uid of ${uid}`);
// }

// const greet = (user:objWithName)=>{
// console.log(`${user.name} says hello`);
// }

// const greetAgain = (user:objWithName)=>{
//     console.log(`${user.name} says hello`);
//     }



//video 10 and greeting and use of type 


// //example 1
// let greet: (a: string, b: string)=> void;

// greet = (name: string, greeting: string)=>{
//     console.log(`${name} says ${greeting}`);
// }


// //example 2

// let calc:(a: number, b: number, c: string)=>number;


//  calc = (numOne: number, numTwo: number, action: string)=>{
//    if(action ==="add"){
//     return numOne + numTwo
//    }
//    else{
//     return numOne - numTwo
//    }
//  }


//  //example 3

//  let logDetails:(obj: {name:string, age:number})=> void;

//  logDetails =( ninja:{name:string, age:number})=>{
//     console.log(`${ninja.name} is ${ninja.age} is years old`)
//  }