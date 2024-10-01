function input(): string { let X: any = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); } // _TEST_ONLY_
// function input(): string { let X: any = input; X.P = X.P || require("readline-sync"); return X.P.question() } // _FREE_ONLY_
function write(text: any, endl="\n") { process.stdout.write("" + text + endl); }
export {};

function main() {
    let nota1 = +input();
    let nota2 = +input();
    let notaf = +input();
    let media = (nota1 + nota2) / 2;
    let mediaf = (media + notaf) / 2;
    if (media >= 7) {
      console.log("aprovado");
    } else if (media > 4 && media < 7) {
      if (mediaf >= 5) {
        console.log("aprovado na final");
      } else {
        console.log("reprovado na final");
      }
    } else {
      console.log("reprovado");
    }
    }
main();
