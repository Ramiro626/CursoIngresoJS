/*
Ramiro Sanchez DIV E
E/S Ejercicio 6
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//declaro variables
		let numero1;
		let numero2;
		let suma;

	//guardo datos ingresados en variables
		numero1 = document.getElementById("txtIdNumeroUno").value;
		numero1 = parseInt(numero1);
		numero2 = document.getElementById("txtIdNumeroDos").value;
		numero2 = parseInt(numero2);
		suma = numero1 + numero2;

	//display por alert
		alert("La suma es " + suma);
}

//txtIdNumeroUno
//txtIdNumeroDos
//parseFloat
//document.write(suma);