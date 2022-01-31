/* 
Ramiro Sanchez DIV E
E/S Ejercicio 4
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	//declaro variable
		var nombreIngresado;

	//guardo variable ingresada
	    nombreIngresado=prompt("Ingrese su nombre");

	//asignar nombre al ID
	//txtIdNombre.value = nombreIngresado;
		document.getElementById("txtIdNombre").value = nombreIngresado;

}

//txtIdNombre