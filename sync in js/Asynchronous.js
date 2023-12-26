/*
Due to synchrounous programming, sometimes imp instructions get blocked due to some previous instructions, which causes a delay in the UI.
Asynchronous code execution allows to execute next instructions immediately and doesn't block the follow.
*/

console.log("One");
console.log("Two");

setTimeout(() => {
  console.log("Hello");
}, 3000);

console.log("Three");
console.log("Four");