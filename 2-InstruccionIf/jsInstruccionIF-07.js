/*
Ramiro Sanchez DIV E
IF Ejercicio 7
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
	if (edad<18 && civil != "Soltero") 
	{
		alert("Es muy pequeño para NO ser soltero.");
	}

}//FIN DE LA FUNCIÓN

//txtIdEdad
//estadoCivil
//civil = civil.toLowerCase();
//if (edad<18 && civil != "soltero") 