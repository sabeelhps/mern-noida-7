const names = ["Ajay", "Amit", "Max"];

// for (let i = 0; i < names.length; i++){
//     console.log("Hello from " + names[i]);
// }


for (let name of names) {
    // console.log("Hello from " + name);
    console.log(`Hello from ${name}`); // string template literal
}

// console.log(`Sum of 1 2 and 3 is ${1+2+3}`)