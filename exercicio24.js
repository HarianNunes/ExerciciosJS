var e=require('prompt-sync')();
var valoratual, valordolar, valormarco, valoresterlina;
valoratual=Number(e("Digite a quantia em real que deseja converter:"));
valordolar=Number(valoratual*1.8);
valormarco=Number(valoratual*2);
valoresterlina=Number(valoratual*1.57);
console.log("O valor em reais convertido em dolar é:",valordolar,"dolares");
console.log("O valor em reais convertido em marco alemão é:",valormarco,"marcos alemães");
console.log("O valor em reais convertido em libra esterlina é:",valoresterlina,"libras esterlinas");