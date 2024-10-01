function input(): string { let X: any = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); } // _TEST_ONLY_
// function input(): string { let X: any = input; X.P = X.P || require("readline-sync"); return X.P.question() } // _FREE_ONLY_
function write(text: any, endl="\n") { process.stdout.write("" + text + endl); }
export {};

function main() {

    let xA = parseFloat(input())
    let yA = parseFloat(input())
    let xB = parseFloat(input())
    let yB = parseFloat(input())
    
    let distacia = Math.sqrt(Math.pow(xB - xA, 2) + Math.pow(yB - yA, 2));
    
    console.log(distacia.toFixed(2))}
main();
