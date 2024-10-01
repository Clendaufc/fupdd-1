function input(): string { let X: any = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); } // _TEST_ONLY_
// function input(): string { let X: any = input; X.P = X.P || require("readline-sync"); return X.P.question() } // _FREE_ONLY_
function write(text: any, endl="\n") { process.stdout.write("" + text + endl); }
export {};

function main() {
    let N = +input();
    let peInicial = input();
    let resultado = [];
    let peAtual = peInicial;
    for (let i = 0; i <= 10; i++) {
      if (i === N) {
        continue;
      }
      if (i === 10) {
        resultado.push("ceu");
      } else {
        resultado.push(`${i}${peAtual}`);
      }
      peAtual = peAtual === "d" ? "e" : "d";
    }
    write(`[ ${resultado.join(" ")} ]`);
  }
main();
