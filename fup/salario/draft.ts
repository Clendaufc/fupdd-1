function input(): string { let X: any = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); } // _TEST_ONLY_
// function input(): string { let X: any = input; X.P = X.P || require("readline-sync"); return X.P.question() } // _FREE_ONLY_
function write(text: any, endl="\n") { process.stdout.write("" + text + endl); }
export {};

function main() {
let salarioAgr = parseFloat(input());
    let nvSalario = +input();
    if (salarioAgr <= 1e3) {
      nvSalario = salarioAgr * 1.2;
    } else if (salarioAgr <= 1500) {
      nvSalario = salarioAgr * 1.15;
    } else if (salarioAgr <= 2e3) {
      nvSalario = salarioAgr * 1.1;
    } else {
      nvSalario = salarioAgr * 1.05;
    }
    write(nvSalario.toFixed(2));
  }
main();
