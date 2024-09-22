function input(): string { let X: any = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); }
// function input(): string { let X: any = input; X.P = X.P || require("readline-sync"); return X.P.question() }
function write(text: any, endl="\n") { process.stdout.write("" + text + endl); }
export {};

let fmn = + input();
let quanfilhos = + input();

let fmv = fmn + (quanfilhos - 1)*2
for (let i = fmn ; i <= fmv ; i += 2) {
 
console.log(i)
}
