// const h1 = document.querySelector('h1')
const input = document.querySelector("input");
const h2 = document.querySelector("h2");

// input.addEventListener("keypress  ", (e) => {
//   console.log("e",e);
//   console.log("code" ,e.code);
//   console.log(" key", e.key);
//   console.log("keydown event");
// });

input.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.key === "s") {
    e.preventDefault();
    alert("Save Shortcut Pressed");
  }
});