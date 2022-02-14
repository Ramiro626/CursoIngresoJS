/*
Ramiro Sanchez DIV E
SWITCH Ejercicio 4

al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.
*/
function mostrar()
{
	//declaro variable
	var mes

	//tomo dato
	mes = document.getElementById("txtIdMes").value;

	//defino casos para los meses
	switch(mes)
	{
		case 'Febrero':
			alert("Este mes tiene 28 días.");
			break;
		case 'Abril':
		case 'Junio':
		case 'Septiembre':
		case 'Noviembre':
			alert("Este mes tiene 30 días.");
			break;
		default:
			alert("Este mes tiene 31 días");
	}

}
//FIN DE LA FUNCIÓN
//txtIdMes