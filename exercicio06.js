var e=require('prompt-sync')();
var salario, vendas, comissão, total;
salario=Number(e("Digite o salário: "));
vendas=Number(e("Digite o valor total das vendas: "));
comissão=vendas*1.04;
console.log("A comissão das vendas é: ", comissão);
console.log("O salário total é: ", salario+comissão);