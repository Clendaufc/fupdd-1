function input(): string { let X: any = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); } // _TEST_ONLY_
// function input(): string { let X: any = input; X.P = X.P || require("readline-sync"); return X.P.question() } // _FREE_ONLY_
function write(text: any, endl="\n") { process.stdout.write("" + text + endl); }
export {};

    let num = +input();
    let i = 0;
    let resultado = "[ ";

    for (i = 0; i <= 10; i ++){
        if (i == num){
        resultado +=""
    }   else if (i == 10) {
        resultado +="ceu "
    }   else {
        resultado += i + " ";
  }
}
    resultado += "]";
    write(resultado);

