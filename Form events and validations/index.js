let username = document.querySelector("#username");
let password = document.querySelector("#password");
let email = document.querySelector("#email");
let btn = document.querySelector("#btn");
let show1 = document.querySelector(".show1");
let show2 = document.querySelector(".show2");
let show3 = document.querySelector(".show3");
let form = document.querySelector("#form");
let create = document.querySelector("#create");
let input = document.querySelector("#dek");
let para = document.querySelector(".para")


function showError(show1,message){
    show1.textContent = message
}
function clrError(show1){
    show1.textContent = "";
}
function validname(username){
    if(username.value.trim().length===0){
        showError(show1,"username is required");
        return false;
    }
    if(username.value.trim().length<3){
        showError(show1,"username should be of at least 3 characters")
        return false;
    }
    else{
        clrError(show1)
        return true;
    }
}
function validemail(email){
    if(email.value.trim().length===0){
        showError(show2,"email is required");
        return false;
    }
    if(email.value.trim().length<3){
        showError(show2,"email should be of at least 8 characters")
        return false;
    }
    else{
        clrError(show2)
        return true;
    }
}
function showError(show2,message){
    show2.textContent = message
}
function clrError(show2){
    show2.textContent = "";
}

function validPassword(password){
    if(password.value.trim().length===0){
        showError(show3,"password is required");
        return false;
    }
    if(password.value.trim().length<8){
        showError(show3,"password should be of at least 8 characters")
        return false;
    }
    else{
        clrError(show3);
        return true;
    }
}
function showError(show3,message){
    show3.textContent = message
}
function clrError(show3){
    show3.textContent = "";
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let isValidusername = validname(username);
    let isValidEMail = validemail(email);
    let isValidPassword = validPassword(password);
    if(isValidusername && isValidEMail && isValidPassword){
       create.classList.remove("last")
    }
})

create.classList.add("last");

form.addEventListener("click",(e)=>{
    create.classList.add("last");
})

input.addEventListener("focus",(e)=>{
    input.classList.add("ruk");
    para.textContent = "";
})
input.addEventListener("blur",(e)=>{
    input.classList.remove("ruk");
    para.textContent = "you left the input field"
})
input.classList.remove("ruk");
// input.addEventListener("input",(e)=>{
//     console.log(input.value);
// })

input.addEventListener("change",(e)=>{
    console.log(input.value);
})
