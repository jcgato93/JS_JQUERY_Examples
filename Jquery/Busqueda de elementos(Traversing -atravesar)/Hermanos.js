/* 
Los hermanos comparten el mismo padre.

Con jQuery puedes atravesar de lado en el árbol DOM para encontrar hermanos de un elemento.

Atravesando lateralmente en el árbol DOM
Hay muchos métodos jQuery útiles para atravesar lateralmente en el árbol DOM:

siblings()
next()
nextAll()
nextUntil()
prev()
prevAll()
prevUntil()
*/



/*
jQuery siblings() Método
los siblings() método devuelve todos los elementos hermanos del elemento seleccionado.

El siguiente ejemplo devuelve todos los elementos hermanos de <h2>:
*/
$(document).ready(function(){
    $("h2").siblings().css({"color": "red", "border": "2px solid red"});//dara un borde rojo a todos lo hermanos del primer h2 que encuentre
});

//También puede usar un parámetro opcional para filtrar la búsqueda de hermanos.
$(document).ready(function(){
    $("h2").siblings("p");//todos los hermanos de <h2> que sean etiquetas <p>
});




/* jQuery next() Método
los next() método devuelve el siguiente elemento hermano del elemento seleccionado.
El siguiente ejemplo devuelve el siguiente hermano de <h2>:*/
$(document).ready(function(){
    $("h2").next();
});


/*
jQuery nextAll() Método
los nextAll() método devuelve todos los próximos elementos hermanos del elemento seleccionado.
El siguiente ejemplo devuelve todos los siguientes elementos hermanos de <h2>:
*/
$(document).ready(function(){
    $("h2").nextAll();
});


/*
jQuery nextUntil() Método
los nextUntil() método devuelve todos los próximos elementos hermanos entre dos argumentos dados.

El siguiente ejemplo devuelve todos los elementos hermanos entre <h2> y un <h6> elemento:
*/
$(document).ready(function(){
    $("h2").nextUntil("h6");
});