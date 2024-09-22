let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let a = +input()
let b = +input()
let c = ((b - 1) * 5) / 100;
let parcela = (a / b) + c * a / b;
let valor = parcela * b
console.log (parcela.toFixed(2))
console.log (valor.toFixed(2))