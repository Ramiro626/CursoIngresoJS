function mostrar()
{
	//declaro variables
		var edad;

	//tomo la edad  
		edad = document.getElementById("txtIdEdad").value;

	//convertir a Integer
		edad = parseInt(edad);

	//display por alert con if

	if(edad >= 18)
	{
		alert("eres mayor de edad");

	}

}//FIN DE LA FUNCIÓN

//txtIdEdad