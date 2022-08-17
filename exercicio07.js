var e=require('prompt-sync')();
var peso, engordar, emagrecer;
peso=Number(e('Digite o peso: '));
engordar=peso*1.15;
emagrecer=peso*0.80;
console.log("Se engordar, este será seu peso: ", engordar);
console.log("Se emagrecer, este será seu peso: ", emagrecer);