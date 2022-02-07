/*
Ramiro Sanchez DIV E
IF Ejercicio 1
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

	if(edad == 15)
	{
		alert("niña bonita");
	}

}//FIN DE LA FUNCIÓN

//txtIdEdad