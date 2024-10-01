function input(): string { let X: any = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); } // _TEST_ONLY_
// function input(): string { let X: any = input; X.P = X.P || require("readline-sync"); return X.P.question() } // _FREE_ONLY_
function write(text: any, endl="\n") { process.stdout.write("" + text + endl); }
export {};

function main() {
    let nome = input();
    let idade = input();
    
    if (idade < 12) {
      write(nome + " eh crianca");
    } else if (idade < 18) {
      write(nome + " eh jovem");
    } else if (idade < 65) {
      write(nome + " eh adulto");
    } else if (idade < 1e3) {
      write(nome + " eh idoso");
    } else if (idade > 1e3) {
      write(nome + " eh mumia");
    }}
main();
