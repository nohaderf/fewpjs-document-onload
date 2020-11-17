// Your code goes here

function updateDOM(){
    const text = document.querySelector("#text")
    text.textContent = "This is really cool!"
}


document.addEventListener("DOMContentLoaded", function(){
    updateDOM()
    console.log("DOM LOADED")
})

