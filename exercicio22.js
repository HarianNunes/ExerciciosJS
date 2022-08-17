var e=require('prompt-sync')();
var lado, diagonais;
lado=Number(e('Digite o número de lados:'));
diagonais=((lado*(lado-3))/2);
console.log("O número de diagonais deste polígono convexo é:", diagonais);