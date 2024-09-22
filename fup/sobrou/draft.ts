let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};


let a = parseInt(input());
let b = parseInt(input());
let c = parseInt(input());

let v1 = parseInt(input());
let v2 = parseInt(input());
let v3 = parseInt(input());

let dinheiro = parseFloat(input());
let custoT = (a * v1) + (b * v2) + (c * v3);

let troco = dinheiro - custoT;

write (troco.toFixed(2)); 
