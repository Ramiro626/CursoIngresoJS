/*
Ramiro Sanchez DIV E
SWITCH Ejercicio 1

al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!."
*/

function mostrar()
{
	//declaro variable
		var mes;

	//tomo dato
		mes = document.getElementById("txtIdMes").value;

	//defino casos para los meses
	switch(mes)
	{
		case 'Enero': 
			alert("que comiences bien el año!!!.");
			break;
		case 'Marzo':
			alert("a clases!!!.");
			break;
		case 'Julio':
			alert("se vienen las vacaciones!!!.");
			break;
		case 'Diciembre':
			alert("Felices fiesta!!!.");
			break;
		default:
			alert("No pasa nada importante este mes");
	}

}
//FIN DE LA FUNCIÓN
//txtIdMes

/*

function mostrar()
{

	var vocal;
	vocal = prompt("ingrese una vocal");

	switch(vocal)
	{
	case 'a':
		alert("usted ingreso la vocal a");
		break;
	case 'e':
		alert("usted ingreso la vocal e");
		break;
	case 'i':
		alert("usted ingreso la vocal i");
		break;
	case 'o':
		alert("usted ingreso la vocal o");
		break;
	case 'u':
		alert("usted ingreso la vocal u");
		break;
	default:
		alert("usted no ingreso ninguna vocal");
	}
}

*/