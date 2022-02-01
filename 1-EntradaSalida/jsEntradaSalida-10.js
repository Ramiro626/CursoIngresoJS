/*
Ramiro Sanchez DIV E
E/S Ejercicio 10
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	//declaro variables
		let importe;
		let nuevoImporte;
		let descuento;

	//guardo variables
		importe = document.getElementById("txtIdImporte").value;
		importe = parseFloat(importe);
		descuento = importe * 25 / 100;

		nuevoImporte = importe - descuento;

	//lo muestro por ID
		document.getElementById("txtIdResultado").value = nuevoImporte;
		

}

//txtIdImporte
//txtIdResultado
//parseFloat