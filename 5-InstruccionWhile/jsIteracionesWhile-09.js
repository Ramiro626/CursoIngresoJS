/*
Ramiro Sanchez DIV E
WHILE Ejercicio 9

Al presionar el botón pedir números hasta que el usuario quiera, 
mostrar el número máximo y el número mínimo ingresado.
*/

function mostrar()
{
	// declararo variables
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	var bandera;
	
	//inicializo variables
	respuesta = 'si';
	numeroMaximo = 0;
	numeroMinimo = 0;
	bandera = 1;
	
	//bucle
	while(respuesta == "si")
	{
		//pido dato y parseo
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		//bandera
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

		//pido confirmacion
		respuesta = prompt("Quiere continuar? (si o no)");
		respuesta = respuesta.toLowerCase();

		while(!(respuesta == "si" || respuesta == "no"))
		{
			respuesta = prompt("Error, ingrese una respuesta nuevamente (si o no)");
			respuesta = respuesta.toLowerCase();
		}
	}

	//display de maximo y minimo
	document.getElementById("txtIdMaximo").value = numeroMaximo;
	document.getElementById("txtIdMinimo").value = numeroMinimo;

}//FIN DE LA FUNCIÓN
//txtIdMaximo
//txtIdMinimo