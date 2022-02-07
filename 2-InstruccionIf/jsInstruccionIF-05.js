/*
Ramiro Sanchez DIV E
IF Ejercicio 5
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
	if(edad<13 || edad>17)
	{
		alert("usted NO es adolescente");
	}
}//FIN DE LA FUNCIÓN