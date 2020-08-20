/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más liviano de los sólidos
CASTRO JUAN MARTIN div E.
*/function mostrar()
{

let marca;
let precio;
let peso;
let tipo;
let acumTotal=0;
let LiquidoCaro;
let marcaLiquidoCaro;
let solidoMasLiviano;
let marcaSolidoLiviano;
let banderaLiq=0;
let banderaSolido=0;
let respuesta='s';

do
{

do
{
marca=prompt("ingrese la marca");
}while(!(isNaN(marca)));


do
{
precio=parseInt(prompt("ingrese el precio"));
}while(precio<1 || precio>100);

do
{
peso=parseInt(prompt("ingrese el peso"));
}while(peso<1 && peso>50);

do
{
tipo=prompt("ingrese el tipo solido/liquido");
}while(tipo!="solido" && tipo!="liquido");

acumTotal=acumTotal+peso;


switch(tipo)
{
case "solido":
{
	if(banderaSolido==0 || solidoMasLiviano>peso)
	{
		solidoMasLiviano=peso;
		marcaSolidoLiviano=marca;
		banderaSolido=1;
	}
}
break;

default:
{
	if(banderaLiq==0 || LiquidoCaro<precio)
	{
		LiquidoCaro=precio;
		marcaLiquidoCaro=marca;
		banderaLiq=1;
	}
}
}

respuesta=prompt("desea agregar otra producto?");

}while(respuesta=='s');




document.write("el peso total de la compra es " + acumTotal + "<br>");

if(banderaLiq==1)
{
document.write("la marca del más caro de los líquidos es " + marcaLiquidoCaro + "<br>");
}
if(banderaSolido==1)
{
document.write("la marca del solido mas liviano es " + marcaSolidoLiviano + "<br>");
}

}
