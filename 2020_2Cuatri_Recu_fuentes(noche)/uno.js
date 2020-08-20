/*
1)De 5  personas que ingresan al hospital se deben tomar y
validar los siguientes datos.
nombre , temperatura, sexo y edad.
a)informar la cantidad de personas de cada sexo.
b)la edad promedio en total
c)la mujer con más temperatura(si la hay)
pedir datos por prompt y mostrar por document.write o console.log

CASTRO JUAN DIV E
*/
function mostrar()
{
	let nombre;
	let temperatura;
	let sexo;
	let edad;
	let contadorF=0;
	let contadorM=0;
	let acumEdades=0;
	let tempMaxima;
	let mujerDeMasTemperatura;
	let banderaTempMax=0;



	for(let i=0 ; i<4 ; i++)
  {
    do
    {
    	nombre=prompt("ingrese el nombre");
    }while(!(isNaN(nombre)));

    do
    {
    	temperatura=parseInt(prompt("ingrese la temperatura"));
    }while(temperatura<25 || temperatura>40);

    do
    {
    	sexo=prompt("ingrese el sexo");
    }while(sexo!="f" && sexo!="m");
    
    do
    {
    edad=parseInt(prompt("ingrese la edad"));
    }while(edad<1 || edad>100);




    acumEdades=acumEdades+edad;
    
    if(sexo=="f")
    {
    	contadorF++;
        
        if(banderaTempMax==0 || tempMaxima<temperatura)
    {
    	tempMaxima=temperatura;
    	mujerDeMasTemperatura=nombre;
    	banderaTempMax=1;
    }
    }

    

    else
    {
    	contadorM++;
    }

  }

document.write("la cantidad de personas de sexo femenino es " + contadorF + " y la cantidad de personas de sexo masculino es " + contadorM + "<br>");
document.write("la edad promedio en total es " + acumEdades/5 + "<br>");

if(banderaTempMax==1)
{
document.write("la mujer con más temperatura es " + mujerDeMasTemperatura + "<br>");
}
}
