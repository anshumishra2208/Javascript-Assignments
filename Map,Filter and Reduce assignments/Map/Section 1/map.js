let input = ["laptop", "mobile", "headphones"];
let res = input.map((value)=>{
    return value.toUpperCase()
})
// console.log(res);

let pri = [100, 250, 500];
// console.log(pri.map((value)=> "₹" + value));

let user = [
    {
        name : "rahul",
        email : "rahul@email.com"
    } ,
    {
        name : "anshu",
        email : "anshu@email.com"
    }
]
let col = user.map((value)=> value.name)
// console.log(col);

let arr = [100, 200, 300];
// console.log(arr.map((value)=> value + (10/100)*value));

let dub = [
{ name: "Laptop", price: 50000 },
{ name: "Mouse", price: 500 }
];
let updated = dub.map(function(value){
   return {
        ...value,
        inIstock : true
    }
})
// console.log(updated);

let ant = [
{ name: "Rahul", role: "student" },
{ name: "Priya", role: "student" }
];

let its = ant.map((value)=>{
    return {
        ...value,
        role : "developer"
    }
})
// console.log(its);