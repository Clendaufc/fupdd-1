let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};


let nota1 = +input()
let nota2 = +input()
let notaf = +input()

let media = (nota1 + nota2) / 2
let mediaf = (media + notaf) / 2

if (media >= 7) {
  console.log("aprovado")
}
else if (media > 4 && media < 7) {
 if (mediaf >= 5) {
   console.log("aprovado na final")
 }
  else {
    console.log("reprovado na final")
  }
}
else {
  console.log("reprovado")
}