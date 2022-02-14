/*
Ramiro Sanchez DIV E
SWITCH Ejercicio 5

Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".
*/
function mostrar()
{
	//declaro variable
	let hora

	//tomo dato y paso a integer
	hora = document.getElementById("txtIdHora").value;
	hora = parseInt(hora);

	//defino casos para los meses
	switch(hora)
	{
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			alert("Es de mañana");
			break;
		default:
			alert("No es de mañana");
	}

}
//FIN DE LA FUNCIÓN
//txtIdHora