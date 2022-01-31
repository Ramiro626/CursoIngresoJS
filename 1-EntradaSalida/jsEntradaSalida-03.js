/*
Ramiro Sanchez DIV E
E/S Ejercicio 3
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	//declaro variable
		var nombreIngresado;
	
	//guardamos variable
		nombreIngresado = document.getElementById("txtIdNombre").value;

	//display por alert
	alert("Su nombre es " + nombreIngresado);

}


//txtIdNombre
/*

entrada:
-prompt:
-id

procesos:

salida:
-alert

*/