const user = {
name: "Rahul",
email: "rahul@example.com",
role: "developer"
};

let {name , email} = user;
// console.log(name);
// console.log(email);

const product = {
name: "Laptop",
price: 50000
};
let {name : productName} = product
// console.log(` productName = ${productName}`);


let displayUser = function( {name,email} = obj){
    console.log(name);
    console.log(email);
}

let user1 = {
    name : "anshu",
    email : "anshu@gmail.com"
}

displayUser(user1);