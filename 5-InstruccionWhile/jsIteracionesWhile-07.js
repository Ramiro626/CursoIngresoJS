/*
Ramiro Sanchez DIV E
WHILE Ejercicio 7

Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	//declaro variables
	var contador;
	var acumulador;
	var respuesta;
	var numeroIngresado;

	//inicializo variables
	contador=0;
	acumulador=0;
	respuesta='si';

	//bucle
	while(respuesta == "si")
	{
		//pido dato y parseo
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		//suma
		acumulador = acumulador + numeroIngresado;

		//controlador de numeros
		contador = contador + 1;

		//pido confirmacion
		respuesta = prompt("Quiere continuar? (si o no)");
		respuesta = respuesta.toLowerCase();
			while(!(respuesta == "si" || respuesta == "no"))
			{
				respuesta = prompt("Error, ingrese una respuesta nuevamente (si o no)");
				respuesta = respuesta.toLowerCase();
			}
	}

	//display de suma y promedio
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador / contador;

}//FIN DE LA FUNCIÓN
//txtIdSuma
//txtIdPromedio