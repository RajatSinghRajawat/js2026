// const data = [
//   {
//     user:"abhi",
//     age:25,
//     me:{
//       user:"rajat",
//       age:[1,2,3]
//     }
//   }
// ]

// console.log(data[0].me.age[2]);



const array = [1, 2, 3, 4, 5];

let element = [];

let j = 0;

for (let i = array.length - 1; i >= 0; i--) {
  element[j] = array[i];
  j++;
}

console.log(element);

