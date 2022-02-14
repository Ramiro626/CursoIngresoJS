/*
Ramiro Sanchez DIV E
SWITCH Ejercicio 8

Al seleccionar un destino informar 
si hace FRIO o CALOR en ese destino
*/
function mostrar()
{
	//declaro variable
		var lugar;

	//tomo dato
		lugar = document.getElementById("txtIdDestino").value;

	//defino casos para los lugares
	switch(lugar)
	{
		case 'Bariloche':
			alert("Alli hace frio");
			break;
		case 'Cataratas':
			alert("Alli hace calor");
			break;
		case 'Mar del plata':
			alert("Alli hace frio");
			break;
		default:
			alert("Alli hace frio");
	}

}
//FIN DE LA FUNCIÓN
//txtIdDestino