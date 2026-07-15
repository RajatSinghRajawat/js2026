/* 
एड्रेस बार में कुछ url पर जब हम रिक्वेस्ट करते है तो हमें html की फाइल मिलती हैं लेकिन ब्राउजर html file ko ek html page में कनवर्ट कर देता हैं
   https://cyber-security-one-liart.vercel.app/
*/

/*
लेकिन कुछ url ऐसे होते है जो एक ऑब्जेक्ट की तरह डाटा रिस्पॉन्स में देते है जो एक json ऑब्जेक्ट होता है। और browser उसे ऐसे ही पेज पर शो कर देता हैं|
https://jsonplaceholder.typicode.com/todos/1
*/

/*
लेकिन यहां पर जो रिक्वेस्ट url par send की है वह हमने ब्राउजर्स के एड्रेस बार पर की है लेकिन यही काम अगर हमे javascript की मदद से करना हो तो हम इस कोड का use करते हैं|

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
*/



// console.log("sdcds",fetch("https://jsonplaceholder.typicode.com/todos/1"));

// const image = document.querySelector("img");
// const button = document.querySelector("button");

// button.addEventListener("click", () => {
//   fetch("https://dog.ceo/api/breeds/image/random")
//     .then((response) => response.json())
//     .then((json) => {
//       image.src = json.message;
//     });
// });
















const display = document.querySelector("#display");

// fetch("https://dummyjson.com/products")
//   .then((res) => res.json())
//   .then((data) => {

//     data.products.forEach((product) => {
//       display.innerHTML += `
//         <div style="border:1px solid #ccc; padding:15px; margin:10px;">
//           <img src="${product.thumbnail}" width="150">
//           <h2>${product.title}</h2>
//           <p><strong>Price:</strong> $${product.price}</p>
//           <p><strong>Category:</strong> ${product.category}</p>
//           <p><strong>Rating:</strong> ⭐ ${product.rating}</p>
//         </div>
//       `;
//     });

//   })
//   .catch((error) => {
//     display.innerHTML = `<h2>Error: ${error}</h2>`;
//   });




fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((response) => {
    response.products.forEach((product) => {

      display.innerHTML += `
      <div style="border:1px solid #ccc; padding:15px; margin:10px;">
                  <img src="${product.thumbnail}" width="150">
                  <h2>${product.title}</h2>
                  <p><strong>Price:</strong> $${product.price}</p>
                  <p><strong>Category:</strong> ${product.category}</p>
                  <p><strong>Rating:</strong> ⭐ ${product.rating}</p>
                </div>
      `


    });

  })
  .catch((error) => {
    console.log(error);

  })



