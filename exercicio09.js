var e=require('prompt-sync')();
var area, bM, bm, h;
bM=Number(e("Digite a base maior do trapézio em cm: "));
bm=Number(e("Digite a base menor do trapézio em cm: "));
h=Number(e("Digite a altura do trapézio em cm: "));
area=((bM+bm)*h)/2;
console.log("A área do trapézio em cm é: ", area,"cm");