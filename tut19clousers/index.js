function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const myFunc = outer();

myFunc(); // 1
myFunc(); // 2
myFunc(); // 3


function greet(name) {
  return function(message) {
    console.log(`${message}, ${name}`);
  };
}

const sayHello = greet("Rajat");

sayHello("Hello"); // Hello, Rajat
sayHello("Hi");    // Hi, Rajat