/*
Ramiro Sanchez DIV E
WHILE Ejercicio 5

Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.
*/
function mostrar()
{
	//declaro variables
	var i; //variable de control

	//pido dato 
	i = prompt("ingrese 'f' para femenino o 'm' para masculino.");
	i = i.toLowerCase();

	//bucle
	while (!(i == "f" || i == "m"))
	{
		//pido dato
		i = prompt("Ese no es un sexo, ingrese f o m nuevamente.");
		i = i.toLowerCase();
	}

	//display por id
	document.getElementById("txtIdNumero").value = i;

}//FIN DE LA FUNCIÓN
//txtIdSexo