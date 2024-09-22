function input(): string { let X: any = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); }
// function input(): string { let X: any = input; X.P = X.P || require("readline-sync"); return X.P.question() }
function write(text: any, endl="\n") { process.stdout.write("" + text + endl); }
export {};

    
let p = +input();
let d1 = +input();
let d2 = +input();

if(p == 0)
if ((d1 + d2) % 2 == 0) {
    console.log(0)
} else {
    console.log(1)
} 

if (p == 1) {
  if ((d1 + d2) % 2 == 0) {
      console.log(1)
} else {
    console.log(0)
}

}

