/*
Ramiro Sanchez DIV E
WHILE Ejercicio 10

Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). 
*/
function mostrar()
{
	// declararo variables
	var numeroIngresado;
	var respuesta;
	var sumaNeg;
	var sumaPos;
	var cantNeg;
	var cantPos;
	var cantCeros;
	var cantPares;
	var promPos;
	var promNeg;
	var difNegPos;	

	//inicializo variables
	respuesta = 'si';
	sumaNeg = 0;
	sumaPos = 0;
	cantNeg = 0;
	cantPos = 0;
	cantCeros = 0;
	cantPares = 0;
	promPos = 0;
	promNeg = 0;
	difNegPos = 0;	

	//bucle
	while(respuesta == "si")
	{
		//pido dato y parseo
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		//discrimino 0 con switch
		switch(numeroIngresado)
		{
			case 0:
				cantCeros = cantCeros + 1;
				break;
			default:
				
				//separo positivos y negativos, los sumo y cuento
				if(numeroIngresado>0)
				{
					sumaPos = sumaPos + numeroIngresado;
					cantPos = cantPos + 1;
				}
				else if (numeroIngresado<0)
				{
					sumaNeg = sumaNeg + numeroIngresado;
					cantNeg = cantNeg + 1;
				}
		}

		//verifico si es par y lo cuento
		if (numeroIngresado % 2 == 0)
		{
			cantPares = cantPares + 1;
		}

		//promedio de positivos y negativos
		promPos = sumaPos / cantPos;
		promNeg = sumaNeg / cantNeg;

		//diferencia entre positivos y negativos
		difNegPos = sumaPos + sumaNeg;

		//pido confirmacion
		respuesta = prompt("Quiere continuar? (si o no)");
		respuesta = respuesta.toLowerCase();

		while(!(respuesta == "si" || respuesta == "no"))
		{
			respuesta = prompt("Error, ingrese una respuesta nuevamente (si o no)");
			respuesta = respuesta.toLowerCase();
		}
	}

	//display por document write
	document.write("Suma de los negativos " + sumNeg + "<br>"); 
	document.write("Suma de los positivos " + sumPos + "<br>"); 
	document.write("Cantidad de positivos " + cantPos + "<br>");
	document.write("Cantidad de negativos " + cantNeg + "<br>");
	document.write("Cantidad de ceros " + cantCeros + "<br>");
	document.write("Cantidad de números pares " + cantPares + "<br>");
	document.write("Promedio de positivos " + PromPos + "<br>");
	document.write("Promedio de negativos " + PromNeg + "<br>");
	document.write("Diferencia entre positivos y negativos " + difNegPos + "<br>");

}//FIN DE LA FUNCIÓN