var e=require('prompt-sync')();
var anonascimento, anoatual, idadeanos, idademeses, idadesemanas, idadedias, diferença;
anonascimento=Number(e("Digite o ano de nascimento: "));
anoatual=Number(e("Digite o ano atual: "));
diferença=anoatual-anonascimento;
idadeanos=diferença;
idademeses=diferença*12;
idadesemanas=diferença*52;
idadedias=diferença*365;
console.log("A idade em anos é: ", idadeanos);
console.log("A idade em meses é: ", idademeses);
console.log("A idade em semanas é: ", idadesemanas);
console.log("A idade em dias é: ", idadedias);