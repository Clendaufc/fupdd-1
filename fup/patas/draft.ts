function input(): string { let X: any = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); } // _TEST_ONLY_
// function input(): string { let X: any = input; X.P = X.P || require("readline-sync"); return X.P.question() } // _FREE_ONLY_
function write(text: any, endl="\n") { process.stdout.write("" + text + endl); }
export {};

function main() {
    let chuteCh = +input();
    let chuteCe = +input();
    let quantAni = +input();
    let somapatas = 0;
    for (let i = 0; i < quantAni; i++) {
      let animal = input();
      if (animal === "v") {
        somapatas += 4;
      } else if (animal === "g") {
        somapatas += 2;
      } else if (animal === "c") {
        somapatas += 4;
      }
    }
    write(somapatas);
    let difCh = Math.abs(somapatas - chuteCh);
    let difCe = Math.abs(somapatas - chuteCe);
    if (difCh < difCe) {
      write("Chico Bento");
    } else if (difCe < difCh) {
      write("Cebolinha");
    } else {
      write("empate");
    }
  }
main();
