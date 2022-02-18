/*
Ramiro Sanchez DIV E
WHILE Ejercicio 1

al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.
*/
function mostrar()
{
	//declaro variables
	var i; //variable de control

		i=1; //la inicializo en 1

	//bucle
	while (i<11)
	{
		//mostrar numero
		document.write("el numero es: " + i + "<br>");

		//añadir 1 en suma
		i = i + 1;
	}

}//FIN DE LA FUNCIÓN