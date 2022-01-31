/*
Ramiro Sanchez DIV E
E/S Ejercicio 5
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	//declaro variables
		var nombreIngresado;
		var edadIngresada;

	//guardo los datos en las variables
		nombreIngresado = document.getElementById("txtIdNombre").value;
		edadIngresada = document.getElementById("txtIdEdad").value;

	//display por alert
		alert("Usted se llama " + nombreIngresado + " y tiene " + edadIngresada + " años");

}

//txtIdNombre
//txtIdEdad