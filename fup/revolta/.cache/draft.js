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
function main() {
  let tamanho = +input();
  let soldados = 0;
  let rebeldes = 0;
  for (let i = 0; i < tamanho; i++) {
    let numero = +input();
    if (numero % 2 === 0) {
      rebeldes += numero;
    } else {
      soldados += numero;
    }
  }
  if (soldados > rebeldes) {
    console.log("soldados");
  } else if (rebeldes > soldados) {
    console.log("rebeldes");
  } else {
    console.log("empate");
  }
}
main();
