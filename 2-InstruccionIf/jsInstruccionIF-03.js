/*
Ramiro Sanchez DIV E
IF Ejercicio 3
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
	if(edad > 17)
	{
		alert("eres mayor de edad");
	}
	else
	{
		alert("eres menor de edad");
	}

}//FIN DE LA FUNCIÓN

//txtIdEdad