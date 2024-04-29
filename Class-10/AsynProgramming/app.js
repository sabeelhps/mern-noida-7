
console.log("START");

function sayHello() {
    console.log('Hello from function!');
}

// function delay(n) {
//     const startTime = new Date().getTime();
//     while (new Date().getTime() < startTime + 1000 * n) {
        
//     }
//     sayHello();
// }

// delay(5);

setTimeout(sayHello, 5000);

console.log("END");
