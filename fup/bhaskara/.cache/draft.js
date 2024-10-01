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
const A = +input();
const B = +input();
const C = +input();
const delta = B * B - 4 * A * C;
if (delta > 0) {
  const raiz1 = (-B + Math.sqrt(delta)) / (2 * A);
  const raiz2 = (-B - Math.sqrt(delta)) / (2 * A);
  write(raiz1.toFixed(2));
  write(raiz2.toFixed(2));
} else if (delta === 0) {
  const raizUnica = -B / (2 * A);
  write(raizUnica.toFixed(2));
} else {
  write("nao ha raiz real");
}
