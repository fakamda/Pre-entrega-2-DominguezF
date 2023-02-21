
let ropa = document.getElementById("ropa")
let buscador = document.getElementById("buscador")
let coincidencia = document.getElementById("coincidencia")
let carritoContainer = document.getElementById("carritoContainer")
let botonCarrito = document.getElementById("botonCarrito")
let btnCarritoComprar = document.getElementById("btnCarritoComprar")
let precioTotal = document.getElementById("precioTotal")
let modalBody = document.getElementById("modalBody")


function mostrarCatalogo(array){
    ropa.innerHTML = ""
    for(let remeras of array){
        let nuevaRopa = document.createElement("div")
        nuevaRopa.innerHTML = `
        <div id="${remeras.id}" class="cards">
            <div class="cards__img-container">
                <img src="../img/${remeras.imagen}" alt="${remeras.modelo}" class="cards__img" id="imagen${remeras.id}" data-bs-toggle="modal" data-bs-target="#exampleModal2" aria-pressed="false" autocomplete="off"/>
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

    // BOTON PARA ABRIR MODAL DESPLEGANDO LA IMG
    let abrirModal = document.getElementById(`imagen${remeras.id}`)
    abrirModal.addEventListener("click", ()=>{

      modalBody.innerHTML = ""
        let nuevoModal = document.createElement("div")

        nuevoModal.innerHTML = `
        <div id="carruselContainer">
        <div id="carouselExampleControls" class="carousel carousel-dark slide carrusel-card" data-bs-ride="carousel">
          <div class="carousel-inner marco-carrusel">
            <div class="carousel-item active">
              <img src="../img/${remeras.modal1}" class="d-block w-150" alt="..." id="modal${remeras.id}">
            </div>
            <div class="carousel-item">
              <img src="../img/${remeras.modal2}" class="d-block w-150" alt="..." id="modal${remeras.id}">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
        `
        modalBody.appendChild(nuevoModal)

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

    let newProduct = productosCarrito.find((element)=> element.id == remeras.id)

    if(newProduct == undefined){
        productosCarrito.push(remeras)
        localStorage.setItem("carrito", JSON.stringify(productosCarrito))
        cargarCarrito(productosCarrito)
        
        Toastify({
            text: ` ${remeras.modelo} 
            Ha sido agregado al carrito`,
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "bottom", 
            position: "right", 
            stopOnFocus: true, 
            style: {
              background: "linear-gradient(90deg, rgba(89,96,152,1) 11%, rgba(63,32,71,1) 100%)",
            },
            onClick: function(){} 
          }).showToast();


    }else{
        Toastify({
            text: ` ${remeras.modelo} 
            Ya existe en el carrito`,
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "bottom", 
            position: "right", 
            stopOnFocus: true, 
            style: {
              background: "linear-gradient(90deg, rgba(89,96,152,1) 11%, rgba(63,32,71,1) 100%)",
            },
            onClick: function(){} 
          }).showToast();
    }
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

       document.getElementById(`btnPlus${productosCarrito.id}`).addEventListener("click", ()=>{
        productosCarrito.plusOne()
        localStorage.setItem("carrito", JSON.stringify(array))
        cargarCarrito(array)
       })

       document.getElementById(`btnMinus${productosCarrito.id}`).addEventListener("click", ()=>{
        let borrar = productosCarrito.minusOne()
        localStorage.setItem("carrito", JSON.stringify(array))

        if(borrar < 1){
            let cardProducto = document.getElementById(`productoCarrito${productosCarrito.id}`)
            cardProducto.remove()
            let remeraEliminar = array.find((elem) => elem.id == productosCarrito.id)
            let index = array.indexOf(remeraEliminar)
            array.splice(index, 1)
            localStorage.setItem("carrito", JSON.stringify(array))
            calcularPrecio(array)
        }else{
            localStorage.setItem("carrito", JSON.stringify(array))
        }

        cargarCarrito(array)
       })

    })
}

function calcularPrecio(arr){
    let total = arr.reduce((acc, productosCarrito)=> acc + (productosCarrito.precio * productosCarrito.cantidad), 0)
    total == 0 ? precioTotal.innerHTML = "<h6>No hay productos en el carrito.<h6>" : precioTotal.innerHTML = `El total de la compra es <strong>$${total}</strong>`
    
    return total
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
                    <p class="cards__parrafo">Sub-Total: $${remeras.precio * remeras.cantidad}</p>
                    <div class="counter">
                    <i id="btnMinus${remeras.id}" class="fa-solid fa-minus"></i>
                        <span class="quantity">${remeras.cantidad}</span>
                    <i id="btnPlus${remeras.id}" class="fa-solid fa-plus"></i>
                    </div>
                </div>
                <div>
                <button id="btnBorrar${remeras.id}" type="button" class="btn-danger borrar-carrito"><i class="fa-solid fa-xmark"></i></i></button>
                </div>
            </div>
         `
         carritoContainer.appendChild(nuevoItem)
    }

    borrarCarrito(array)
    calcularPrecio(array)
}



let productosCarrito = []

if(localStorage.getItem("carrito")){
    for(let producto of JSON.parse(localStorage.getItem("carrito"))){
        let cantidadStorage = producto.cantidad
        let newCarrito = new remera(producto.id, producto.modelo, producto.precio, producto.color, producto.imagen)
        newCarrito.cantidad = cantidadStorage
        productosCarrito.push(newCarrito)
    }
    
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

