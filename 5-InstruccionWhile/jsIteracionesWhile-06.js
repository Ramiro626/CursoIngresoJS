/*
Ramiro Sanchez DIV E
WHILE Ejercicio 6

Al presionar el botón pedir 5 números e 
informar la suma acumulada y el promedio.
*/
function mostrar()
{
	//declaro variables
	var contador;
	var acumulador;
	var numeroIngresado;

	//inicializo variables
	contador=0;
	acumulador=0;

	//bucle
	while(contador<5)
	{
		//pido dato y parseo
		numeroIngresado = prompt("Ingrese un numero.");
		numeroIngresado = parseInt(numeroIngresado);

		//suma
		acumulador = acumulador + numeroIngresado;

		//controlador de while
		contador = contador + 1;
	}
	
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador / 5;

}//FIN DE LA FUNCIÓN
//txtIdSuma
//txtIdPromedio