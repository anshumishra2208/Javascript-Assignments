arr = ["html", "css", "javasccript","react"];
// arr.splice(1,1);   // removing an element
// console.log(arr);

arr.splice(2,0,"nodejs");
// console.log(arr);

arr.splice(2,2,"hello","dosto");
// console.log(arr);

let trimmedArrray = arr.slice(1,4);
// console.log(trimmedArrray);

let arr1 = ["fruits", "vegies" ,"cokes", "chocolates"];
let copy = arr1.slice(0,4);
console.log(copy);
