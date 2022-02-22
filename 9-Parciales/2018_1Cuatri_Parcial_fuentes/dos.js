/*
Ramiro Sanchez DIV E
Parcial Ejercicio 2 2018
*/
function mostrar()
{
    //declaro variables
    var nombre;
    var localidad;

    nombre = document.getElementById("elNombre").value;
    localidad = document.getElementById("laLocalidad").value;

    if (nombre == 0 && localidad == 0)
    {
        alert("Usted no ingreso nada.")
        nombre = document.getElementById("elNombre").value;
        localidad = document.getElementById("laLocalidad").value;
    }
    else if (nombre == 0 || isNaN(nombre) == false)
    {
        alert("su nombre es invalido, ingreselo nuevamente.");
        nombre = document.getElementById("elNombre").value;
    }
    else if (localidad == 0 || isNaN(localidad) == false)
    {
        alert("su localidad es invalida, ingresela nuevamente.");
        localidad = document.getElementById("laLocalidad").value;
    }
    else
    {
        alert("Usted es " + nombre + " y vive en " + localidad);
    }

}//FIN DE FUNCION
//elNombre
//laLocalidad