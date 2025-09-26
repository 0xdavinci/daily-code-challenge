/*
A JavaScript Set is a collect of uniuqe values
*/

const letters = new Set(["b", "a", "c"]);
console.log(letters);

letters.add("a");

console.log(letters);

letters.add("d");

console.log(letters);


const distinct = [...new Set([1,1,1,2,3,3,5])];

console.log(distinct);