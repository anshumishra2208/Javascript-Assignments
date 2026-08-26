const user = {
name: "Rahul",
role: "developer"
};

const copy = {...user}
// console.log(copy);

const frontend = ["HTML", "CSS", "JavaScript"];
const backend = ["Node.js", "Express"];
// console.log([...frontend,...backend]);

let showSkills = function(name,...skills){
    console.log(` Name : ${name}`);
    console.log(` Skills : ${skills}`);
}
// showSkills("anshu","html","css","tailwind css","javascript")

const user2 = {
    name : "aman",
    role : "student"
}
let upd = {...user2}
upd.role = "developer";
console.log(upd);

