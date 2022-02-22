/*
Ramiro Sanchez DIV E
Parcial Ejercicio 1 2018
*/
function mostrar()
{
    //declaro variables
    var largo;
    var ancho;
    var perimetro;

    //pido largo y valido con while
    largo = prompt("Ingrese el largo del rectangulo");
    largo = parseInt(largo);
    while(isNaN(largo) == true || largo<0)
    {
        largo = prompt("ese no es un largo valido, ingreselo nuevamente");
        largo = parseInt(largo);
    }

    //pido ancho y valido con while
    ancho = prompt("Ingrese el ancho del rectangulo");
    ancho = parseInt(ancho);
    while(isNaN(ancho) == true || ancho<0)
    {
        ancho = prompt("ese no es un ancho valido, ingreselo nuevamente");
        ancho = parseInt(ancho);
    }

    if(ancho == largo)
    {
        alert("Ese es un cuadrado master");
    }
    
    perimetro = (2*largo) + (2*ancho);
    alert("El perimetro es " + perimetro);
}//FIN DE FUNCION