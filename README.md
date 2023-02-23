// entrega de proyecto FINAL de Dominguez Facundo CoderHouse curso de JavaScript

// tener en cuenta antes de probar cualquier cosa de la pagina (por lo menos la parte de productos) borrar el LocalStorage, ya que el servidor de github no actualiza
esto automaticamente, por lo cual es muy importante hacer eso si alguna vez ya se seteo el storage!

// mi idea fue expandir mi principal proyecto del curso anterior y darle funcionalidad total, o por lo menos en su mayoria.

// las cards se crean dinamicamente tomando el archivo.json haciendo una llamada async, esto setea el LocalStorage para que pueda ser interpretado.
// las mismas tambien tienen una vista previa, si le damos click a la card directamente nos abre un modal en el cual podemos ver las dinstintas fotos del Modelo.
// Dentro de las mismas tambien se hace la carga al carrito mediante el id del obj. 
// los productos dentro del carrito solo se cargan una vez y se pueden modificar dentro del mismo, finalmente, si se resta la cantidad menor a 1 el producto se elimina.

// con la libreria se toastify y sweet alert se le dio estilo a los clasicos alert. 
//el carrito dentro de la pagina "Productos" al darle click a comrar te lleva a la pagina "carrito", en la cual esta preparado el mismo carrito seteado.
// dentro de esta pagina se muestra la cantidad de productos de 1 tipo en un badge.
// al darle a finalizar compra, esta despliega un modal en el cual se encuentran los form de pago tanto de tarjeta debito, credito y MP
// dentro del apartado, en C/U muestra el precio final del cual nosotros cargamos al carrito para comprar.

// aca quiero puntualizar algo: 
Se hizo una simulacion y no una validacion de formulario. Por un tema de tiempo lamentablemente no llegue a realizarla, pero tenia pensado tomar los .value de cada input
y validar las opciones correctas para que te dejara confirmar, de lo contrario no te deje.

//tambien el QR que se encuentra dentro del apartado MERCADO PAGO es una simulacion. pero tiene una sorpresa (porfavor escanear con qr ;)  )

//finalmente cuando confirmamos la compra, este ultimo con un setTimeOut,borra todos los items del carrito tanto del local storage como del dom, llevandote a la pagina
de productos nuevamente :) dando asi la finalizacion del ciclo del codigo.

// realmente no dispuse de mucho tiempo pero puse todo el esfuerzo que pude, espero que les guste! 

un saludo!

-Facundo Dominguez 
