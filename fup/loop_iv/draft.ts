function input(): string { let X: any = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); } // _TEST_ONLY_
// function input(): string { let X: any = input; X.P = X.P || require("readline-sync"); return X.P.question() } // _FREE_ONLY_
function write(text: any, endl="\n") { process.stdout.write("" + text + endl); }
export {};

    let [Na, Nb] = input().split(' ').map(Number);

    write ("[", " ")
    if (Na > Nb){
        for (let i = Na; i > Nb; i--){
        write( i," ");
    }
        write ("]")
    } else {
        for (let i = Na; i < Nb; i++){
        write(i," ");
    }
        write ("]")
    }
