// let i = 0;
// let arr = [1,2,3]

// while (i < arr.length) {
//    console.log(arr[i]);
   
//     i++;
// }

// let i = 0

// do {
//     console.log(i);
//     i++
    
// } while (i<10);



let arr = [1, 2, 2, 3, 4, 4, 5];
let result = [];

for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;

    for (let j = 0; j < result.length; j++) {
        if (arr[i] === result[j]) {
            isDuplicate = true;
        }
    }

    if (!isDuplicate) {
        result.push(arr[i]);
    }
}

console.log(result);