let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let m = parseInt(input());
let n = parseInt(input());

let media = (m + n) / 2;
let MediaArr = media.toFixed(1); 

write(MediaArr);

