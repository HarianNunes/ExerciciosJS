var e=require('prompt-sync')();
var distanciaparede, angulo, medidaescada, rad, cos;
distanciaparede=Number(e("Digite a distância da escada em relação à parede: ",));
angulo=Number(e("Digite o ângulo da escada em relação ao chão: ",));
rad=((angulo*3.14)/180);
cos=1-(((rad**2)/(2*1))+((rad**4)/(4*3*2*1))-((rad**6)/(6*5*4*3*2*1)));
medidaescada=Number(distanciaparede/cos);
console.log("A medida da escada, para alcançar a ponta da parede é:",medidaescada,"metros");