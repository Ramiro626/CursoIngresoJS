/*
Ramiro Sanchez DIV E
E/S Ejercicio 8
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	//declaro variables
		let numero1;
		let numero2;
		let cociente;

	//guardo variables
		numero1 = document.getElementById("txtIdNumeroDividendo").value;
		numero1 = parseInt(numero1);
		numero2 = document.getElementById("txtIdNumeroDivisor").value;
		numero2 = parseInt(numero2);
		cociente = numero1 % numero2;

	//display por alert
		alert("El resto es " + cociente);
}

//txtIdNumeroDividendo
//txtIdNumeroDivisor