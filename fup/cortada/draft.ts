function input(): string { let X: any = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); } // _TEST_ONLY_
// function input(): string { let X: any = input; X.P = X.P || require("readline-sync"); return X.P.question() } // _FREE_ONLY_
function write(text: any, endl="\n") { process.stdout.write("" + text + endl); }
export {};

function main() {
    let b = +input();
    let t = +input();
    let alt = 70;
    let larg = 160;
    let areaTotal = larg * alt;
    let areaMet = areaTotal / 2;
    let areaFel = (b + t) * alt / 2;
    if (areaFel > areaMet) {
      write(1);
    } else if (areaFel < areaMet) {
      write(2);
    } else {
      write(0);
    }}
main();
