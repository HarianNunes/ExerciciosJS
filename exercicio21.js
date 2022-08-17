var e=require('prompt-sync')();
var horat, valht, valhx, salariominimo, horax, salbruto, quantiahx, salario;
horat=Number(e("Digite a quantidade de horas trabalhadas:"));
horax=Number(e("Digite a quantidade de horas extras trabalhadas:"));
salariominimo=Number(998)
valht=Number((1/8)*salariominimo);
valhx=Number((1/4)*salariominimo);
salbruto=Number(horat*valht);
quantiahx=Number(horax*valhx);
salariototal=Number(salbruto+quantiahx);
console.log("O salário a receber é:", salariototal);