/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones,
validando los datos ingresados. 
nombre del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el nombre de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno


CASTRO JUAN, DIV. E


*/
function mostrar()
{
	let nombre;
	let lugar;
	let temporada;
	let cantidadPax;
	let respuesta='s';
	let lugarMasElegido;
	let TitularMayorCantidadPax;
	let mayorCantidadPax;
	let contadorInvierno=0;
	let AcumInvierno=0;
	let banderaNombreTitularMasPax=0;

	let acumCataratas=0;
	let acumBariloche=0;
	let acumSalta=0;
	


	do
	{
	do
	{
		nombre=prompt("ingrese el nombre ");
	}while(!(isNaN(nombre)));

	do
	{
		lugar=prompt("ingrese el lugar");
	}while(lugar!="bariloche" && lugar!="cataratas" && lugar!="salta");


	do
	{
		temporada=prompt("ingrese la temporada");
	}while(temporada!="verano" && temporada!="invierno" && temporada!="otoño" && temporada!="primavera");

	do
	{
		cantidadPax=parseFloat(prompt("ingrese la cantidad de pasajeros"));
	}while(cantidadPax<1 || cantidadPax>30);


	if(banderaNombreTitularMasPax==0 || mayorCantidadPax<cantidadPax)
	{
		mayorCantidadPax=cantidadPax;
		TitularMayorCantidadPax=nombre;
		banderaNombreTitularMasPax=1;
	}

	if(temporada=="invierno")
	{
		contadorInvierno++;
		AcumInvierno=AcumInvierno+cantidadPax;
	}


	switch(lugar)
	{
		case "cataratas":
		{
			
			acumCataratas=acumCataratas+cantidadPax;
		}
		break;
		case"bariloche":
		{
			
			acumBariloche=acumBariloche+cantidadPax;
		}
		break;
		default:
		{
			
			acumSalta=acumSalta+cantidadPax;
		}
		break;

	}



	respuesta=prompt("desea agregar otro pasajero?");
	}while(respuesta=='s');


	if(acumSalta>acumBariloche && acumSalta>acumCataratas)
	{
		lugarMasElegido="salta";
	}

	else if(acumBariloche>acumSalta && acumBariloche>acumCataratas)
	{
		lugarMasElegido="bariloche";
	}

	else
	{
		lugarMasElegido="cataratas";
	}





	document.write("el lugar más elegido " + lugarMasElegido + "<br>");
	document.write("el nombre del titular que lleva más pasajeros es " + TitularMayorCantidadPax + "<br>");
	document.write("el promedio de personas por viaje,  que viajan en invierno es "+ AcumInvierno/contadorInvierno.toFixed(2) + "<br>");



	}
