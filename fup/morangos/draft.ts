function input(): string { let X: any = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); } // _TEST_ONLY_
// function input(): string { let X: any = input; X.P = X.P || require("readline-sync"); return X.P.question() } // _FREE_ONLY_
function write(text: any, endl="\n") { process.stdout.write("" + text + endl); }
export {};

function main() {
    let l1 = +input();
    let a1 = +input();
    let l2 = +input();
    let a2 = +input();
    let area1 = l1 * a1;
    let area2 = l2 * a2;
    if (area1 >= area2) {
      console.log(area1);
    } else {
      console.log(area2);
    }
    }
main();
