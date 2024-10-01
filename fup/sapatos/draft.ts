function input(): string { let X: any = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); } // _TEST_ONLY_
// function input(): string { let X: any = input; X.P = X.P || require("readline-sync"); return X.P.question() } // _FREE_ONLY_
function write(text: any, endl="\n") { process.stdout.write("" + text + endl); }
export {};

function main() {
    let A = +input();
    let B = +input();
    if (A > B) {
      console.log("invalido");
      return;
    }
    let soma = 0;
    for (let i = A; i <= B; i++) {
      if (i % 2 === 0 && i % 3 === 0) {
        soma += i;
      }
    }
    console.log(soma);
  }
main();
