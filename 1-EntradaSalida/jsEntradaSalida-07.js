/*
Ramiro Sanchez DIV E
E/S Ejercicio 7
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	//declaro variables
		let numero1;
		let numero2;
		let suma;

	//guardo variables
		numero1 = document.getElementById("txtIdNumeroUno").value;
		numero1 = parseInt(numero1);
		numero2 = document.getElementById("txtIdNumeroDos").value;
		numero2 = parseInt(numero2);
		suma = numero1 + numero2;

	//display por alert	
		alert("La suma es " + suma);	
}

function restar()
{
	//declaro variables
		let numero1;
		let numero2;
		let resta;

	//guardo variables
		numero1 = document.getElementById("txtIdNumeroUno").value;
		numero1 = parseInt(numero1);
		numero2 = document.getElementById("txtIdNumeroDos").value;
		numero2 = parseInt(numero2);
		resta = numero1 - numero2;

	//display por alert
		alert("La resta es " + resta);
}

function multiplicar()
{ 
	//declaro variables
		let numero1;
		let numero2;
		let multi;

	//guardo variables
		numero1 = document.getElementById("txtIdNumeroUno").value;
		numero1 = parseInt(numero1);
		numero2 = document.getElementById("txtIdNumeroDos").value;
		numero2 = parseInt(numero2);
		multi = numero1 * numero2;

	//display por alert
		alert("EL producto es " + multi);
}

function dividir()
{
	//declaro variables
		let numero1;
		let numero2;
		let div;

	//guardo variables
		numero1 = document.getElementById("txtIdNumeroUno").value;
		numero1 = parseInt(numero1);
		numero2 = document.getElementById("txtIdNumeroDos").value;
		numero2 = parseInt(numero2);
		div = numero1 / numero2;

	//display por alert
		alert("La division es " + div);
	
}

//txtIdNumeroUno
//txtIdNumeroDos