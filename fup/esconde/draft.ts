function input(): string { let X: any = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); } // _TEST_ONLY_
// function input(): string { let X: any = input; X.P = X.P || require("readline-sync"); return X.P.question() } // _FREE_ONLY_
function write(text: any, endl="\n") { process.stdout.write("" + text + endl); }
export {};

function main() {

    let n = +input();
    let i = 0;
    let p = n;

    for (i = 1; i <= n; i+= 2){
        console.log(i);
    }
    for (p = n; p >= 0; p -= 1){
        if(p % 2 == 0){
        console.log(p)
    }
    }}
main();
