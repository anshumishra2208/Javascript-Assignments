let form = document.querySelector("#form");
let input = document.querySelector("#input");
let list = document.querySelector("#list")

async function getUser(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    return data;
}

form.addEventListener("submit", async (e)=>{
    e.preventDefault()
    try {
            const userData = await getUser(input.value)
    list.innerHTML = `
    <div>
        <img src=${userData.avatar_url} alt="">
        <p>username : ${userData.name}</p>
        <p>bio : ${userData.bio}</p>
        <p>repos : ${userData.public_repos}</p>
        <p>followers : ${userData.followers}</p>
    </div>`
    } catch (error) {
        
    }
    
})

input.addEventListener("click",(e)=>{
    list.innerHTML = ""
})