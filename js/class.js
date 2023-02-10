class remera {
    constructor(id,modelo,precio,color,imagen){
        this.id = id
        this.modelo = modelo
        this.precio = precio
        this.color = color
        this.imagen = imagen
    }
}

const remera1 = new remera (1,"Remera Custom El camino",3800,"Negro, Talles hasta XXL","remera1.webp")
const remera2 = new remera (2,"Remera Skate Steve Caballero",4000,"Negro, Talles hasta XXL","remera2.webp")
const remera3 = new remera (3,"Remera Vans Off The Wall",3700,"Varios Colores, Talles hasta XL","remera3.webp")
const remera4 = new remera (4,"Remera Skate Jooks",3500,"Blanco, Talles hasta XL","remera4.webp")
const remera5 = new remera (5,"Remera Tony Hawk",3400,"Varios Colores, Talles hasta XL","remera5.webp")
const remera6 = new remera (6,"Remera Skate n' Destroy",3000,"Vario Colores, Talles hasta XXL","remera6.webp")
const remera7 = new remera (7,"Remera Skate Board",3800,"Negro, Talles hasta XXL","remera7.webp")

const remera8 = new remera (8,"Remera Thrasher Gojira Rosa",4800,"Negro, Talles hasta XXL","remera8.webp")
const remera9 = new remera (9,"Remera Thrasher Gojira Original",4800,"Negro, Talles hasta XL","remera9.webp")
const remera10 = new remera (10,"Remera Thrasher Racoon",4000,"Varios Colores, Talles hasta XXL","remera10.webp")
const remera11 = new remera (11,"Remera Thrasher Magic",3900,"Negro, Talles hasta XL","remera11.webp")
const remera12 = new remera (12,"Remera Element Classic",4000,"Varios Colores, Talles hasta XL","remera12.webp")


const remera13 = new remera(13,"Buzo Hechicero",8000,"Negro, Talles hasta XXL","buzo1.webp")
const remera14 = new remera(14,"Hoodie Skate n' Destroy",7500,"Varios Colores, Talles hasta XXL","buzo2.webp")
const remera15 = new remera(15,"Hoodie Creature",7800,"Negro, Talles hasta XL","buzo3.webp")
const remera16 = new remera(16,"Buzo Thrasher Gojira Rojo",8800,"Negro, Blanco, Talles hasta XXL","buzo4.webp")
const remera17 = new remera(17,"Hoodie Santa Cruz Logo",9000,"Blanco, Talles hasta XL","buzo5.webp")
const remera18 = new remera(18,"Hoodie Sketchy Tank",10000,"Negro, Talles hasta XL","buzo6.webp")
const remera19 = new remera(19,"Hoodie Fire Spit",9800,"Blanco, Talles hasta XL","buzo7.webp")
const remera20 = new remera(20,"Hoodie Santa Cruz Clasico",9900,"Negro, Talles hasta XL","buzo8.webp")



let catalogoCompleto = []
if(localStorage.getItem("catalogoCompleto")){
    catalogoCompleto = JSON.parse(localStorage.getItem("catalogoCompleto"))
}else{
    catalogoCompleto.push(remera1,remera2,remera3,remera4,remera5,remera6,remera7,remera8,remera9,remera10,remera11,remera12,remera13,remera14,remera15,remera16,remera17,remera18,remera19,remera20)
    localStorage.setItem("catalogoCompleto", JSON.stringify(catalogoCompleto))
}
