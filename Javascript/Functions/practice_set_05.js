/*Create a function that takes a string as an argument & returns the number of vowels in that string.*/

function countVowels(str){
let count = 0;
let vowels = ["a", "e", "i", "o", "u"];
let newList = str.split("");
for(let i of newList){
    if(vowels.includes(i.toLowerCase())){
        count+=1
    }
}
return count;
};

let str = "Neha Rehan"
console.log(`Number of vowels in ${str} = ${countVowels(str)}`);

/*Create an arrow function for the same task */

let result = (str) => {
    let count = 0;
let vowels = ["a", "e", "i", "o", "u"];
let newList = str.split("");
for(let i of newList){
    if(vowels.includes(i.toLowerCase())){
        count+=1
    }
}
return count;
};
console.log(`Number of vowels in Ali = ${countVowels("Ali")}`);

/*For a given array of numbers print square of each number using forEach. */

// let arr = [2,3,4,5,6,7,8,9];
// arr.forEach((val) => {
//     console.log(`Square of ${val} is: ${val*val}`)
// });

let arr = [2,3,4,5,6,7,8,9];
let calSqr = (val) => {
   console.log(`Square of ${val} is: ${val*val}`)
};
arr.forEach(calSqr);

