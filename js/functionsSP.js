// VER EL CATALOGO DE REMERAS

function verRemeras(array){
    console.log("Gracias por usar nuestra app web, te mostramos nuestra ropa a continuacion :) ")
    array.forEach((remera)=>{
        console.log(remera.id, remera.modelo, remera.precio, remera.color)
    
    })
    }

// VER EL CATALOGO DE BUZOS

function verBuzos(array){
    console.log("Gracias por usar nuestra app web, te mostramos nuestra ropa a continuacion :) ")
    array.forEach((buzo)=>{
        console.log(buzo.id, buzo.modelo, buzo.precio, buzo.color)
        
    })
    }
// BUSCAR POR MODELO

function buscarModelo(array){
    let modeloBuscado = prompt("ingrese el nombre del modelo que busca")
    let modeloEncontrado = array.find(
        (ropa)=> ropa.modelo.toLowerCase() == modeloBuscado.toLowerCase())
    if(modeloEncontrado == undefined){
            console.log(`El modelo ${modeloBuscado} no esta en stock`)
    }
    else{
        console.log(modeloEncontrado)
    }
}

// METODO DE PAGO


function pagarDebito(){
    do{
        respuesta = prompt("Quiere Abonar su compra con debito? ingrese 'SI' para confirmar")
        if(respuesta == "si"){
            alert("Su compra ha sido confirmada")
        }else{
            alert("Debe elegir un metodo de pago para continuar con la compra")
        }
    }while(respuesta.toUpperCase() != "SI")
}

function pagarCredito(){
    do{
        let cuotasTarjeta = parseInt(prompt("Ingrese la cantidad de cuotas en las que desea pagar")) 
        alert(`Su compra sera abonada en ${cuotasTarjeta} cuotas`)
        
        respuesta = prompt("Desea confirmar la compra? ingrese 'SI' ")
        if(respuesta == "si"){
            alert("Su compra ha sido confirmada")
            alert(`Gracias por usar nuestra tienda :)`)
        }else{
            alert("Debe elegir un metodo de pago para continuar con la compra")
        }
    }while(respuesta.toUpperCase() != "SI")
}

function pagarMp(){
    do{
        let cuotasMp = prompt("Ingrese la cantidad de cuotas en las que desea pagar")
        alert(`Su compra sera abonada en ${cuotasMp} cuotas`)

        respuesta = prompt("Desea confirmar la compra? ingrese 'SI' ")
        if(respuesta == "si"){
            alert("Su compra ha sido confirmada")
            alert(`Gracias por usar nuestra tienda :)`)
        }else{
            alert("Debe elegir un metodo de pago para continuar con la compra")
        }
    }while(respuesta.toUpperCase() != "SI")
}



// MENU DE PAGO

function comprar(){
    let precioIngresado
    do{
        let nombreIngresado = prompt("Ingrese su nombre")
        let cantidadProducto = parseInt(prompt(`Hola ${nombreIngresado} porfavor ingresa la cantidad de productos que quieras comprar`))
        if(!isNaN(cantidadProducto) && cantidadProducto != null && cantidadProducto != ""){
            let total = 0
            for(let i = 1; i <=cantidadProducto; i++){
                let precio = parseInt(prompt(`Ingrese el precio #${i}`))
                total = total + precio
            }
            precioIngresado = total
            alert(`El total sin iva es ${precioIngresado.toFixed(2)}`)
        } else {
            alert("porfavor ingrerar el valor numerico")
        }
        respuesta = prompt("Quiere seguir con la compra? ingresa 'SI' para calcular el iva")
    
    
    }while(respuesta.toUpperCase() != "SI")
    
    function sumaIva (precioIngresado){
        return (precioIngresado + (precioIngresado * 0.21))
    }
    
    let precioIva = sumaIva(precioIngresado)
    
    if(!isNaN(precioIngresado) && precioIngresado != null && precioIngresado != ""){
    alert(`El precio con iva es de: ${precioIva.toFixed(2)}`) 
    }else{
        alert("porfavor ingrerar el valor numerico")
    }

    let cancelar = false 
    do{
            let opcion = parseInt(prompt(`
            1 - Pagar con Debito
            2 - Pagar en Cuotas
            3 - Pagar con Mercado Pago 
            0 - Salir `))
            
            
            switch(opcion){
                case 1:
                    pagarDebito()
                break
                case 2:
                    pagarCredito()
                break
                case 3:
                    pagarMp()
                break
                case 0:
                    console.log("gracias por utilizar nuestra app")
                    cancelar = true
                    return cancelar
                break
                default:
                    console.log(`${opcion} no es válida para ordenar`)
                break    
            }
    }while(!cancelar)

    }


    // MENU PRINCIPAL

function menu(){
    let salirMenu = false
    do{
        salirMenu = preguntarOpcion(salirMenu)
    }while(!salirMenu)
} 

function preguntarOpcion(salir){
    let opcionIngresada = parseInt(prompt(`Ingrese la opción deseada
        1 - Ver nuestras Remeras:
        2 - Ver nuestros Buzos:
        3 - Buscar por modelo:
        4 - Comprar Producto
        0 - Salir del menu`))
    
        switch(opcionIngresada){
            case 1:
                verRemeras(catalogoCompleto)
            break
            case 2:
                verBuzos(catalogoCompleto)
            break
            case 3:
                buscarModelo(catalogoCompleto)
            break
            case 4:
                comprar()
            break
            case 0:
                console.log("gracias por elegirnos :)")
                salir = true
                return salir
            break
            default:
                console.log("Ingrese una opción correcta")
            break
        }
}

// menu()