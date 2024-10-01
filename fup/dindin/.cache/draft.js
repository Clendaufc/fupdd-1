var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var draft_exports = {};
module.exports = __toCommonJS(draft_exports);
function input() {
  let X = input;
  X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/);
  return X.L.shift();
}
function write(text, endl = "\n") {
  process.stdout.write("" + text + endl);
}
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
