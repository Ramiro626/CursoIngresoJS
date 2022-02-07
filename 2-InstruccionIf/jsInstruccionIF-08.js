/*
Ramiro Sanchez DIV E
IF Ejercicio 8
*/
function mostrar()
{
	//declaro variables
	let edad;
	var civil;

	//inicializo variables 
		edad = document.getElementById("txtIdEdad").value;
		civil = document.getElementById("estadoCivil").value;

	//convertir a Integer
		edad = parseInt(edad);

	//display por alert con if
		if (edad>17 && civil == "Soltero") 
	{
		alert("Es soltero y no es menor.");
	}

	
}//FIN DE LA FUNCIÓN

//txtIdEdad
//estadoCivil