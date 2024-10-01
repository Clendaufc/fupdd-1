function input(): string { let X: any = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); } // _TEST_ONLY_
// function input(): string { let X: any = input; X.P = X.P || require("readline-sync"); return X.P.question() } // _FREE_ONLY_
function write(text: any, endl="\n") { process.stdout.write("" + text + endl); }
export {};

function main() {
    let a = +input();
    let b = +input();
    let soma = +input();
    if (a > b) {
      console.log("invalido");
      process.exit(0);
    }
    if (a % 2 !== 0) {
      a += 1;
    }
    for (let i = a; i <= b; i += 2) {
      soma += i;
    }
    console.log(soma);}
main();
