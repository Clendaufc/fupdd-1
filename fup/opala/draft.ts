function input(): string { let X: any = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); } // _TEST_ONLY_
// function input(): string { let X: any = input; X.P = X.P || require("readline-sync"); return X.P.question() } // _FREE_ONLY_
function write(text: any, endl="\n") { process.stdout.write("" + text + endl); }
export {};

function main() {
    let a = +input()
    let b = +input()
    let c = +input()
    let tempo = (b) / 60
    let distanciapercorrida = (a) * tempo
    let desempenho = distanciapercorrida / c
    write(desempenho.toFixed(2))}
main();
