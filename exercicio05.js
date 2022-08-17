var e=require('prompt-sync')();
var valor, desconto1, desconto2;
valor=Number(e('Digite o valor do produto: '));
desconto1=valor*0.9;
console.log('O valor com desconto é: ', desconto1);
