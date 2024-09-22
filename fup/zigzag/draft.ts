function input(): string { let X: any = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); }
// function input(): string { let X: any = input; X.P = X.P || require("readline-sync"); return X.P.question() }
function write(text: any, endl="\n") { process.stdout.write("" + text + endl); }
export {};

let inicio = +input(); 
let fim = +input();    

for (let i = inicio; i <= fim; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("zigzag"); 

    } else if (i % 3 === 0) {
        console.log("zig");

    } else if (i % 5 === 0) {
        console.log("zag"); 
        
    } else {
        console.log(i);
    }
}
