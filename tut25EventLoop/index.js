/* ************************************ synchronous code ****************************
synchronous code : jo code line by line run hota h matlb ek sync me run hota h 

 


*/






// console.log("start");

// for(let i=0; i<10; i++){
//     console.log("middel");
// }

// console.log("end");








/* ************************************ asynchronous code ****************************
asynchronous code : asynchronnous code vo code hota h jo dusre code ko apne khud ke code ke pure hone ke wait keye bina code run krta h agr khud ke code ko complete krne me kitna hi time lage 

*/



console.log("start");

setTimeout(() => {
    console.log("middel");
}, 2000);
console.log("end");
