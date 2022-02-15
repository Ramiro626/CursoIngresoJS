/*
Ramiro Sanchez DIV E
SWITCH Ejercicio 9

Una agencia de viajes debe sacar las tarifas de los viajes,
se cobra $15.000 por cada estadia como base, 
se pide el ingreso de una estacion del año y 
localidad para vacacionar para poder calcular el precio final

en Invierno: Bariloche tiene un aumento del 20% 
Cataratas y Cordoba tiene un descuento del 10% 
Mar del plata tiene un descuento del 20%

en Verano: Bariloche tiene un descuento del 20% 
Cataratas y Cordoba tiene un aumento del 10% 
Mar del plata tiene un aumento del 20%

en Otoño y Primavera: Bariloche tiene un aumento del 10% 
Cataratas tiene un aumento del 10% 
Mar del plata tiene un aumento del 10% y 
Cordoba tiene el precio sin descuento
Curso de ingreso UTN FRA
*/
function mostrar()
{
	//declaro variable
		var lugar;
		var estacion;
		let precio;
		let descuento;

	//tomo dato y inicializo precio
		lugar = document.getElementById("txtIdDestino").value;
		estacion = document.getElementById("txtIdEstacion").value;
		precio = 15000;

	//defino casos para los lugares con switch anidado
	switch(estacion)
	{
		case 'Invierno':
			switch(lugar)
			{
				case 'Bariloche':
					descuento = 1.2;
					break;
				case 'Mar del plata':
					descuento = 0.8;
					break;
				default:
					descuento = 0.9;
			}
			break;
		case 'Verano':
			switch(lugar)
			{
				case 'Bariloche':
					descuento = 0.8;
					break;
				case 'Mar del plata':
					descuento = 1.2;
					break;
				default:
					descuento = 1.1;
			}
			break;
		default:
			switch(lugar)
			{
				case 'Cordoba':
					descuento = 1;
					break;
				default:
					descuento = 1.1;
			}
	}

	//calculo el precio y display por alert
		precio = precio * descuento;
		alert ("El precio de la estadia es de " + precio);

}
//FIN DE LA FUNCIÓN
//txtIdDestino
//txtIdEstacion