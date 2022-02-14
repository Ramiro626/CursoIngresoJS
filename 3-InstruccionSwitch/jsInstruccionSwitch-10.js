/*
Ramiro Sanchez DIV E
SWITCH Ejercicio 10

una agencia de viajes nos piden informar si hacemos viajes a lugares 
según la estación del año estemos, informar si 
"Se viaja" o "No se viaja" a ese lugar

en Invierno: Solo Bariloche informa "se viaja" 
los demas destinos "No se viaja"

en Verano: Se viaja a Mar del plata y Cataratas solamente

en Otoño: Se viaja a todos los destinos.

en Primavera: solo no se viaja a Bariloche
*/
function mostrar()
{
	//declaro variable
		var lugar;
		var estacion;

	//tomo dato
		lugar = document.getElementById("txtIdDestino").value;
		estacion = document.getElementById("txtIdEstacion").value;

	//defino casos para los lugares y estacion
	switch(estacion)
	{
		case 'Invierno':
			switch(lugar)
			{
				case 'Bariloche':
					alert("Se viaja");
					break;
				default:
					alert("No se viaja");
			}
			break;
		case 'Verano':
			switch(lugar)
			{
				case 'Mar del plata':
				case 'Cataratas':
					alert("Se viaja");
					break;
				default:
					alert("No se viaja");
			}
			break;
		case 'Primavera':
			switch(lugar)
			{
				case 'Bariloche':
					alert("No se viaja");
					break;
				default:
					alert("Se viaja");
			}
			break;
		default:
			switch(lugar)
			{
				default:
					alert("Se viaja");
			}
	}

}
//FIN DE LA FUNCIÓN
//txtIdDestino
//txtIdEstacion