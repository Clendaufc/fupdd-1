function input(): string { let X: any = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); } // _TEST_ONLY_
// function input(): string { let X: any = input; X.P = X.P || require("readline-sync"); return X.P.question() } // _FREE_ONLY_
function write(text: any, endl="\n") { process.stdout.write("" + text + endl); }
export {};

function main() {
    let quan = +input();
    let Tcalorias = 0;
    for (let i = 0; i < quan; i++) {
      let Dcalorias = +input();
      Tcalorias += Dcalorias;
    }
    let media = Tcalorias / quan;
    console.log(media.toFixed(1));}
main();
