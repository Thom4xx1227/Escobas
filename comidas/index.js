let hamburguesa = 1;
let pizza = 2;
let comidaChina = 3;
let domicilio = 5000;

alert (`Bienvenido a todo domicilios`)
alert (`podras escoger entre 3 restaurantes que tengan tu comida favorita`)

let RestauranteHamburguesa
let RestaurantePizza
let RestauranteComidaChina

let opcionSeleccionadaRestaurant = parseInt(prompt(`¿que tipo de comida deseas comer? 
    ${hamburguesa} Hamburguesas 
    ${pizza} Pizzas 
    ${comidaChina} Comida China`));

    let rHamburguesaOp1 = "Hamburguesa Sencilla";
    let rHamburguesaOp2 = "Hamburguesa Sencilla en combo";
    let rHamburguesaOp3 = "Hamburguesa Doble Carne";
    let rHamburguesaOp4 = "Hamburguesa Doble Carne en combo";
    let rhop1price = 10000;
    let rhop2price = 15000;
    let rhop3price = 20000;
    let rhop4price = 25000;
    let rh1 = 1;
    let rh2 = 2;
    let rh3 = 3;
    let rh4 = 4;
    let precioHamburguesa;

    let rPizzaOp1 = "Hawaiana"
    let rPizzaOp2 = "Pollo con champiñones"
    let rPizzaOp3 = "Carnes"
    let rPizzaOp4 = "Peperoni"
    let rPop1price = 5000
    let rPop2price = 5000 
    let rPop3price = 7000
    let rPop4price = 5500
    let rP1 = 1;
    let rP2 = 2;
    let rP3 = 3;
    let rP4 = 4;
    let precioPizza;

    let rComidaop1 = "Sushi"
    let rComidaop2 = "Arroz Chino"
    let rComidaop3 = "Sopa China"
    let rcOp1price = 50000
    let rcOp2price = 26000
    let rcOp3price = 5000
    let rc1 = 1
    let rc2 = 2
    let rc3 = 3
    let precioComidaChina;
    
    let totalhamburguesa;
    let totalPizza;
    let totalComidaChina;
    let encendido = true  

    let pagodebito = 1;
    let pagocredito = 2;
    let pagoefecitvo = 3;


    if (encendido = true){
    if (opcionSeleccionadaRestaurant === hamburguesa){
        let hamburguesaSelecionada = parseInt(prompt(`Has seleccionado un restaurante de hamburguesas, ¿cual deseas? 
        ${rh1} = ${rHamburguesaOp1} con un precio de ${rhop1price} 
        ${rh2} = ${rHamburguesaOp2} con un precio de ${rhop2price}
        ${rh3} = ${rHamburguesaOp3} con un precio de ${rhop3price}
        ${rh4} = ${rHamburguesaOp4} con un precio de ${rhop4price}`));
       
        let cantidadHamburguesas = parseInt(prompt(`¿cuantas unidades deseas llevar?`));
        let subh

        if (hamburguesaSelecionada === rh1) {
            precioHamburguesa = rhop1price
            subh = rhop1price * cantidadHamburguesas
         
         } else if (hamburguesaSelecionada === rh2){
             precioHamburguesa = rhop2price
             subh = rhop2price * cantidadHamburguesas
          
         } else if (hamburguesaSelecionada === rh3){
            precioHamburguesa = rhop3price
            subh = rhop3price * cantidadHamburguesas
         
         }else if (hamburguesaSelecionada === rh4){
            precioHamburguesa = rhop4price
            subh = rhop4price * cantidadHamburguesas  
         
         } else {
            alert  ("Seleccione una opcion valida")
         }
         if (subh < 25000){
            alert (`no se pudo completar el pedido, debe de ser mayor a 25000`)
         }else {
            alert ("¡pedido tomado!")
         }
         totalhamburguesa = domicilio + subh
        
        } else if (opcionSeleccionadaRestaurant === pizza){
            let pizzaSeleccionada = parseInt(prompt(`Has seleccionado un restaurante de pizzas, ¿cual deseas? 
                ${rP1} = ${rPizzaOp1} con un precio de ${rPop1price} 
                ${rP2} = ${rPizzaOp2} con un precio de ${rPop2price}
                ${rP3} = ${rPizzaOp3} con un precio de ${rPop3price}
                ${rP4} = ${rPizzaOp4} con un precio de ${rPop4price}`));
                let cantidadPizzas = parseInt(prompt("¿cuantas unidades deseas llevar?"));
        
                 let subp = 0;
                 
                 if (pizzaSeleccionada === rP1){
                 precioPizza = rPop1price;
                 subp = cantidadPizzas * rPop1price;
               
                 } else if (pizzaSeleccionada === rP2){
                 precioPizza = rPop2price;
                 subp = cantidadPizzas * rPop2price;
                
                }else if  (pizzaSeleccionada === rP3){
                 precioPizza = rPop3price;
                 subp = cantidadPizzas * rPop3price;
                
                }else if (pizzaSeleccionada === rP4){
                    precioPizza = rPop4price;
                 subp = cantidadPizzas * rPop4price;
                
                }else {
                    alert ("Seleccione una opcion valida")
                }
                if (subp < 25000){
                    alert("No se pudo completar el prdido, debe de ser mayor a $25000")
                } else {
                    alert ("¡Pedido tomado! ")
                }
                 totalPizza = domicilio + subp
        
            } else if (opcionSeleccionadaRestaurant === comidaChina){
             let comidaChinaSeleccionada = parseInt (prompt( ` has seleccionado un restaurante de comida china, ¿que deseas?
                ${rc1} = ${rComidaop1} con un precio de ${rcOp1price}
                ${rc2} = ${rComidaop2} con un precio de ${rcOp2price}
                ${rc3} = ${rComidaop3} con un precio de ${rcOp3price}`));

                let cantidadComidaChina = parseInt(prompt(`¿Cuantas unidades deseas llevar?`))
                let subcc   
                
                if (comidaChinaSeleccionada === rc1){
                    precioComidaChina = rcOp1price
                    subcc = rcOp1price * cantidadComidaChina
                } else if (comidaChinaSeleccionada === rc2){
                    precioComidaChina = rcOp2price
                    subcc = rcOp2price * cantidadComidaChina
                }else if (comidaChinaSeleccionada == rc3){
                    precioComidaChina = rcOp3price
                    subcc = rcOp3price * cantidadComidaChina
                } else {
                    alert ("Seleccione una opcion valida")
                }
                if (subcc < 25000){
                    alert ("no se pudo completar el pedido, debe de ser mayor a $25000")
                }else {
                    alert ("¡Pedido tomado!")
                }
                totalComidaChina = domicilio + subcc
                
 } else {
    alert ("Selecciona un restaurante valido")
    }


    alert("Resumen de tu compra:");

    if (totalhamburguesa > 0) {
        alert(`Has seleccionado el restaurante de hamburguesas, el total de tu pedido es: $${totalhamburguesa}`);
    } else if (totalPizza > 0) {
        alert(`Has seleccionado el restaurante de pizzas, total de tu pedido es: $${totalPizza}`);
    } else if (totalComidaChina > 0) {
        alert(`Has seleccionado el restaurante de comida china, total de tu pedido es: $${totalComidaChina}`);
    } else {
        alert ("No compraste nada")
    }

   let metodoDePago = prompt(`¿Como deseas pagar el total de tu pedido?
    ${pagodebito} = Pago tarjeta debito
    ${pagocredito} = Pago Tarjeta cretido
    ${pagoefecitvo} = Pago Efectivo`)

    alert (`excelente, todo esta listo, el delivery estara en tu puerta en un plazo de 45 minutos a 1 hora`);
















}