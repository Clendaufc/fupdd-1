function input(): string { let X: any = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); } // _TEST_ONLY_
// function input(): string { let X: any = input; X.P = X.P || require("readline-sync"); return X.P.question() } // _FREE_ONLY_
function write(text: any, endl="\n") { process.stdout.write("" + text + endl); }
export {};

function main() {
    let numero = +input();
    let numero2 = +input();
    
    let soma = numero + numero2;
    let subtracao = numero - numero2;
    let mult = numero * numero2;
    let div = numero / numero2;
    let resto = numero % numero2;
    
    console.log(soma);
    console.log(subtracao);
    console.log(mult);
    console.log(div.toFixed(2));
    console.log(resto);}
main();
