class remera {
    constructor(id,modelo,precio,color,imagen){
        this.id = id
        this.modelo = modelo
        this.precio = precio
        this.color = color
        this.imagen = imagen
    }

    verInfo(){
        console.log(`La remera de modelo ${this.modelo} tiene un valor de ${this.precio} viene en color ${this.color}`)

    }
}

const remera1 = new remera (1,"Remera Custom El camino",3800,"negro","remera1.webp")
const remera2 = new remera (2,"Remera Skate Steve Caballero",4000,"negro","remera2.webp")
const remera3 = new remera (3,"Remera Vans Off The Wall",3700,"negro","remera3.webp")
const remera4 = new remera (4,"Remera Skate Jooks","3500","blanco","remera4.webp")
const remera5 = new remera (5,"Remera Tony Hawk",3400,"negro","remera5.webp")
const remera6 = new remera (6,"Remera Skate n' Destroy",3000,"naranja","remera6.webp")
const remera7 = new remera (7,"Remera Skate Board",3800,"negro","remera7.webp")

const remera8 = new remera(8,"Buzo Hechicero",8000,"negro","buzo1.webp")
const remera9 = new remera(9,"Hoodie Skate n' Destroy",7500,"negro","buzo2.webp")
const remera10 = new remera(10,"Hoodie Creature",7800,"negro","buzo3.webp")

// const catalogoCompleto = [remera1,remera2,remera3,remera4,remera5,remera6,remera7,remera8,remera9,remera10]

let catalogoCompleto = []
if(localStorage.getItem("catalogoCompleto")){
    catalogoCompleto = JSON.parse(localStorage.getItem("catalogoCompleto"))
}else{
    console.log("Seteando stock de libros")
    catalogoCompleto.push(remera1,remera2,remera3,remera4,remera5,remera6,remera7,remera8,remera9,remera10)
    localStorage.setItem("catalogoCompleto", JSON.stringify(catalogoCompleto))
}
