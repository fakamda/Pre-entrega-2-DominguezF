let carritoContainer = document.getElementById("carritoContainer")
let precioTotal = document.getElementById("carritoPrecio")
let precioDebito = document.getElementById("precioDebito")
let precioCredito = document.getElementById("precioCredito")
let precioMp = document.getElementById("precioMp")
let btnConfirmarTd = document.getElementById("btnConfirmarTd")
let btnConfirmarTc = document.getElementById("btnConfirmarTc")
let btnConfirmarMp = document.getElementById("btnConfirmarMp")



function calcularPrecio(arr){
    let total = arr.reduce((acc, productosCarrito)=> acc + (productosCarrito.precio * productosCarrito.cantidad), 0)
    total == 0 ? precioTotal.innerHTML = "" : precioTotal.innerHTML = `El total de la compra es <strong>$${total}</strong>`
    precioCredito == 0 ? precioCredito.innerHTML = "" : precioCredito.innerHTML = `$${total}`
    precioDebito == 0 ? precioDebito.innerHTML = "" : precioDebito.innerHTML = `$${total}`
    precioMp == 0 ? precioMp.innerHTML = "" : precioMp.innerHTML = `$${total}`
    
    return total
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

            Toastify({
                text: ` ${remeraEliminar.modelo} 
                Se ha eliminado del carrito`,
                duration: 3000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "bottom", 
                position: "right", 
                stopOnFocus: true, 
                style: {
                  background: "linear-gradient(90deg, rgba(213,114,15,1) 0%, rgba(149,0,28,1) 45%)",
                },
                onClick: function(){} 
              }).showToast();

       })
    })
}



function Carrito(array){
    carritoContainer.innerHTML = ""
    for(let remeras of array){
        let nuevoItem = document.createElement("div")
         nuevoItem.innerHTML = `
            <div class="carrito-item" id="productosCarrito${remeras.id}">
                <span class="position-absolute top-0 start--100 translate-middle badge rounded-pill bg-danger">
                    ${remeras.cantidad}
                </span>
                <div class="carrito-item-img">
                    <img src="../img/${remeras.imagen}" alt="${remeras.modelo}">
                </div>
                <div class="carrito-item-parrafo text-center">
                    <p class="cards__parrafo--titulo">${remeras.modelo}</p>
                    <P class="cards__parrafo">${remeras.color}</P>
                    <p class="cards__parrafo">$${remeras.precio * remeras.cantidad}</p>
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


// eventos

btnConfirmarTd.addEventListener("click", ()=>{

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Finalizar Compra',
        text: "Desea Finalizar la Compra?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar',
        reverseButtons: false
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )

          productosCarrito = []
          localStorage.removeItem("carrito")
          setTimeout(()=>{
            window.location.href = "productos.html"
        }, 3000)

        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Your imaginary file is safe :)',
            'error'
          )
        }
      })
})

btnConfirmarTc.addEventListener("click", ()=>{
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Finalizar Compra',
        text: "Desea Finalizar la Compra?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar',
        reverseButtons: false
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Su compra ha sido finalizada con Exito.',
          )
          
          productosCarrito = []
          localStorage.removeItem("carrito")
          setTimeout(()=>{
            window.location.href = "productos.html"
        }, 3000)

        } else if (
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelado',
            'Se ha cancelado el pago',
          )
        }
      })
})

btnConfirmarMp.addEventListener("click", ()=>{
    
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: false
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          
          productosCarrito = []
          localStorage.removeItem("carrito")
            setTimeout(()=>{
                window.location.href = "productos.html"
            }, 3000)

        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Your imaginary file is safe :)',
            'error'
          )
        }
      })
})