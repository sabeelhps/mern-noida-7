const colors = require('colors');
const figlet = require("figlet");

console.log('OMG Rainbows!'.rainbow); 
console.log('Hello from node js'.underline.red)


figlet("Hello World!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data.rainbow);
});