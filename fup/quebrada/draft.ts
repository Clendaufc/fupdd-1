function input(): string { let X: any = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); } // _TEST_ONLY_
// function input(): string { let X: any = input; X.P = X.P || require("readline-sync"); return X.P.question() } // _FREE_ONLY_
function write(text: any, endl="\n") { process.stdout.write("" + text + endl); }
export {};

function main() {
    let n1 = +input();
    let n2 = +input();
    let inteira = Math.floor(n1 / n2);
    let resto = n1 % n2;
    console.log(inteira);
    console.log(resto);
    let quebrada = (n1 / n2).toFixed(2);
    console.log(quebrada);}
main();
