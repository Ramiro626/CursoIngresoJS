/*
Ramiro Sanchez DIV E
WHILE Ejercicio 3

al presionar el botón pedir la CLAVE (ayuda: es utn750)
*/
function mostrar()
{
	//declaro variables
	var i; //variable de control

	//pido contraseña
	i = prompt("ingrese el número clave.");

	//bucle
	while (i != "utn750")
	{
		//pido contraseña de nuevo por error
		i = prompt("Error, ingrese nuevamente el número clave.");
	}
	alert("Bienvenido");

}//FIN DE LA FUNCIÓN
