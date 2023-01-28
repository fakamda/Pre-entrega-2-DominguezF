


// -----------------------------------------------------------------------------------------


let ropa = document.getElementById("ropa")


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
    <button id="agregarBtn${remeras.id}" class="boton"> <a href="./carrito.html">Agregar al carrito</a> <i class="fa-solid fa-cart-shopping"></i></button>
</div> 
        `
    ropa.appendChild(nuevaRopa)

    let btnAgregar = document.getElementById(`agregarBtn${remeras.id}`)
    btnAgregar.addEventListener("click", ()=>{
       agregarCarrito(catalogoCompleto)
    })
    }
}
mostrarCatalogo(catalogoCompleto)
// --------------------------------------------------------------------------------------



let productosEnCarrito
if(localStorage.getItem("carrito")){
    productosEnCarrito =  JSON.parse(localStorage.getItem("carrito"))
}else{
    productosEnCarrito = []
}

//FUNCION PARA AGREGAR AL CARRITO
function agregarCarrito(remeras){
    console.log(`El producto ${remeras.modelo} de color ${remeras.color} ha sido agregado. Vale ${remeras.precio}`)
    productosEnCarrito.push(remeras)
    // console.log(productosEnCarrito)
    localStorage.setItem("carrito", JSON.stringify(productosEnCarrito))
    // cargarCarrito(productosEnCarrito) //con esto le damos para que imprima en dom
}

