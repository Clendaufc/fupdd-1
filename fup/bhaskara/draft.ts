function input(): string { let X: any = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); } // _TEST_ONLY_
// function input(): string { let X: any = input; X.P = X.P || require("readline-sync"); return X.P.question() } // _FREE_ONLY_
function write(text: any, endl="\n") { process.stdout.write("" + text + endl); }
export {};

        const A = +input();
        const B = +input();
        const C = +input();
        
        const delta = (B * B) - (4 * A * C);
        
        if (delta > 0) {
            const raiz1 = (-B + Math.sqrt(delta)) / (2 * A);
            const raiz2 = (-B - Math.sqrt(delta)) / (2 * A);
            write(raiz1.toFixed(2));
            write(raiz2.toFixed(2));

        } else if (delta === 0) {
            const raizUnica = -B / (2 * A);
            write(raizUnica.toFixed(2));
        } else {
            write("nao ha raiz real");
        }
    
