var e=require('prompt-sync')();
var peso, gramas;
peso=Number(e("Digite o peso em Kg: "));
gramas=peso*100;
console.log("O peso em gramas é: ", gramas);