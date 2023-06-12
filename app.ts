// const anchor = document.querySelector('a')!;

// if(anchor) {
//     console.log(anchor.href)
// }

// const form = document.querySelector('form')!;



// import {Invoice} from './classes/Invoice.js';
// import {Payment} from './classes/payment.js';
// import {HasFormatter} from './interfaces/HasFormatter.js'

//interfaces
// export interface IsPerson{
//     name: string;
//     age: number;
//     speak(a: string): void;
//     spend(b: number): number;

// }
// const me: IsPerson ={
//     name: "shaun",
//     age: 30,
//     speak(text: string): void{
//         console.log(text)
//     },
//     spend(amount: number): number{
//         console.log("i spent", amount);
//         return amount;
//     }
// }
// console.log(me)
// me.speak('hello world!')

// const greetPerson = (person: IsPerson): void=>{
//     console.log('hello', person.name);
// }

// greetPerson(me);

// const invOne =new Invoice('mario','work on the mario website', 250);
// const invTwo =new Invoice('luigi','work on the luigi website', 300);


// let invoices:Invoice[]=[];
// invoices.push(invOne);
// invoices.push(invTwo);

// console.log(invoices)

// invoices.forEach(inv=>{
//     console.log(inv.client, /*inv.details,*/ inv.amount, inv.format())
// })

//invoices.push({name: 'shaun'})




// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice('Elon', "spacex", 250)
// docTwo = new Invoice('', "spacex", 250)


// let doc: HasFormatter[] = [];
// doc.push(docOne);
// doc.push(docTwo);

// console.log(doc);


// const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children)


// const type = document.querySelector('#type') as HTMLInputElement;
// const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
// const details = document.querySelector('#details') as HTMLInputElement;
// const amount = document.querySelector('#amount') as HTMLInputElement;


// form.addEventListener('submit', (e:Event)=>{
//     e.preventDefault();

// let docs: HasFormatter;

// if(type.value === "invoice"){
//    docs = new Invoice(tofrom.value, details.value, amount.valueAsNumber )
// }
// else{
//     docs = new Payment(tofrom.value, details.value, amount.valueAsNumber)
// }
//     console.log(docs);
// });