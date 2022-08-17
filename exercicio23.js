var e=require('prompt-sync')();
var angulo1, angulo2, angulo3, conta, conta2;
angulo1=Number(e("Digite o valor do primeiro ângulo:"));
angulo2=Number(e("Digite o valor do segundo ângulo:"));
conta=(180-(angulo1+angulo2));
console.log("O valor do terceiro ângulo é:",conta);