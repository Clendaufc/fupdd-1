function input(): string { let X: any = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); }
// function input(): string { let X: any = input; X.P = X.P || require("readline-sync"); return X.P.question() }
function write(text: any, endl="\n") { process.stdout.write("" + text + endl); }
export {};

let call = input();
let numb = +input();

if (call == 'r') console.log(Math.round(numb));
if (call == 'c') console.log(Math.ceil(numb));
if (call == 'f') console.log(Math.floor(numb));