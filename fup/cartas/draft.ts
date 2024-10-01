function input(): string { let X: any = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); } // _TEST_ONLY_
// function input(): string { let X: any = input; X.P = X.P || require("readline-sync"); return X.P.question() } // _FREE_ONLY_
function write(text: any, endl="\n") { process.stdout.write("" + text + endl); }
export {};

function main() {
    let N = parseInt(input());
    let cartas = [];
    let valores = input().split(" ").map(Number);
    for (let i = 0; i < N; i++) {
      let valor = valores[i];
      if (valor === 1) {
        cartas.push("A");
      } else if (valor === 11) {
        cartas.push("J");
      } else if (valor === 12) {
        cartas.push("Q");
      } else if (valor === 13) {
        cartas.push("K");
      } else {
        cartas.push(valor.toString());
      }
    }
    console.log("[" + cartas.join(", ") + "]");
    }
main();
