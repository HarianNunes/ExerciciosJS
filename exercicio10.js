var e=require('prompt-sync')();
var lado, area;
lado=Number(e("Digite o tamanho do lado em cm: "));
area=lado*lado;
console.log("A área do quadrado é: ", area);