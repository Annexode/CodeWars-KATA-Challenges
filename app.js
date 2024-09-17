//Example one
var string = "Hello, I am Annexode IGIRANEZA and i love pizza.";
var output = string.split("").reverse().join("");

console.log(output);

//Example two
const backward = forward => {
    forward = forward.split(" ").reverse().join(" ");
    console.log(forward);
}
forward = "Hello, I am Annexode IGIRANEZA and i love pizza.";

backward(forward);

