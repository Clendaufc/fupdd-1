function input(): string { let X: any = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); } // _TEST_ONLY_
// function input(): string { let X: any = input; X.P = X.P || require("readline-sync"); return X.P.question() } // _FREE_ONLY_
function write(text: any, endl="\n") { process.stdout.write("" + text + endl); }
export {};

function main() {
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
    console.log(iguais);}
main();
