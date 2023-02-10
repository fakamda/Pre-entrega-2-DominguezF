
let ropa = document.getElementById("ropa")
let buscador = document.getElementById("buscador")
let coincidencia = document.getElementById("coincidencia")
let carritoContainer = document.getElementById("carritoContainer")
let botonCarrito = document.getElementById("botonCarrito")
let btnCarritoComprar = document.getElementById("btnCarritoComprar")
let precioTotal = document.getElementById("precioTotal")





function mostrarCatalogo(array){
    ropa.innerHTML = ""
    for(let remeras of array){
        let nuevaRopa = document.createElement("div")
        nuevaRopa.innerHTML = `
        <div id="${remeras.id}" class="cards">
            <div class="cards__img-container">
                <img src="../img/${remeras.imagen}" alt="${remeras.modelo}" class="cards__img"/>
            </div>
            <p class="cards__parrafo--titulo">${remeras.modelo}</p>
            <p class="cards__parrafo">${remeras.color}</p>
            <p class="cards__parrafo--precio">$${remeras.precio}</p>
            <button id="agregarBtn${remeras.id}" class="boton"> <a href="#">Agregar al carrito</a> <i class="fa-solid fa-cart-shopping"></i></button> 
        </div> 
        `
    ropa.appendChild(nuevaRopa)

    let btnAgregar = document.getElementById(`agregarBtn${remeras.id}`)
    btnAgregar.addEventListener("click", ()=>{
       agregarCarrito(remeras)
    })
    }
}
mostrarCatalogo(catalogoCompleto)


// FUNCION PARA BUSCAR
function buscarInfo(busqueda, array){
    let busquedaArr = array.filter(
        (ropa)=> ropa.modelo.toLowerCase().includes(busqueda.toLowerCase()) || ropa.color.toLowerCase().includes(busqueda.toLowerCase())
    )
    if(busquedaArr.lenght == 0){
        coincidencia.innerHTML = `<h3>No se encuentra coincidencia</h3>`
        mostrarCatalogo(busquedaArr)
    }else{
        coincidencia.innerHTML = ""
        mostrarCatalogo(busquedaArr)
    }
}

//FUNCION PARA AGREGAR AL CARRITO
function agregarCarrito(remeras){
    productosCarrito.push(remeras)
    localStorage.setItem("carrito", JSON.stringify(productosCarrito))
    cargarCarrito(productosCarrito)
}


function borrarCarrito(array){
    array.forEach(productosCarrito => {
        let btnBorrar = document.getElementById(`btnBorrar${productosCarrito.id}`)
        btnBorrar.addEventListener("click", ()=>{
            let cardProducto = document.getElementById(`productoCarrito${productosCarrito.id}`)
            cardProducto.remove()
            let remeraEliminar = array.find((elem) => elem.id == productosCarrito.id)
            let index = array.indexOf(remeraEliminar)
            array.splice(index, 1)
            localStorage.setItem("carrito", JSON.stringify(array))
            calcularPrecio(array)
       })
    })
}

function calcularPrecio(arr){
    let total = arr.reduce((acc, productosCarrito)=> acc + productosCarrito.precio, 0)
    total == 0 ? precioTotal.innerHTML = "<h6>No hay productos en el carrito.<h6>" : precioTotal.innerHTML = `El total de la compra es <strong>$${total}</strong>`
}



function cargarCarrito(array){
    carritoContainer.innerHTML = ""
    for(let remeras of array){
        let nuevoItem = document.createElement("div")
         nuevoItem.innerHTML = `
            <div class="modal-item" id="productoCarrito${remeras.id}">
                <div class="modal-item-img">
                    <img src="../img/${remeras.imagen}" alt="${remeras.modelo}">
                </div>
                <div class="modal-item-parrafo">
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

    borrarCarrito(array)
    calcularPrecio(array)
}


let productosCarrito
if(localStorage.getItem("carrito")){
    productosCarrito =  JSON.parse(localStorage.getItem("carrito"))
}else{
   productosCarrito = []
}


// EVENTOS

buscador.addEventListener("input", ()=>{
    console.log(buscador.value)
    buscarInfo(buscador.value, catalogoCompleto)

})

botonCarrito.addEventListener("click", ()=>{
    cargarCarrito(productosCarrito)
})

btnCarritoComprar.addEventListener("click",()=>{
    window.location.href = "carrito.html"
})
