function mostrar()
{
	//declaro variables
		var edad;

	//tomo la edad  
		edad = document.getElementById("txtIdEdad").value;

	//convertir a Integer
		edad = parseInt(edad);

	//display por alert con if
	if(edad<13 || edad>18)
	{
		alert("usted NO es adolescente");
	}
}//FIN DE LA FUNCIÓN