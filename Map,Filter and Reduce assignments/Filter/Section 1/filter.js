let input = [
{ name: "Laptop", inStock: true },
{ name: "Mouse", inStock: false }
]

let stock = input.filter((value)=> {
    if(value.inStock===true){
        return value;
    }
});
// console.log(stock);

let user = [
{ name: "Rahul", role: "developer" },
{ name: "Priya", role: "student" }
];

// console.log(user.filter((value)=>{
//     if(value.role==="developer"){
//         return value;
//     }
// }));

let arr = [
{ name: "Mouse", price: 500 },
{ name: "Keyboard", price: 1500 }
]

// console.log(arr.filter((value)=> value.price>1000));

let active = 
[
{ name: "Rahul", isActive: true },
{ name: "Priya", isActive: false }
];
// console.log(active.filter((value)=> value.isActive===true));

let inc = ["rahul@gmail.com", "priya@yahoo.com", "aman@gmail.com"];
// console.log(inc.filter((value)=> value.includes("@gmail.com")));

