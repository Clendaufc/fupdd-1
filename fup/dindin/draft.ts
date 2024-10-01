function input(): string { let X: any = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); } // _TEST_ONLY_
// function input(): string { let X: any = input; X.P = X.P || require("readline-sync"); return X.P.question() } // _FREE_ONLY_
function write(text: any, endl="\n") { process.stdout.write("" + text + endl); }
export {};

let quant = +input();
let chocolate = 0;
let limao = 0;
let manha = 0;
let tarde = 0;
for (let i = 0; i < quant; i++) {
  let lista = input().split(" ");
  let sabor = lista[0];
  let turno = lista[1];
  if (sabor == "c") {
    chocolate++;
  } else {
    limao++;
  }
  if (turno == "m") {
    manha++;
  } else {
    tarde++;
  }
}
if (chocolate > limao) {
  write("c");
} else if (limao == chocolate) {
  write("empate");
} else {
  write("l");
}
if (manha > tarde) {
  write("t");
} else if (tarde == manha) {
  write("empate");
} else {
  write("m");
}

