/*
Ramiro Sanchez DIV E
Parcial Ejercicio 3 2018
Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id.
*/
function mostrar()
{
    //declaro variables
    var precio;
    var descuento;
    var precioFinal;

    //pido precio y valido
    precio = prompt("Ingrese el precio");
    precio = parseInt(precio);
        while(isNaN(precio) == true)
        {
            precio = prompt("Error, ingrese el precio nuevamente.")
            precio = parseInt(precio);
        }

    //pido descuento y valido
    descuento = prompt("Ingrese el porcentaje de descuento (0 a 100)");
    descuento = parseInt(descuento);
        while(isNaN(descuento) == true || descuento>100 || descuento <0)
        {
            descuento = prompt("Error, ingrese el descuento nuevamente.")
            descuento = parseInt(descuento);
        }
    
    //calculo el precio final
    descuento = precio / 100 * descuento;
    precioFinal = precio - descuento;

    //display por caja de texto
    document.getElementById("elPrecioFinal").value =  precioFinal;
    
}//FIN DE FUNCION
//elPrecioFinal
