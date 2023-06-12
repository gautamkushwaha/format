import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplates.js';
import { Payment } from './classes/payment.js';
const form = document.querySelector('.new-item-form');
console.log(form.children);
//inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//list template instances
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let docs;
    if (type.value === "invoice") {
        docs = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        docs = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(docs, type.value, 'start');
});
