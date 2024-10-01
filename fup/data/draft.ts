function input(): string { let X: any = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); } // _TEST_ONLY_
// function input(): string { let X: any = input; X.P = X.P || require("readline-sync"); return X.P.question() } // _FREE_ONLY_
function write(text: any, endl="\n") { process.stdout.write("" + text + endl); }
export {};

function main() {
    let hora = + input();
    let min = + input();
    let dia = + input();
    let mes = + input();
    let ano = + input();
    ano = ano % 100;
    
    hora = String(hora).padStart(2, '0');
    min = String(min).padStart(2, '0');
    dia = String(dia).padStart(2, '0');
    mes = String(mes).padStart(2, '0');
    ano = String(ano).padStart(2, '0');
    
    console.log(`${hora}:${min} ${dia}/${mes}/${ano}`)}
main();
