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
  let hora = +input();
  let min = +input();
  let dia = +input();
  let mes = +input();
  let ano = +input();
  ano = ano % 100;
  hora = String(hora).padStart(2, "0");
  min = String(min).padStart(2, "0");
  dia = String(dia).padStart(2, "0");
  mes = String(mes).padStart(2, "0");
  ano = String(ano).padStart(2, "0");
  console.log(`${hora}:${min} ${dia}/${mes}/${ano}`);
}
main();
