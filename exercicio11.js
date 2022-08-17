var e=require('prompt-sync')();
var dM, dm, area;
dM=Number(e("Digite a diagonal maior em cm: "));
dm=Number(e("Digite a diagonal menor em cm: "));
area=(dM*dm)/2;
console.log('A área do losango em cm é:', area);