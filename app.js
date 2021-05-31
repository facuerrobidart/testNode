
let moment = require("moment");
console.log("esto es una prueba");
console.log(moment().format("Do MMM YYYY"));
console.log("meti un cambio");
console.log("meti un segundo cambio"); //31/5/2021

let fs = require("fs");

let a = fs.readFileSync("./hola.txt","utf-8");
console.log(a);