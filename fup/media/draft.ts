function input(): string { let X: any = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); } // _TEST_ONLY_
// function input(): string { let X: any = input; X.P = X.P || require("readline-sync"); return X.P.question() } // _FREE_ONLY_
function write(text: any, endl="\n") { process.stdout.write("" + text + endl); }
export {};

function main() {
    let m = parseInt(input());
    let n = parseInt(input());
    
    let media = (m + n) / 2;
    let MediaArr = media.toFixed(1); 
    
    write(MediaArr);}
main();
