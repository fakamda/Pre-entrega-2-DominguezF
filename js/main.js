
let ropa = document.getElementById("ropa")
let buscador = document.getElementById("buscador")
let coincidencia = document.getElementById("coincidencia")
let carritoContainer = document.getElementById("carritoContainer")
let botonCarrito = document.getElementById("botonCarrito")


function mostrarCatalogo(array){
    ropa.innerHTML = ""
    for(let remeras of array){
        let nuevaRopa = document.createElement("div")
        // nuevaRopa.classList.add("cards")
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
// --------------------------------------------------------------------------------------

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
    console.log(`El producto ${remeras.modelo} de color ${remeras.color} ha sido agregado. Vale $${remeras.precio}`)
    productosCarrito.push(remeras)
    console.log(productosCarrito)
    localStorage.setItem("carrito", JSON.stringify(productosCarrito))
    cargarCarrito(productosCarrito) //con esto le damos para que imprima en dom
}

function cargarCarrito(array){
    carritoContainer.innerHTML = ""
    for(let remeras of array){
        let nuevoItem = document.createElement("div")
        //  nuevoItem.classList.add("carrito-item")
         nuevoItem.innerHTML = `
            <div class="modal-item">
                <div class="modal-item-img">
                    <img src="../img/${remeras.imagen}" alt="${remeras.modelo}">
                </div>
                <div class="modal-item-parrafo">
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


//EVENTOS 

buscador.addEventListener("input", ()=>{
    console.log(buscador.value)
    buscarInfo(buscador.value, catalogoCompleto)

})

botonCarrito.addEventListener("click", ()=>{
    cargarCarrito(productosCarrito)
})