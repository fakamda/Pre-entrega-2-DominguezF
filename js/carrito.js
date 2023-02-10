let carritoContainer = document.getElementById("carritoContainer")
let precioTotal = document.getElementById("carritoPrecio")

function calcularPrecio(arr){
    let total = arr.reduce((acc, productosCarrito)=> acc + productosCarrito.precio, 0)
    total == 0 ? precioTotal.innerHTML = "" : precioTotal.innerHTML = `El total de la compra es <strong>$${total}</strong>`
}


function borrarCarrito2(array){
    array.forEach(productosCarrito => {
        let btnBorrar = document.getElementById(`btnBorrar${productosCarrito.id}`)
        btnBorrar.addEventListener("click", ()=>{
            let product = document.getElementById(`productosCarrito${productosCarrito.id}`)
            product.remove()
            let remeraEliminar = array.find((elem) => elem.id == productosCarrito.id)
            let index = array.indexOf(remeraEliminar)
            array.splice(index, 1)
            localStorage.setItem("carrito", JSON.stringify(array))
            calcularPrecio(array)
       })
    })
}



function Carrito(array){
    carritoContainer.innerHTML = ""
    for(let remeras of array){
        let nuevoItem = document.createElement("div")
         nuevoItem.innerHTML = `
            <div class="carrito-item" id="productosCarrito${remeras.id}">
                <div class="carrito-item-img">
                    <img src="../img/${remeras.imagen}" alt="${remeras.modelo}">
                </div>
                <div class="carrito-item-parrafo text-center">
                    <p class="cards__parrafo--titulo">${remeras.modelo}</p>
                    <P class="cards__parrafo">${remeras.color}</P>
                    <p class="cards__parrafo">$${remeras.precio}</p>
                </div>
                <div>
                <button id="btnBorrar${remeras.id}" type="button" class=" btn-danger borrar-carrito"><i class="fa-solid fa-xmark"></i></i></button>
                </div>
            </div>
         `
         carritoContainer.appendChild(nuevoItem)
    }
    borrarCarrito2(array)
    calcularPrecio(array)
}

let productosCarrito
if(localStorage.getItem("carrito")){
    productosCarrito =  JSON.parse(localStorage.getItem("carrito"))
}else{
   productosCarrito = []
}

Carrito(productosCarrito)

if(productosCarrito == 0){
    carritoContainer.innerHTML = `<h2 class="h2-carrito" > No hay productos en el carrito.</h2>`
}