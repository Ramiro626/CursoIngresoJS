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
	bandera = 1;
	sumaNeg = 0;
	sumaPos = 0;
	cantNeg = 0;
	cantPos = 0;
	cantCeros = 0;
	cantPares = 0;
	promPos = 0;
	promNeg = 0;
	difNegPos = 0;	
	numeroMaximo = 0;
	numeroMinimo = 0;

	//bucle
	while(respuesta == "si")
	{
		//pido numero, verifico y parseo
		numeroIngresado = prompt("Ingrese un numero");
		
		while(isNaN(numeroIngresado) == true)
		{
			numeroIngresado = prompt("Error, ese no es un numero!")
		}
		numeroIngresado = parseInt(numeroIngresado);
		
		//bandera maximo y minomo
		if (bandera == 1)
		{
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
			bandera = 0;
		}
		
		//discrimino entre maximo y minimo con if
		else if (numeroIngresado<numeroMinimo)
		{
			numeroMinimo = numeroIngresado;
		}
		else if (numeroIngresado>numeroMaximo)
		{
			numeroMaximo = numeroIngresado;
		}

		// while para diferenciar positivos
		while(numeroIngresado>0 && respuesta == "si")
		{
			sumaPos = sumaPos + numeroIngresado;
			cantPos = cantPos + 1;
			respuesta = "no";
		}
		
		// while para diferenciar negativos
		while(numeroIngresado<0 && respuesta == "si")
		{
			sumaNeg = sumaNeg + numeroIngresado;
			cantNeg = cantNeg + 1;
			respuesta = "no";
		}

		// while para diferenciar ceros
		while(numeroIngresado == 0 && respuesta == "si")
		{
			cantCeros = cantCeros + 1;
			respuesta = "no";
		}

		//verifico si es par y lo cuento
		if (numeroIngresado % 2 == 0)
		{
			cantPares = cantPares + 1;
		}


		//pido confirmacion
		respuesta = prompt("Quiere continuar? (si o no)");
		respuesta = respuesta.toLowerCase();

		while(!(respuesta == "si" || respuesta == "no"))
		{
			respuesta = prompt("Error, ingrese una respuesta nuevamente (si o no)");
			respuesta = respuesta.toLowerCase();
		}
	}

	//promedio de positivos
	if (cantPos>0)
	{
	promPos = (sumaPos / cantPos);
	}

	//promedio de negativos
	if (cantNeg>0)
	{
	promNeg = (sumaNeg / cantNeg);
	}

	//diferencia entre positivos y negativos
	difNegPos = sumaPos + sumaNeg;

	//display por document write
	document.write("Suma de los negativos " + sumaNeg + "<br>"); 
	document.write("Suma de los positivos " + sumaPos + "<br>"); 
	document.write("Cantidad de positivos " + cantPos + "<br>");
	document.write("Cantidad de negativos " + cantNeg + "<br>");
	document.write("Cantidad de ceros " + cantCeros + "<br>");
	document.write("Cantidad de números pares " + cantPares + "<br>");
	document.write("Promedio de positivos " + promPos + "<br>");
	document.write("Promedio de negativos " + promNeg + "<br>");
	document.write("Diferencia entre positivos y negativos " + difNegPos + "<br>");
	document.write("Numero Maximo " + numeroMaximo + "<br>");
	document.write("Numero Minimo " + numeroMinimo + "<br>");
}//FIN DE LA FUNCIÓN