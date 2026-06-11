/*For a given array with marks of student [85, 97, 44, 37, 76, 60]. Find the average marks of the entire class. */

let student_marks = [85, 97, 44, 37, 76, 60];
let sum = 0;
let total_students = student_marks.length;

for(let mark of student_marks){
    sum+= mark
}

let avg = sum/total_students;
console.log(`The average marks of the class is: ${avg}` );

/*For a given array with prices of 5 items -> [250, 645, 300, 900, 50]. All items have an offer of 
10% off on them. Change the array to store final price after applying offer.*/

let prices = [250, 645, 300, 900, 50];

for(let i = 0; i<prices.length; i++){
 let new_price = prices[i] - (prices[i]*0.1);
 prices[i] = new_price;
}

console.log(prices);

//Create an array:
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

//Remove the first company from the array:
// console.log(companies.shift());
// console.log(companies);

//Remove Uber and add Ola in its place:
console.log(companies.splice(2,2,"Ola"));
console.log(companies);

//Add Amazon at the end:
console.log(companies.push("Amazon"));
console.log(companies);
