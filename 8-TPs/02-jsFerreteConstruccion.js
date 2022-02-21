/*
Ramiro Sanchez DIV E
TP Ejercicio 2

2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	//declaro variables
		let largo;
		let ancho;
		let perimetro;
		let alambre;
		
	//guardo variables
		largo = document.getElementById("txtIdLargo").value;
		largo = parseFloat(largo);
		ancho = document.getElementById("txtIdAncho").value;
		ancho = parseFloat(ancho);

	//saco el perimetro y la cantidad de alambre
		perimetro = (largo * 2) + (ancho * 2);
		alambre = (perimetro * 3);

	//display por alert
		alert("Se necesitara comprar " + alambre + " metros de alambre.");

}
function Circulo () 
{
	//declaro variables
		let radio;
		let perimetro;
		let alambre;
		
	//guardo variables
		radio = document.getElementById("txtIdRadio").value;
		radio = parseFloat(radio);

	//saco el perimetro y la cantidad de alambre
		perimetro = 2 * 3.14159265358979323846 * radio;
		alambre = (perimetro * 3);

	//display por alert
		alert("Se necesitara comprar " + alambre + " metros de alambre.");
}
function Materiales () 
{
	//declaro variables
		let largo;
		let ancho;
		let area;
		let cemento;
		let cal;
		
	//guardo variables
		largo = document.getElementById("txtIdLargo").value;
		largo = parseFloat(largo);
		ancho = document.getElementById("txtIdAncho").value;
		ancho = parseFloat(ancho);

	//saco el area y la cantidad de materiales
		area = largo * ancho;
		cemento = area * 2;
		cal = area * 3;

	//display por alert
		alert("Se necesitara comprar " + cemento + " bolsas de cemento y " + cal + " bolsas de cal.");

}

//txtIdLargo
//txtIdAncho
//txtIdRadio