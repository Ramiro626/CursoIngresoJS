/*
Ramiro Sanchez DIV E
E/S Ejercicio 9
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	//declaro variables
		let sueldo;
		let nuevoSueldo;
		let aumento;

	//guardo variables
		sueldo = document.getElementById("txtIdSueldo").value;
		sueldo = parseFloat(sueldo);
		aumento = sueldo * 10 / 100;

		nuevoSueldo = sueldo + aumento;

	//lo muestro por ID
		document.getElementById("txtIdResultado").value = nuevoSueldo;
		


}

//txtIdSueldo
//txtIdResultado
//parseFloat
