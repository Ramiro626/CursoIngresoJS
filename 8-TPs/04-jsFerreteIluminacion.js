/*4.
Ramiro Sanchez DIV E
TP Ejercicio 4
Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	//declaro variables
	    let lamparas;
        let precio;
        let descuento;
        let impuesto;
        var local;


	//inicializo variables 
		lamparas = document.getElementById("txtIdCantidad").value;
		local = document.getElementById("Marca").value;

	//convertir a Integer
		lamparas = parseInt(lamparas);

	//calculo descuento
	if (lamparas >= 6) 
	    {
            descuento = 0.5;
        }
    else if (lamparas == 5)
        {
            if (local == "ArgentinaLuz")
                {
                    descuento = 0.6;
                }
            else
                {
                    descuento = 0.7;
                }
        }
    else if (lamparas == 4)
        {
            if (local == "ArgentinaLuz" || local == "FelipeLamparas")
                {
                    descuento = 0.75;
                }
                else 
                {
                    descuento = 0.8;
                }
        }
    else if (lamparas == 3)
        {
            if(local == "ArgentinaLuz")
                {
                    descuento = 0.85;
                }
            else if(local == "FelipeLamparas")
                {
                    descuento = 0.9;
                }
            else
                {
                    descuento = 0.95;
                }
        }
       else 
        {
            descuento = 1;
        }

    //calculo precio, agrego ingreso bruto si necesario y display por document
        precio = (lamparas * 35) * descuento;
        
        if(precio > 120)
            {
                impuesto = precio / 100 * 10;
                precio = impuesto + precio;
                document.getElementById("txtIdprecioDescuento").value = precio;
                alert("IIBB Usted pago " + impuesto);
            }
        else
            {
                document.getElementById("txtIdprecioDescuento").value = precio;
            }
    
}

//txtIdCantidad
//Marca
//txtIdprecioDescuento