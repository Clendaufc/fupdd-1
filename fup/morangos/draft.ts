function input(): string { let X: any = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); }
// function input(): string { let X: any = input; X.P = X.P || require("readline-sync"); return X.P.question() }
function write(text: any, endl="\n") { process.stdout.write("" + text + endl); }
export {};

let l1 = +input();
let a1 = +input();
let l2 = +input();
let a2 = +input();

let area1 = l1 * a1; // Calcula a área do primeiro retângulo
let area2 = l2 * a2; // Calcula a área do segundo retângulo

if (area1 >= area2) {
    console.log(area1); // Exibe a área maior ou a primeira, se forem iguais
} else {
    console.log(area2); // Exibe a área do segundo retângulo se for maior
}