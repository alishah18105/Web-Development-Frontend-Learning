/*Create an array of marks of students. Filter out marks of students that scored 90 */

let marks = [85,75, 91, 62, 98, 42, 71, 83, 95];

let filtered_arr = marks.filter((val)=>{
    return val >= 90;
})

console.log(`Orginal Array: ${marks}`);
console.log(`Filtered Array: ${filtered_arr}`);

/*Take a number n as input from user. Create an array of numbers from 1 to n. Use the reduce method to calculate
sum of all numbers in the array. Use the reduce method tp calculate product of all numbers in an array*/

let input = prompt("Enter a number");
let arr = [];

for(let i=1; i<=input; i++){
    arr.push(i);
}

let sum = arr.reduce((prev, current)=>{
    return prev + current;
});

let product = arr.reduce((prev, current)=>{
    return prev * current;
});

console.log(`Original Array: ${arr}`);
console.log(`Sum of array: ${sum}`);
console.log(`Product of array: ${product}`);