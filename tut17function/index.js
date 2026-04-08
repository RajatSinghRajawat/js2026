
// //declaration fnc function
// const a = function () {
//     console.log("hello");

// }

// a()


// //expression fnc function
// function b() {
//     console.log("hello");
// }


// b()



// addition 

// const add = function (a, b) {
//     return a + b
// }


// console.log(add(2, 3));





// const add = (a, b) => {
//     return a + b
// }

// let a  = add(2, 3)

// console.log(a);




// questionns 

function isPalindrome(str) {
    let rev = str.split('').reverse().join('');
    return str === rev;
} 

console.log(isPalindrome("madam"));


function checkEvenOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(checkEvenOdd(4));