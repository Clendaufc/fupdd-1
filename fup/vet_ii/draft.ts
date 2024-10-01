function input(): string { let X: any = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); } // _TEST_ONLY_
// function input(): string { let X: any = input; X.P = X.P || require("readline-sync"); return X.P.question() } // _FREE_ONLY_
function write(text: any, endl="\n") { process.stdout.write("" + text + endl); }
export {};

function main() {
    let n = +input();
    if (n > 0) {
      let elementos = input().split(" ").map(Number);
      let vetor = elementos.slice(0, n);
      console.log(`[ ${vetor.join(" ")} ]`);
    } else {
      console.log(`[ ]`);
    }
}
main();
