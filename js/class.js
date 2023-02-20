class remera {
    constructor(id,modelo,precio,color,imagen, modal1, modal2){
        this.id = id
        this.modelo = modelo
        this.precio = precio
        this.color = color
        this.imagen = imagen
        this.cantidad = 1
        this.modal1 = modal1
        this.modal2 = modal2
    }
    plusOne(){
        this.cantidad = this.cantidad + 1
        return this.cantidad
    }
    minusOne(){
        this.cantidad = this.cantidad - 1
        return this.cantidad
    }
}


let catalogoCompleto = []

const cargarProductos = async () => {
    const res = await fetch("../productos.json")
    const data = await res.json()
    for(let producto of data){
        let nuevoProducto = new remera(producto.id, producto.modelo, producto.precio, producto.color, producto.imagen, producto.modal1, producto.modal2)
        catalogoCompleto.push(nuevoProducto)
    }
    localStorage.setItem("catalogoCompleto", JSON.stringify(catalogoCompleto))
}


if(localStorage.getItem("catalogoCompleto")){
    // catalogoCompleto = JSON.parse(localStorage.getItem("catalogoCompleto"))
    for(let producto of JSON.parse(localStorage.getItem("catalogoCompleto"))){
        let nuevoProducto = new remera(producto.id, producto.modelo, producto.precio, producto.color, producto.imagen, producto.modal1, producto.modal2)
        catalogoCompleto.push(nuevoProducto)
    }
    // console.log(catalogoCompleto)
}else{
    cargarProductos()
    localStorage.setItem("catalogoCompleto", JSON.stringify(catalogoCompleto))
}
