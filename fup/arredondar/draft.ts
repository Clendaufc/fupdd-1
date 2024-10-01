function input(): string { let X: any = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); } // _TEST_ONLY_
// function input(): string { let X: any = input; X.P = X.P || require("readline-sync"); return X.P.question() } // _FREE_ONLY_
function write(text: any, endl="\n") { process.stdout.write("" + text + endl); }
export {};

function main() {
    let call = input();
    let numb = +input();
    if (call == "r") console.log(Math.round(numb));
    if (call == "c") console.log(Math.ceil(numb));
    if (call == "f") console.log(Math.floor(numb));}
main();
