// // duplicate values in array
// let arr = [1, 2, 2, 3, 4, 4, 5];
// let result = [];

// for (let i = 0; i < arr.length; i++) {
//     let isDuplicate = false;

//     for (let j = 0; j < result.length; j++) {
//         if (arr[i] === result[j]) {
//             isDuplicate = true;
//         }
//     }

//     if (!isDuplicate) {
//         result.push(arr[i]);
//     }
// }

// console.log(result);


// let arr1 = [1, 2, 3];
// let arr2 = [3, 4, 5];

// let merged = [];
// let result = [];

// // merge
// for (let i = 0; i < arr1.length; i++) {
//     merged.push(arr1[i]);
// }

// for (let i = 0; i < arr2.length; i++) {
//     merged.push(arr2[i]);
// }

// // remove duplicates
// for (let i = 0; i < merged.length; i++) {
//     let found = false;

//     for (let j = 0; j < result.length; j++) {
//         if (merged[i] === result[j]) {
//             found = true;
//         }
//     }

//     if (!found) {
//         result.push(merged[i]);
//     }
// }

// console.log(result);














let a = "pw w kew"
let b = []
for (let i = 0; i < a.length; i++) {
    let dup = false
    for (let j = 0; j < b.length; j++) {
        if (a[i] = a[j]) {
            dup = true
        }
    }


    if (!dup) {
        b.push(a[i])
    }

}