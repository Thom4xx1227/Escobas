const escobaduraS = 1;
const escobaduraN = 2;
const escobasuaveS = 3;
const escobasuaveN = 4;
const cepilloS = 5;
const cepilloN = 6;
const escobaDuraSintetica = 8000;
const escobaDuraNatural = 10000;
const escobaSuaveSintetica = 8000;
const escobaSuaveNatural = 10000;
const cepilloSintetica = 12000;
const cepilloNatural = 15000;
const gancholargoPrecio = 2000;
const ganchoEnPuntaPrecio = 500;
const escobaDuraSinteticaNombre = "Escoba Dura Sintetica"
const escobaDuraNaturalNombre = "Escoba Dura Natural"
const escobaSuaveSinteticaNombre = "Escoba Suave Sintetica"
const escobaSuaveNaturalNombre = "Escoba Suave Natural"
const cepilloNaturalNombre = "Cepillo Natural"
const cepilloSinteticaNombre = "Cepillo Sintetica"
let precioescoba  
let preciogancho




alert("Bienvenido a Solo Escobas");
alert("Tenemos escobas de las mejores variedades y calidades");

let opcionSeleccionadaEscoba = parseInt(prompt(`¿Qué tipo de escoba deseas? \n ${escobaduraS} Escoba Dura Sintetica = ${escobaDuraSintetica} \n ${escobaduraN} Escoba Dura Natural = ${escobaDuraNatural} \n ${escobasuaveS} Escoba Suave Sintetica = ${escobaSuaveSintetica} \n ${escobasuaveN} Escoba Suave Natural = ${escobaSuaveNatural} \n ${cepilloS} Cepillo Sintetica= ${cepilloSintetica} \n ${cepilloN} Cepillo Natural = ${cepilloNatural}`));


if (opcionSeleccionadaEscoba === escobaduraS){
    
    opcionSeleccionadaEscoba = escobaDuraSinteticaNombre
    
    precioescoba = escobaDuraSintetica
    
    alert (`has seleccionado una Escoba Dura Sintetica con un precio de ${escobaDuraSintetica}`);
} else if (opcionSeleccionadaEscoba === escobaduraN){
    
    opcionSeleccionadaEscoba = escobaDuraNaturalNombre
    
    precioescoba = escobaDuraNatural
    
    alert (`has seleccionado una Escoba Dura Natural con un precio de ${escobaDuraNatural}`);
} else if (opcionSeleccionadaEscoba === escobasuaveS){
    
    opcionSeleccionadaEscoba = escobaSuaveSinteticaNombre
    
    precioescoba = escobaSuaveSintetica
    
    alert (`has seleccionado una Escoba Suave Sintetica con un precio de ${escobaSuaveSintetica}`);
} else if (opcionSeleccionadaEscoba === escobasuaveN){
    
    opcionSeleccionadaEscoba = escobaSuaveNaturalNombre
    
    precioescoba = escobaSuaveNatural
    
    alert (`has escogido una Escoba Suave Natural con un precio de ${escobaSuaveNatural}`);
} else if (opcionSeleccionadaEscoba === cepilloN){
    
    opcionSeleccionadaEscoba = cepilloNaturalNombre
   
    precioescoba =  cepilloNatural
   
    alert (`has escogido un Cepillo Natural con un precio de ${cepilloNatural}`);
} else if (opcionSeleccionadaEscoba === cepilloS){
   
    opcionSeleccionadaEscoba = cepilloSinteticaNombre
    
    precioescoba = cepilloSintetica
    
    alert (`has escogido un Cepillo sintetica con un precio de ${cepilloSintetica}`);
} else {
    
    alert ("ingresa una opcion valida");

};


    let ganchoEnPunta = 1;
    let gancholargo = 2;
    let no = 3;
    let ganchoEnPuntaNombre = "gancho en punta"
    let gancholargoNombre = "gancho largo"
    let noNombre = "sin adicional"
    
    let opcionGancho = parseInt(prompt(`deseas agregar un gancho? \n ${ganchoEnPunta} Gancho En Punta = ${ganchoEnPuntaPrecio} \n ${gancholargo} Gancho Largo = ${gancholargoPrecio} \n ${no} No deseas Gancho`));
  
    if (opcionGancho === ganchoEnPunta){

        preciogancho = ganchoEnPuntaPrecio
        opcionGancho = ganchoEnPuntaNombre

    
    alert (`has escogido ${opcionSeleccionadaEscoba} con el adicional de Gancho en Punta`)
   }else if (opcionGancho === gancholargo){

         preciogancho = gancholargoPrecio
         opcionGancho = gancholargoNombre
   
    alert (`has escogido ${opcionSeleccionadaEscoba} con el adicional de Gancho Largo`)
   }else if (opcionGancho === no){
        
             opcionGancho = noNombre
             preciogancho = 0
   
    alert (`No llevas ningun gancho adicional`)
   }else {
   
    alert (`ingresa un valor valido`)
   
   }



 let cantidadEscobas = parseInt(prompt(`¿Cuantas unidades deseas llevar?`))

 if (cantidadEscobas >= 3 && cantidadEscobas <= 30 ){
    alert (`estas llevando ${cantidadEscobas} ${opcionSeleccionadaEscoba} con el adicional de ${opcionGancho}`)
 } else {
    alert ("ingresa cantidades entre 3 y 30")
 } 

 let precioFinalEscoba = cantidadEscobas * precioescoba
 let precioFinalAdicional = cantidadEscobas * preciogancho
 let precioFinal = precioFinalAdicional + precioFinalEscoba

 alert (`el precio a pagar es ${precioFinal}`)

