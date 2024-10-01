function input(): string { let X: any = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); } // _TEST_ONLY_
// function input(): string { let X: any = input; X.P = X.P || require("readline-sync"); return X.P.question() } // _FREE_ONLY_
function write(text: any, endl="\n") { process.stdout.write("" + text + endl); }
export {};

function main() {
    let a = parseInt(input());
    let b = parseInt(input());
    let c = parseInt(input());
    
    let v1 = parseInt(input());
    let v2 = parseInt(input());
    let v3 = parseInt(input());
    
    let dinheiro = parseFloat(input());
    let custoT = (a * v1) + (b * v2) + (c * v3);
    
    let troco = dinheiro - custoT;
    
    write (troco.toFixed(2)); }
main();
