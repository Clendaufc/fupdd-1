let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let n = +input();
let dist = 0;

let peda1 = input();
let peda2 = input();

for(let i = 0; i < n; i++);
if(peda1 == "d" && peda2 == "e");
dist++;

peda1 = peda2;
peda2 = input();
write(dist);
