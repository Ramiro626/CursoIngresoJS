/*
Ramiro Sanchez DIV E
IF Ejercicio 2
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

}//FIN DE LA FUNCIÓN

//txtIdEdad