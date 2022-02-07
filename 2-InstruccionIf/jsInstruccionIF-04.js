/*
Ramiro Sanchez DIV E
IF Ejercicio 4
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
	if(edad>12 && edad<18)
	{
		alert("usted es adolescente");
	}

}//FIN DE LA FUNCIÓN

//txtIdEdad