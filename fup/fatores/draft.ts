function input(): string { let X: any = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); } // _TEST_ONLY_
// function input(): string { let X: any = input; X.P = X.P || require("readline-sync"); return X.P.question() } // _FREE_ONLY_
function write(text: any, endl="\n") { process.stdout.write("" + text + endl); }
export {};

function main() {

    function main() {
        let n = +input(); 
        let fator = 2; 
        
        while (n > 1) {
            let contador = 0; 
    
            while (n % fator == 0) {
                contador++; 
                n /= fator; 
            }
    
            if (contador > 0) {
                write(`${fator} ${contador}`);
            }
    
            fator++;
        }
    }
    
    main();
    
}
main();
