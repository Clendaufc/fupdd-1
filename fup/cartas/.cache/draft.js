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
  let N = parseInt(input());
  let cartas = [];
  let valores = input().split(" ").map(Number);
  for (let i = 0; i < N; i++) {
    let valor = valores[i];
    if (valor === 1) {
      cartas.push("A");
    } else if (valor === 11) {
      cartas.push("J");
    } else if (valor === 12) {
      cartas.push("Q");
    } else if (valor === 13) {
      cartas.push("K");
    } else {
      cartas.push(valor.toString());
    }
  }
  console.log("[" + cartas.join(", ") + "]");
}
main();
