/*
Ramiro Sanchez DIV E
TP Ejercicio 1
1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	//declaro variables
		let producto1;
		let producto2;
		let producto3;
		let suma;

	//guardo variables
		producto1 = document.getElementById("txtIdPrecioUno").value;
		producto1 = parseFloat(producto1);
		producto2 = document.getElementById("txtIdPrecioDos").value;
		producto2 = parseFloat(producto2);
		producto3 = document.getElementById("txtIdPrecioTres").value;
		producto3 = parseFloat(producto3);

	//sumo variables
		suma = producto1 + producto2 + producto3;

	//display por alert
		alert("la suma de precios es " + suma);
}

function Promedio () 
{
	//declaro variables
		let producto1;
		let producto2;
		let producto3;
		let promedio;

	//guardo variables
		producto1 = document.getElementById("txtIdPrecioUno").value;
		producto1 = parseFloat(producto1);
		producto2 = document.getElementById("txtIdPrecioDos").value;
		producto2 = parseFloat(producto2);
		producto3 = document.getElementById("txtIdPrecioTres").value;
		producto3 = parseFloat(producto3);

	//promedio variables
		promedio = ((producto1 + producto2 + producto3) / 3);

	//display por alert
		alert("El promedio de precios es " + promedio);
}

function PrecioFinal () 
{
	//declaro variables
		let producto1;
		let producto2;
		let producto3;
		let iva;
		let precioFinal;

	//guardo variables
		producto1 = document.getElementById("txtIdPrecioUno").value;
		producto1 = parseFloat(producto1);
		producto2 = document.getElementById("txtIdPrecioDos").value;
		producto2 = parseFloat(producto2);
		producto3 = document.getElementById("txtIdPrecioTres").value;
		producto3 = parseFloat(producto3);

	//Sumo y agrego el 21% a las variables
		iva = (((producto1 + producto2 + producto3) * 21) / 100);
		precioFinal = producto1 + producto2 + producto3 + iva;

	//display por alert
		alert("El precio final con el iva es de " + precioFinal + " y el valor del iva solo es de " + iva);
	
}

//txtIdPrecioUno
//txtIdPrecioDos
//txtIdPrecioTres