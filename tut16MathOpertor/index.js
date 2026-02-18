// // Different numbers
// let a = 4.7;
// let b = -9;

// // Math.round()
// let roundVal = Math.round(a);
// console.log("Round:", roundVal);

// // Math.floor()
// let floorVal = Math.floor(a);
// console.log("Floor:", floorVal);

// // Math.ceil()
// let ceilVal = Math.ceil(a);
// console.log("Ceil:", ceilVal);

// // Math.trunc()
// let truncVal = Math.trunc(a);
// console.log("Trunc:", truncVal);

// // Math.abs()
// let absVal = Math.abs(b);
// console.log("Absolute:", absVal);

// // Math.pow()
// let powVal = Math.pow(2, 3);
// console.log("Power:", powVal);

// // Math.sqrt()
// let sqrtVal = Math.sqrt(25);
// console.log("Square Root:", sqrtVal);

// // Math.max()
// let maxVal = Math.max(5, 12, 8, 21);
// console.log("Max:", maxVal);

// // Math.min()
// let minVal = Math.min(5, 12, 8, 21);
// console.log("Min:", minVal);

// // Math.random()
// let randomVal = Math.random();
// console.log("Random:", randomVal);



let num = 12345;
let count = 0;

for (; num > 0; num = Math.floor(num / 10)) {
  count++;
}

console.log(count);