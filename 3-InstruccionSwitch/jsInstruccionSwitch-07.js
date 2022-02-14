/*
Ramiro Sanchez DIV E
SWITCH Ejercicio 7

Al selecionar un destino, indicar el punto cardinal de nuestro pais 
en donde se encuentra Norte, Sur, Este u Oeste.
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
			alert("Se encuentra en el Oeste");
			break;
		case 'Cataratas':
			alert("Se encuentra en el Norte");
			break;
		case 'Mar del plata':
			alert("Se encuentra en el Este");
			break;
		default:
			alert("Se encuentra en el Sur");
	}

}
//FIN DE LA FUNCIÓN
//txtIdDestino