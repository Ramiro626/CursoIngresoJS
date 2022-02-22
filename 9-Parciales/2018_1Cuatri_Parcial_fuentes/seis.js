/*
Ramiro Sanchez DIV E
Parcial Ejercicio 6 2018

Se ingresa una hora.
Si está entre las 6 y las 11 mostrar:"es de mañana",
si es desde las 12 a las 19: "es de tarde",
de lo contrario informar que es de noche.
Informar si la hora no es válida.
Si es de noche y la hora es menor a 24 mostrar se debe agregar el mensaje : "a dormir
*/

function mostrar()
{
    //declaro variables
    var hora;
    var asd;

    //pido dato y verifico
    hora = document.getElementById("laHora").value;
    hora = parseInt(hora);
        if(isNaN(hora) == true || hora<0 || hora>24 || (!(hora % 1 == 0)))
        {
            alert("Error, ingrese una hora valida.");
        }
        //separo horarios
        else if(hora>5 && hora<12)
        {
            asd = 1;
        }
        else if(hora>12 && hora<19)
        {
            asd = 2;
        }
        else if(hora>19 && hora<24)
        {
            asd = 3;
        }
        else
        {
            asd = 4;
        }
    
    //alert de estado del dia
    switch(asd)
    {
        case 1:
            alert("Es de mañana.");
            break;
        case 2:
            alert("Es de tarde.");
            break;
        case 3:
            alert("Es de noche, a dormir.");
            break;
        case 4:
            alert("Es de noche");
            break;
    }

}//FIN DE FUNCION
//laHora