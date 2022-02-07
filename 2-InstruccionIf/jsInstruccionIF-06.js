/*
Ramiro Sanchez DIV E
IF Ejercicio 6
*/
function mostrar()
{
	//declaro variables
		let edad;

	//tomo la edad  
		edad = document.getElementById("txtIdEdad").value;

	//convertir a Integer
		edad = parseInt(edad);

	//display por alert con if
	if(edad<13)
	{
		alert("usted es un niño");
	}
	else if(edad>12 && edad<18)
	{
		alert("usted es un adolescente");
	}
	else if(edad>17)
	{
		alert("usted es un adulto");
	}
}//FIN DE LA FUNCIÓN

//txtIdEdad