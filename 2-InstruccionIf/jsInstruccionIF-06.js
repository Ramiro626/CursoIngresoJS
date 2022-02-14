/*
Ramiro Sanchez DIV E
IF Ejercicio 6

function mostrar()
{
	//declaro variables
		let edad;

	//tomo la edad  
		edad = document.getElementById("txtIdEdad").value;

	//convertir a Integer
		edad = parseInt(edad);

	//display por alert con if
	if(edad<13)
	{
		alert("usted es un niño");
	}
	else if(edad>12 && edad<18)
	{
		alert("usted es un adolescente");
	}
	else
	{
		alert("usted es un adulto");
	}
}//FIN DE LA FUNCIÓN

//txtIdEdad
*/

/*
Ramiro Sanchez DIV E
IF Ejercicio 6 BIS

Ejercicio 6 bis(usar if else):
Al ingresar por prompt una edad debemos informar si
la persona es anciano(mas de 70), mayor de edad (entre 70 y 18 años),
adolescente (entre 13 y 17 años), niño (menor a 13 años), bebe (0 a 3 años).
mostrar por ID el resultado.
*/

function mostrar()
{
	//declaro variables
		let edad;

	//tomo la edad  
		edad = prompt("¿Que edad tienes?");

	//convertir a Integer
		edad = parseInt(edad);

	//display por alert con if
		if(edad>70)
		{
			alert("usted es un anciano");
		}
		else 
		{
			if(edad>17 && edad<71)
			{
				alert("usted es mayor de edad");
			}
			else 
			{
				if(edad>12 && edad<18)
				{
					alert("usted es un adolescente");
				}
				else 
				{
					if (edad>3 && edad<13)
					{
						alert("usted es un niño");
					}
					else
					{
						alert("usted es un bebe");
					}
				}
			}
		}
}//FIN DE LA FUNCIÓN
