/*
Ramiro Sanchez DIV E
WHILE Ejercicio 4

al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	//declaro variables
	var i; //variable de control

	//pido numero
	i = prompt("ingrese un numero entre 0 y el 9 inclusive.");
	i = parseInt(i);

	//bucle
	//while (!(i>-1 && i<10))
	while (i<1 || i>9)
	{
		//pido numero
		i = prompt("Ese no es un numero entre 0 y 9, Ingrese otro numero");
		i = parseInt(i);
	}

	//display por id
	document.getElementById("txtIdNumero").value = i;

}//FIN DE LA FUNCIÓN
//txtIdNumero