// let correctUsername = "admin";
// let correctPassword = "1234";

// let attempts = 3;

// while (attempts > 0) {
//   let username = prompt("Enter username:");
//   let password = prompt("Enter password:");

//   if (username === correctUsername && password === correctPassword) {
//     console.log("Login Successful ✅");
//     break;
//   } else {
//     attempts--;
//     console.log(`Wrong credentials ❌ Attempts left: ${attempts}`);
//   }
// }

// if (attempts === 0) {
//   console.log("Account Locked 🔒");
// }


// // let a = 5;
// // let b = 5;
// // let c = 5;

// // if (a + b > c && a + c > b && b + c > a) {

// //   if (a === b && b === c) {
// //     console.log("Equilateral Triangle");
// //   } 
// //   else if (a === b || b === c || a === c) {
// //     console.log("Isosceles Triangle");
// //   } 
// //   else {
// //     console.log("Scalene Triangle");
// //   }

// // } else {
// //   console.log("Not a valid Triangle ❌");
// // }





// // let generatedOTP = Math.floor(1000 + Math.random() * 9000);
// // console.log("OTP sent:", generatedOTP);

// // let attempts = 3;
// // let isVerified = false;

// // while (attempts > 0) {
// //   let userOTP = Number(prompt("Enter OTP:"));

// //   if (userOTP === generatedOTP) {
// //     console.log("OTP Verified ✅");
// //     isVerified = true;
// //     break;
// //   } else {
// //     attempts--;
// //     console.log(`Wrong OTP ❌ Attempts left: ${attempts}`);
// //   }
// // }

// // if (!isVerified) {
// //   console.log("OTP Expired / Blocked 🔒");
// // }



// // let balance = 1000;
// // const withdrowAmount = Number(prompt("Enter amount to withdraw:"));

// // if (withdrowAmount <= 0) {
// //     console.log("Invalid amount ❌");
// // }


// // if (withdrowAmount > balance) {
// //     console.log("Insufficient balance ❌");
// // }
// // else if (withdrowAmount <= balance) {
// //     balance -= withdrowAmount;
// //     console.log(`Withdrawal successful ✅. Remaining balance: ${balance}`);
// // }




// // for (let i = 1; i <= 10; i += 2) {
// //   console.log(i);
// // }

// // let num = 25;
// // let min = 10;
// // let max = 50;

// // if (num >= min && num <= max) {
// //   console.log("Number is within range");
// // } else {
// //   console.log("Number is outside range");
// // } 







// // let a = 10;
// // let b = 25;
// // let c = 15;

// // let largest = (a > b)
// //   ? (a > c ? a : c)
// //   : (b > c ? b : c);

// // console.log("Largest number is:", largest);


















let otp = Math.floor(1000 + Math.random() * 9000)
console.log(otp);

let attempts = 3;


while (attempts > 0) {
  let userInput = Number(prompt("Enter OTP:"));

  if (userInput === otp) {

    console.log("user verfied");
    break;

  } else {
    attempts-- 
    console.log("wrong otp");
  }

}






