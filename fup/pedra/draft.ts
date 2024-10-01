function input(): string { let X: any = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); } // _TEST_ONLY_
// function input(): string { let X: any = input; X.P = X.P || require("readline-sync"); return X.P.question() } // _FREE_ONLY_
function write(text: any, endl="\n") { process.stdout.write("" + text + endl); }
export {};

function main() {

        const N = +input();
        
        let vencedor = -1;
        let menorPontuacao = Infinity;
        
        for (let i = 0; i < N; i++) {
            const [distA, distB] = input().split(" ").map(Number);
            
            if (distA >= 10 && distB >= 10) {
                const pontos = Math.abs(distA - distB);
                
                if (pontos < menorPontuacao) {
                    menorPontuacao = pontos;
                    vencedor = i;
                }
            }
        }
        
        if (vencedor === -1) {
            write("sem ganhador");
        } else {
            write(vencedor);
        }
    }  

main();
