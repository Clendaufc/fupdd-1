function input(): string { let X: any = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); } // _TEST_ONLY_
// function input(): string { let X: any = input; X.P = X.P || require("readline-sync"); return X.P.question() } // _FREE_ONLY_
function write(text: any, endl="\n") { process.stdout.write("" + text + endl); }
export {};

function main() {
    let a = +input();
    let b = +input();
    let c = +input();
    let meio;
    if (a > b && a < c || b > a && c < a) {
      meio = a;
    } else if (b > a && b < c || a > b && c < b) {
      meio = b;
    } else meio = c;
    write(meio);}
main();
