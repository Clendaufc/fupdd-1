function input(): string { let X: any = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); } // _TEST_ONLY_
// function input(): string { let X: any = input; X.P = X.P || require("readline-sync"); return X.P.question() } // _FREE_ONLY_
function write(text: any, endl="\n") { process.stdout.write("" + text + endl); }
export {};

function main() {
    let jog1 = input();
    let jog2 = input();
    if (jog1 == jog2) {
      write("empate");
    } else if (jog1 == "R" && jog2 == "S" || jog1 == "S" && jog2 == "P" || jog1 == "P" && jog2 == "R") {
      write("jog1");
    } else write("jog2");}
main();
