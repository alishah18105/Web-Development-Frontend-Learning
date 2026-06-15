// Create a new button element. Give it a text "click me", background color of red & text color of white.
// Insert button as the first element inside the body tag.

newBtn = document.createElement("button");
newBtn.innerText = "click me"
newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";


document.querySelector("body").prepend(newBtn);

//Create a <p> tag in html , give it a class & some styling
// Now create a new class in CSS and try to append this to the p element

let para = document.querySelector("p");
para.classList.add("newClass");
console.log(para);