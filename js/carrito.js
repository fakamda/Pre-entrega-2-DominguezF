let carritoContainer = document.getElementById("carritoContainer")



function Carrito(array){
    carritoContainer.innerHTML = ""
    for(let remeras of array){
        let nuevoItem = document.createElement("div")
         nuevoItem.innerHTML = `
            <div class="carrito-item">
                <div class="carrito-item-img">
                    <img src="../img/${remeras.imagen}" alt="${remeras.modelo}">
                </div>
                <div class="carrito-item-parrafo text-center">
                    <p class="cards__parrafo--titulo">${remeras.modelo}</p>
                    <P class="cards__parrafo">${remeras.color}</P>
                    <p class="cards__parrafo">$${remeras.precio}</p>
                </div>
            </div>
         `
         carritoContainer.appendChild(nuevoItem)
    }
}

let productosCarrito
if(localStorage.getItem("carrito")){
    productosCarrito =  JSON.parse(localStorage.getItem("carrito"))
}else{
   productosCarrito = []
}

Carrito(productosCarrito)

if(productosCarrito == 0){
    carritoContainer.innerHTML = `<h2 style="color:#111; text-shadow:none; font-size:30px;" > No hay productos en el carrito</h2>`
}