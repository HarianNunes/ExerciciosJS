var e=require('prompt-sync')();
var catetooposto, catetoadjacente, hipotenusa;
catetooposto=Number(e("Digite o valor do cateto oposto: "));
catetoadjacente=Number(e("Digite o valor do cateto adjacente: "));
hipotenusa=(catetooposto*catetooposto)+(catetoadjacente*catetoadjacente);
console.log("O valor da hipotenusa é: ",hipotenusa,"ao quadrado");