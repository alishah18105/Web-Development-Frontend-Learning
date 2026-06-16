let mode = document.querySelector("#mode");
let body = document.querySelector("body");

let curMode = "light";
mode.addEventListener("click", ()=>{
    if(curMode == "light"){
        curMode = "dark"
        mode.innerText ="🌙 Dark Mode";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        curMode = "light";
        mode.innerText = "☀️ Light Mode";
         body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(curMode);
})