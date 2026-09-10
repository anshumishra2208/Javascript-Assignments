let btn = document.querySelector("#btn");
let para = document.querySelector("#para");
let body = document.querySelector("body");
let show = document.querySelector("#sec");
let btn1 = document.querySelector("#btn1");
let parent = document.querySelector(".parent");
let parent1 = document.querySelector("#parent1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let btn4 = document.querySelector("#btn4");
let btn5 = document.querySelector("#btn5");
let para1 = document.querySelector("#para1");
let para2 = document.querySelector("#para2");
let para3 = document.querySelector("#para3");
let para4 = document.querySelector("#para4");


// btn.addEventListener("click",(e)=>{
//     para.classList.remove("next");
//     show.textContent = "thanks for visiting";
// })

// btn1.addEventListener("click",(e)=>{
//     let res = document.createElement("p");
//     res.textContent = e.target;
//     parent.append(res);
// })

parent.addEventListener("click",(e)=>{
    if(e.target===btn1){
        para1.textContent = "btn1 clicked"
    }
    if(e.target===btn2){
        para2.textContent = "btn2 clicked"
    }
    if(e.target===btn3){
        para3.textContent = "btn3 clicked"
    }
    if(e.target===btn4){
        para4.textContent = "btn4 clicked"
    }
})

parent1.addEventListener("click",(e)=>{
    parent1.textContent = "parent clicked"
})
btn5.addEventListener("click",(e)=>{
    btn5.textContent = "button clicked"
    e.stopPropagation();
})