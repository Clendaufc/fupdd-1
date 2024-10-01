function input(): string { let X: any = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); } // _TEST_ONLY_
// function input(): string { let X: any = input; X.P = X.P || require("readline-sync"); return X.P.question() } // _FREE_ONLY_
function write(text: any, endl="\n") { process.stdout.write("" + text + endl); }
export {};

function main() {
    let dia = +input();
    let hora = +input();
    let Trabalhar = false;
    if (dia >= 2 && dia <= 6) {
      if (hora >= 8 && hora < 11 || hora >= 14 && hora <= 17) {
        Trabalhar = true;
      }
    } else if (dia === 7) {
      if (hora >= 8 && hora <= 11) {
        Trabalhar = true;
      }
    }
    console.log(Trabalhar ? "SIM" : "NAO");
    }
main();
