var e=require('prompt-sync')();
var raio, pi, area, volume, comprimento;
raio=Number(e("Digite o valor do raio: "));
pi=3.14;
area=pi*(raio*raio);
volume=4/(3*pi)*(raio*raio*raio);
comprimento=(2*pi)*raio;
console.log("Raio:",raio);
console.log("Comprimento da esfera:",comprimento);
console.log("Area da esfera: ",area);
console.log("Volume da esfera: ",volume);