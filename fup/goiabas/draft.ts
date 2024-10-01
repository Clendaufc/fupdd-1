function input(): string { let X: any = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); } // _TEST_ONLY_
// function input(): string { let X: any = input; X.P = X.P || require("readline-sync"); return X.P.question() } // _FREE_ONLY_
function write(text: any, endl="\n") { process.stdout.write("" + text + endl); }
export {};

function main() {
    let capacidade = +input();
    let b = +input();
    let g = +input();
    let m = +input();
    let totalFrutas = [b + g + m];
    let tempo = 0;
    for (i = 0; i < totalFrutas; i += capacidade) {
      tempo++;
    }
    write(tempo);
  }
main();
