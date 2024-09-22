function input(): string { let X: any = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); }
// function input(): string { let X: any = input; X.P = X.P || require("readline-sync"); return X.P.question() }
function write(text: any, endl="\n") { process.stdout.write("" + text + endl); }
export {};

let tamanho = +input();
let soldados = 0; 
let rebeldes = 0; 

for (let i = 0; i < tamanho; i++) {
    let numero = +input();

    if (numero % 2 === 0) {
        rebeldes += numero; 
    } else {
        soldados += numero;
    }
}

if (soldados > rebeldes) {
    console.log("soldados"); 
} else if (rebeldes > soldados) {
    console.log("rebeldes");
} else {
    console.log("empate");
}
