let arr = ["html", "css", "javascript","react"];
// console.log(arr.indexOf("javascript"));

let position = arr.indexOf("react");
// console.log(position);

let find = arr.find((value)=>{
    if(value==="javascript")
        return "javascript"
})
// console.log(find);

arr1 = [
    {
        name : "anshu",
        age : 19
    } ,
    {
        name : "rahul",
        age : 20
    }
]
let res = arr1.find((value)=>{
    if(value.name==="rahul")
        return value.name;
})
console.log(res);