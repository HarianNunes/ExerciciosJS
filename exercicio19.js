var e=require('prompt-sync')();
var l1, l2,a, p, conta;
l1=Number(e("Digite o lado 1 do cômodo: "));
l2=Number(e("Digite o lado 2 do cômodo: "));
p=Number(18);
a=(l1*l2);
conta=(p*a);
console.log("A área do cômodo em metros quadrados é:",a);
console.log("Para cada metro quadrado do cômodo, deverá ser utilizado",conta,"W de potência.");