function greet(greeting, punctuation) {
  console.log(greeting + " " + this.name + punctuation);
}

let person1 = { name: "Hari" };
let person2 = { name: "Kishore" };

// Using call
greet.call(person1, "Hello,", "!"); // "Hello, Hari!"
greet.call(person2, "Hi,", "."); // "Hi, Kishore."

// Using bind
let greetHari = greet.bind(person1, "Hello,", "!");
greetHari(); // "Hello, John!"

let greetKishore = greet.bind(person2);
greetKishore("Hi,", "."); // "Hi, Jane."

// Using apply
greet.apply(person1, ["Hello,", "!"]); // "Hello, Hari!"
greet.apply(person2, ["Hi,", "."]); // "Hi, Kishore."
