const prompt = require("prompt-sync")();

// const numbers = [1, 2, 3, 4];

// const result = numbers.map((num) => {
//   return num * 2;
// });

// console.log(result); 



// const result = numbers.map(num => num * 2);










// const users = [
//   {name:"Rajat", age:21},
//   {name:"Aman", age:22}
// ];

// const res = users.map(user => user.name);
// console.log(res); // ["Rajat","Aman"]








// filter = filter out the elements from an array based on a condition and return a new array with the filtered elements


// const numbers = [1, 2, 3, 4, 5, 6];
// const a = numbers.filter(num => num % 2 === 0);
// console.log(a);

// const str = ["Rajat", "Aman", "Rahul", "Rohit"];
// const b = str.filter((name) => {
//     return name.length > 4;
// })
// console.log(b);





// // for each() = for each element in the array, do something with it. It does not return anything, it just executes a function for each element in the array.


const arr = [1, 2, 3, 4, 5];
const c = arr.forEach((index, value, arr1) => {
    console.log(index, value , arr1);

})

console.log(c);

// const arr = [1, 2, 3, 4, 5];

// const d  = arr.filter((val)=>{
//     return val > 3;
// })

// console.log(d);