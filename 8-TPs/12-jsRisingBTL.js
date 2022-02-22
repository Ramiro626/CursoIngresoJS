/*
Ramiro Sanchez DIV E
TP Ejercicio 12
RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos 
nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente 
(para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//declaro de variables
 	var edadIngresada;
 	var sexoIngresado;
 	var estadoCivil;
	var sueldo;
	var legajo;
	var nacionalidad;

	//pido edad y valido
	edadIngresada = prompt("Ingrese su edad");
		while(isNaN(edadIngresada) == true)
		{
			edadIngresada = prompt("Error, ingrese su edad nuevamente.")
		}
	parseInt(edadIngresada);
		while(!(edadIngresada>17 && edadIngresada<91))
		{
			edadIngresada = prompt("Su edad esta fuera del limite para la carga de datos, ingrese una edad entre 18 y 90 inclusive");
			parseInt(edadIngresada);
		}
	
	//display por caja de texto
	document.getElementById("txtIdEdad").value = ("Su edad es " + edadIngresada);

	//pido sexo y valido con while e if
	sexoIngresado = prompt("Ingrese su sexo (m o f)");
	sexoIngresado = sexoIngresado.toLowerCase();
		
		while(!(sexoIngresado == "m" || sexoIngresado == "f"))
		{
			sexoIngresado = prompt("Error, ese no es un sexo, ingreselo nuevamente");
			sexoIngresado = sexoIngresado.toLowerCase();
		}
	
	if(sexoIngresado == "m")
	{
		sexoIngresado = "Masculino";
	}
	else
	{
		sexoIngresado = "Femenino";
	}
	
	//display por caja de texto
	document.getElementById("txtIdSexo").value = sexoIngresado;

	//pido estado civil y valido con while y display con switch
	estadoCivil = prompt("Ingrese su estado civil, 1 para soltero, 2 para casados, 3 para divorciados y 4 para viudos");
	estadoCivil = parseInt(estadoCivil);
		while(!(estadoCivil>0 && estadoCivil<5))
		{
			estadoCivil = prompt("Error, ingrese su estado civil nuevamente, 1 para soltero, 2 para casados, 3 para divorciados y 4 para viudos");
			estadoCivil = parseInt(estadoCivil);
		}
	switch(estadoCivil)
	{
		case 1:
			//display por caja de texto
			document.getElementById("txtIdEstadoCivil").value = "Soltero/a";
			break;
		case 2:
			//display por caja de texto
			document.getElementById("txtIdEstadoCivil").value = "Casado/a";
			break;
		case 3:
			//display por caja de texto
			document.getElementById("txtIdEstadoCivil").value = "Divorciado/a";
			break;
		case 4:
			//display por caja de texto
			document.getElementById("txtIdEstadoCivil").value = "Viudo/a";
			break;
		default: 
			alert("Error inesperado");
	}

	//pido sueldo y valido con while
	sueldo = prompt("Ingrese su sueldo bruto (Mayor a 8000)");
	sueldo = parseInt(sueldo);
		while(isNaN(sueldo) == true)
		{
			sueldo = prompt("Eso no es un sueldo, ingreselo nuevamente.");
			sueldo = parseInt(sueldo);
		}
		while(sueldo<8000)
		{
			sueldo = prompt("El sueldo debe ser mayor a 8000.");
			sueldo = parseInt(sueldo);
			while(isNaN(sueldo) == true)
			{
				sueldo = prompt("Eso no es un sueldo, ingreselo nuevamente.");
				sueldo = parseInt(sueldo);
			}
		}	
	//display por caja de texto
	document.getElementById("txtIdSueldo").value = ("Su sueldo es " + sueldo);

	//pido legajo y valido
	legajo = prompt("Ingrese su legajo, de 4 digitos y sin ceros a la izquierda");
	legajo = parseInt(legajo);
		while(isNaN(legajo) == true)
		{
			legajo = prompt("Eso no es un legajo, ingreselo nuevamente.");
			legajo = parseInt(legajo);
		}
		while(!(legajo<10000 && legajo>999))
		{
			legajo = prompt("Error, ingrese nuevamente el legajo con 4 cifras y sin ceros a la izquierda.");
			legajo = parseInt(legajo);
				while(isNaN(legajo) == true)
			{
				legajo = prompt("Eso no es un legajo, ingreselo nuevamente.");
				legajo = parseInt(legajo);
			}
		}
	//display por caja de texto
	document.getElementById("txtIdLegajo").value = ("Su legajo es " + legajo);

	//pido nacionalidad y valido
	nacionalidad = prompt("Ingrese su nacionalidad, 'A' para Argentino, 'E' para Extranjero, 'N' para Nacionalizados.");
	nacionalidad = nacionalidad.toUpperCase();
		while(!(nacionalidad == "A" || nacionalidad == "E" || nacionalidad == "N"))
		{
			nacionalidad = prompt("Error, ingrese su nacionalidad nuevamente, 'A' para Argentino, 'E' para Extranjero, 'N' para Nacionalizados.");
			nacionalidad = nacionalidad.toUpperCase();
		}
	
	//diferencio casos con switch
	switch(nacionalidad)
	{
		case "A":
			//display por caja de texto
			document.getElementById("txtIdNacionalidad").value = "Argentino";
			break;
		case "E":
			//display por caja de texto
			document.getElementById("txtIdNacionalidad").value = "Extranjero";
			break;
		case "N":
			//display por caja de texto
			document.getElementById("txtIdNacionalidad").value = "Nacionalizado";
			break;
		default:
			alert("Error, como paso esto?");
	}
}//FIN DE FUNCION
//txtIdEdad
//txtIdSexo
//txtIdEstadoCivil
//txtIdSueldo
//txtIdLegajo
//txtIdNacionalidad