/*
Ramiro Sanchez DIV E
TP Ejercicio 3

3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	//declaro variables
		let temperatura;
		let conversion;
		
	//guardo variables
		temperatura = document.getElementById("txtIdTemperatura").value;
		temperatura = parseFloat(temperatura);

	//calculo de Farhenheit a Centigrados
		conversion = ((temperatura - 32) * 5) / 9;

	//display por alert
		alert("El valor en Centigrados es de " + conversion);
}

function CentigradosFahrenheit () 
{
	//declaro variables
		let temperatura;
		let conversion;
		
	//guardo variables
		temperatura = document.getElementById("txtIdTemperatura").value;
		temperatura = parseFloat(temperatura);

	//calculo de Farhenheit a Centigrados
		conversion = (temperatura * 1.8) + 32;

	//display por alert
		alert("El valor en Centigrados es de " + conversion);
}
//txtIdTemperatura