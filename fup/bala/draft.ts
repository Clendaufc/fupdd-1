let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let xA = parseFloat(input())
let yA = parseFloat(input())
let xB = parseFloat(input())
let yB = parseFloat(input())

let distacia = Math.sqrt(Math.pow(xB - xA, 2) + Math.pow(yB - yA, 2));

console.log(distacia.toFixed(2))