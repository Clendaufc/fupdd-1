function input(): string { let X: any = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); } // _TEST_ONLY_
// function input(): string { let X: any = input; X.P = X.P || require("readline-sync"); return X.P.question() } // _FREE_ONLY_
function write(text: any, endl="\n") { process.stdout.write("" + text + endl); }
export {};

function main() {
    let tempo = parseInt(input());

    let horas = Math.floor(tempo / 3600);  
    let sobra = tempo % 3600;  
    let minutos = Math.floor(sobra / 60);  
    let segundos = sobra % 60;  
    
    write(`${horas}:${minutos}:${segundos}`);}
main();
