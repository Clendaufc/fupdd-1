function input(): string { let X: any = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); }
// function input(): string { let X: any = input; X.P = X.P || require("readline-sync"); return X.P.question() }
function write(text: any, endl="\n") { process.stdout.write("" + text + endl); }
export {};

let a = +input();
let b = +input();
let c = +input();
let s = (a+b+c)/2;

let area = Math.sqrt(s*(s -a)*(s - b)*(s - c));

write(area.toFixed(2));