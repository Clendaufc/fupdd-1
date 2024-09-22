function input(): string { let X: any = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); }
// function input(): string { let X: any = input; X.P = X.P || require("readline-sync"); return X.P.question() }
function write(text: any, endl="\n") { process.stdout.write("" + text + endl); }
export {};

let n = +input();

if (n > 0) {
    let elementos = input().split(' ').map(Number);
    let vetor: number[] = elementos.slice(0, n); 
 
    console.log(`[ ${vetor.join(' ')} ]`);
} else {
    console.log(`[ ]`); 
}
