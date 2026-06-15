//Create a h2 heading element with text - "Hello Javascript". Append "from Apna College students" 
// to this text.

let heading = document.querySelector("h2");
heading.innerText = heading.innerText.concat(" from Apna College Students");
console.dir(heading.innerText);

let divs = document.querySelectorAll(".box");
let idx = 0;
for(div of divs){
    div.innerText = `New value of div: ${idx}`;
    idx++;
}
