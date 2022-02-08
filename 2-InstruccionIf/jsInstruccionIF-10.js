/*
Ramiro Sanchez DIV E
IF Ejercicio 10
*/
function mostrar()
{
	//declaro variable
		let randomNum;

	//inicializo variable
		randomNum = Math.floor(Math.random() * 10) + 1;

	//Separo notas con if y muestro por alert
		if(randomNum > 8)
		{
			alert("EXCELENTE");
		}
		else if (randomNum < 9 && randomNum > 3) 
		{
			alert("APROBÓ");
		}
		else
		{
			alert("Vamos, la proxima se puede");
		}

}//FIN DE LA FUNCIÓN