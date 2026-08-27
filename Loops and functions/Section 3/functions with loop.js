function print(n){
    for(let i=1;i<=n;i++){
        console.log(i);
    }
}
// print(10);

function table(m){
    for(let i=1;i<=10;i++){
        console.log(m*i);
    }
}
// table(5)

let total = 0;
function sum(n){
    for(let i=1;i<=n;i++){
        total+=i;
    }
    console.log(total);
}
sum(5);
