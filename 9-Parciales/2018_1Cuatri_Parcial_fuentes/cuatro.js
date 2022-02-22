/*
Ramiro Sanchez DIV E
Parcial Ejercicio 4 2018

Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
"la suma es xxx y supero el 10".
*/

function mostrar()
{
    //declaro variables
    var numeroUno;
    var numeroDos;
    var muestra;

    numeroUno = prompt("Ingrese el primer numero");
    numeroUno = parseInt(numeroUno);
        while(isNaN(numeroUno) == true)
        {
            numeroUno = prompt("Error, ingrese el primer numero nuevamente");
            numeroUno = parseInt(numeroUno);
        }

    numeroDos = prompt("Ingrese el segundo numero");
    numeroDos = parseInt(numeroDos);
        while(isNaN(numeroDos) == true)
        {
            numeroDos = prompt("Error, ingrese el segundo numero nuevamente");
            numeroDos = parseInt(numeroDos);
        }  

    if(numeroUno == numeroDos)
    {
        alert(numeroUno + "" + numeroDos);
    }
    else if (numeroUno>numeroDos)
    {
        alert(numeroUno - numeroDos);
    }
    else if (numeroUno<numeroDos)
    {
        muestra = numeroUno + numeroDos;
        if (muestra>10)
        {
            alert("La suma es " + muestra + " y supero el 10.")
        }
        else
        {
        alert(muestra);
        }
    }
}
