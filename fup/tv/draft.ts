function input(): string { let X: any = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); } // _TEST_ONLY_
// function input(): string { let X: any = input; X.P = X.P || require("readline-sync"); return X.P.question() } // _FREE_ONLY_
function write(text: any, endl="\n") { process.stdout.write("" + text + endl); }
export {};

function main() {
    let a = +input()
    let b = +input()
    let c = ((b - 1) * 5) / 100;
    let parcela = (a / b) + c * a / b;
    let valor = parcela * b
    console.log (parcela.toFixed(2))
    console.log (valor.toFixed(2))}
main();
