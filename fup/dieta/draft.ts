function input(): string { let X: any = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); }
// function input(): string { let X: any = input; X.P = X.P || require("readline-sync"); return X.P.question() }
function write(text: any, endl="\n") { process.stdout.write("" + text + endl); }
export {};

let quan: number = +input();
let Tcalorias: number = 0;

for (let i = 0; i < quan; i++) { 
    let Dcalorias = +input();
    Tcalorias += Dcalorias; 
}

let media = Tcalorias / quan; 
console.log(media.toFixed(1)); 