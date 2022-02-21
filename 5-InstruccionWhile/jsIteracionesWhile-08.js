/*
Ramiro Sanchez DIV E
WHILE Ejercicio 8

Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.
*/

function mostrar()
{
	//declaro variables
	var numeroIngresado;
	var suma;
	var multiplicacion;
	var respuesta;

	//inicializo variables
	suma = 0;
	multiplicacion = 1;
	respuesta = 'si';

	//bucle
	while(respuesta == "si")
	{
		//pido dato y parseo
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		while(respuesta == "si" && numeroIngresado>-1)
		{
			//suma positivos
			suma = suma + numeroIngresado;
			
			//salgo del while
			respuesta = "no";
		}
		while(respuesta == "si" && numeroIngresado<0)
		{
			//multiplicacion
			multiplicacion = multiplicacion * numeroIngresado;

			//salgo del while
			respuesta = "no";
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

	//display de suma y multiplicacion
	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdProducto").value = multiplicacion;

}//FIN DE LA FUNCIÓN
//txtIdSuma
//txtIdProducto