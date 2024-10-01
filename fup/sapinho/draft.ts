function input(): string { let X: any = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); } // _TEST_ONLY_
// function input(): string { let X: any = input; X.P = X.P || require("readline-sync"); return X.P.question() } // _FREE_ONLY_
function write(text: any, endl="\n") { process.stdout.write("" + text + endl); }
export {};

function main() {

        let p = +input(); 
        let s = +input(); 
        let e = +input(); 
    
        let a = 0;
        let salto: string[] = []; 

        while (a < p) { 
            let ate = s + a;
    
            if (ate >= p) { 
                salto.push(`${a} saiu`); 
                break; 
            }
    
            salto.push(`${a} ${ate}`);
            a = ate - e; 
        }
    
        for (let salt of salto) {
            console.log(salt);
        }
    }

main();
