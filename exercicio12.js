var e=require('prompt-sync')();
var salariominimo, valorfuncionario, conta;
salariominimo=998;
valorfuncionario=Number(e("Digite o salario do funcionário: "));
conta=valorfuncionario/salariominimo;
console.log("Este funcionário recebe o total de ",conta, "salário(s) mínimo(s)");