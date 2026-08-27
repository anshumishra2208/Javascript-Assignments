let prices = [500, 1200, 300];
let totalPrice = prices.reduce((accumulator,currentValue)=>{
   return accumulator+=currentValue
},0)
// console.log(totalPrice);

let cart = [
{ name: "Laptop", quantity: 1 },
{ name: "Mouse", quantity: 2 }
]

let totalItems = cart.reduce((accumulator,currentValue)=>{
    accumulator = accumulator + currentValue.quantity
    return accumulator;
},0)
// console.log(totalItems);

let dam = [
{ amount: 500 },
{ amount: 1000 },
{ amount: 750 }
]

let totalDaam = dam.reduce((accumulator,currentValue)=>{
   return accumulator+=currentValue.amount;
    
},0)
// console.log(totalDaam);

let item = [
{ name: "Mouse", price: 500, quantity: 2 },
{ name: "Keyboard", price: 1000, quantity: 1 }
];

let final = item.reduce((accumulator,currentValue)=>{
    accumulator = accumulator + currentValue.price*currentValue.quantity;
    return accumulator;
},0)
// console.log(final);

let sal = [
{ name: "Laptop", quantity: 1 },
{ name: "Mouse", quantity: 2 }
];

let totalMaal = sal.reduce((accumulator,currentValue)=>{
    accumulator = accumulator + currentValue.quantity;
    return accumulator;
},0)
console.log(totalMaal);