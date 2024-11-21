const tenisClasicos = 500000;
const tenisRunning= 800000;
const tenisBasketball = 1000000;
const clasicos = 1;
const running = 2; 
const basketball = 3;
let precioTenis
let encendido = true 



alert ("Bienvenido a Todo tenis");
alert ("Podras escoger una gran variedad de tenis");
 
let opcionSelecionada = parseInt(prompt(`que tenis deseas? \n${clasicos}. Clasicos = ${tenisClasicos} \n${running}. Running, = ${tenisRunning} \n${basketball}. Basketball = ${tenisBasketball}`));
 
if (encendido == true ){


 if (opcionSelecionada  === clasicos){
   precioTenis = tenisClasicos
 alert (`has escogido los tenis clasicos, con un precio de ${precioTenis}`);
 }else if (opcionSelecionada === running){
  precioTenis = tenisRunning
    alert( `has escogido los tenis running con un precio de ${precioTenis}`);
 }else if (opcionSelecionada === basketball){
  precioTenis = tenisBasketball
    alert (`has escogido los tenis basketball con un precio de ${precioTenis}`);
 } else {
    alert ("Error, caracter invalido") 
     
    
 } 
 let talla = parseInt(prompt(`que talla deseas? tenemos desde la talla 35 a la 44 `)) 

 if (talla <=  44 && talla >= 35 ){
    alert ("¡tenemos disponibilidad en la talla!")
 }else {
    alert ("lo sentimos no tenemos inventario en esta talla")
    
 } 

 let cantidadDeTenis = prompt(`cuantas unidades deseas llevar?, maximo puedes llevar 5`)

 if (cantidadDeTenis >= 1 && cantidadDeTenis <= 5 ){
    alert (`tenemos tu pedido! ${cantidadDeTenis} Pares de tenis`)

 }else {
    alert ("lo siento, ingresa un valor valido")
 }

  let preciototal = cantidadDeTenis * precioTenis;
  let descuento = 0.10;
  let totalConDescuento = preciototal * ( 1 - descuento);
 
  
  
  if (cantidadDeTenis >= 3){
   alert (`por compras mayores a 3 pares obtienes un descuento del 10%`)
   alert (`el total de tu pedido es ${totalConDescuento}`)
  }else {
   alert (`el total de tu pedido es ${preciototal}`)
}

 


}else {
    alert (" el sistema esta apagado")
}







