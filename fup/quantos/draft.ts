function input(): string { let X: any = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); }
// function input(): string { let X: any = input; X.P = X.P || require("readline-sync"); return X.P.question() }
function write(text: any, endl="\n") { process.stdout.write("" + text + endl); }
export {};

let a = +input();
let b = +input(); 
let c = +input(); 

let iguais; 
if (a === b && b === c) {
    iguais = 3; 
} else if (a === b || b === c || a === c) {
    iguais = 2; 
} else {
    iguais = 0; 
}

console.log(iguais);