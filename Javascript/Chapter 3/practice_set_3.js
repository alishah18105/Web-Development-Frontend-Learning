/*Print even numbers from 0 to 100 */

// for(let i = 0; i<=100; i++){
//     if(i % 2 == 0){
//         console.log(i);
//     }
// }

/* Create a number gessing game: */

let number = 55;
let guess;

do{
    guess = prompt("Enter your guess");
    if(guess == number){
        alert("Congratulation, you got it");
        break;
    }
    else if(guess > number){
        alert("Enter a lower number")
    }
    else{
        alert("Enter a higher number")
    }
}

while(guess !=number){
   
}

/*Prompt the user to enter their full name. Generate a username for them based on the input. Start username with @, followed by their full name and ending with the full name length */

let name = prompt("Enter your full name");
let userName = "@"+name.replaceAll(" ","") +name.length;
console.log(userName);