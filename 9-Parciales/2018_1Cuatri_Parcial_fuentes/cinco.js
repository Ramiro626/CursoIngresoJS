/*
Ramiro Sanchez DIV E
Parcial Ejercicio 5 2018

pedir el ingreso de un planeta del sistema solar
Si es la tierra mostrar "acá vivimos".
Si está más cerca del sol, "acá hace más calor".
Si está más lejos del sol, "acá hace más frio".
Si no es un planeta valido informarlo.
Aclaración: los planetas se ingresan en minúscula (Mercurio y Venus están antes que la tierra).
*/
function mostrar()
{
    //declaro variable
    var planeta;

    //pido dato
    planeta = prompt("Ingrese un planeta del sistema solar.");
    planeta = planeta.toLowerCase();

    switch(planeta)
    {
        case "tierra":
            alert("Acá vivimos.");
            break;
        case "mercurio":
            alert("Acá hace más calor");
            break;
        case "venus":
            alert("Acá hace más calor");
            break;
        case "marte":
            alert("Acá hace más frio")
            break;
        case "jupiter":
            alert("Acá hace más frio")
            break;
        case "saturno":
            alert("Acá hace más frio")
            break;
        case "urano":
            alert("Acá hace más frio")
            break;
        case "neptuno":
            alert("Acá hace más frio")
            break;
        case "pluton":
            alert("Tristemente por convencion este ya no es un planeta :(");
            break;
        default:
            alert("ese no es un planeta valido.");
    }
}//FIN DE FUNCION