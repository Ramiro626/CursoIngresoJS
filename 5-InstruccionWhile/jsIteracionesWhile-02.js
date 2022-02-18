/*
Ramiro Sanchez DIV E
WHILE Ejercicio 2

al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.
*/
function mostrar()
{
	//declaro variables
	var i; //variable de control

		i=10; //la inicializo en 10

	//bucle
	while (i>0)
	{
		//mostrar numero
		document.write("el numero es: " + i + "<br>");

		//añadir 1 en suma
		i = i - 1;
	}
}//FIN DE LA FUNCIÓN