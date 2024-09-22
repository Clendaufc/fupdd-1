function input(): string { let X: any = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); }
// function input(): string { let X: any = input; X.P = X.P || require("readline-sync"); return X.P.question() }
function write(text: any, endl="\n") { process.stdout.write("" + text + endl); }
export {};
 
let nome = input();
let idade = input();

if (idade < 12) {
   write (nome+ " eh crianca");
}

else if (idade < 18) {
    write (nome+ " eh jovem");
}

else if (idade < 65) {
    write (nome+ " eh adulto");
}

else if (idade < 1000) {
    write (nome+ " eh idoso");
}

else if (idade > 1000) {
    write (nome+ " eh mumia");
}

