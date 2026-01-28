// let daynumber = parseInt(prompt("daynumbeer"))


// switch (daynumber) {
//     case 1:
//         console.log("sunday")
//         break;
//     case 2:
//         console.log("sunday2")
//         break;

//     case 3:
//         console.log("sunday3")
//         break;

//     case 4:
//         console.log("sunday4")
//         break;

//     case 5:
//         console.log("sunday5")
//         break;

//     case 6:
//         console.log("sunday6")
//         break;

//     default:
//         console.log("no")

// }



// console.log( !! 0);



let username = prompt("enter your name  ")
let userAge = parseInt(prompt("enter your age  "))



switch (true) {
    case userAge >= 24 && userAge <= 30: {
        console.log(`${username} age is enable to going to visit jaipur tour `)
        alert(`${username} Yehhh ! You are eligible for jaipur tour Enjoy.`)

        break;
    }

    case userAge < 24 && userAge >= 18: {
        console.log(`${username} age is enable to going to visit jaipur tour `)
        alert(`${username} Yehhh ! You are eligible for jaipur tour Enjoy.`)

        break;
    }

    default:
        console.log("sorry ! age is not eligible for jaipur tour ");
        alert("sorry !this age is not eligible for jaipur tour try again")

        break;
}