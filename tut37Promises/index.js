const promise = new Promise((resolve, reject) => {
    const age = false

    if (age) {
        resolve("yes this my age")

    }
    else {
        reject("this is not my age ")
    }
})


promise
    .then((data) => {
        console.log("daata" , data);
        
    })
    .catch((error) => {
        console.log(error);
        
    })