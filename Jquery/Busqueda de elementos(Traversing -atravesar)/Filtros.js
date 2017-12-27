/*
Reducir la búsqueda de elementos
Los tres métodos de filtrado más básicos son first(), last() y eq(), que le permiten seleccionar un elemento específico según su posición en un grupo de elementos.

Otros métodos de filtrado, como filter() y not() le permiten seleccionar elementos que coinciden, o no coinciden, con ciertos criterios.
*/



/* 
jQuery first() Método
los first() método devuelve el primer elemento de los elementos seleccionados.

El siguiente ejemplo selecciona el primero <p> elemento dentro de la primera <div> elemento:
*/
$(document).ready(function(){
    $("div p").first();
});


/*
jQuery last() Método
los last() método devuelve el último elemento de los elementos seleccionados.

El siguiente ejemplo selecciona el último <p> elemento dentro de la última <div> elemento:
*/
$(document).ready(function(){
    $("div p").last();
});




/*
jQuery eq() método
los eq() método devuelve un elemento con un número de índice específico de los elementos seleccionados.

Los números de índice comienzan en 0, por lo que el primer elemento tendrá el número de índice 0 y no 1. El siguiente ejemplo selecciona el segundo <p> elemento (número de índice 1):
*/
$(document).ready(function(){
    $("p").eq(1);
});



/*
jQuery filter() Método
los filter()método le permite especificar un criterio. Los elementos que no coinciden con los criterios se eliminan de la selección y se devolverán los que coincidan.

El siguiente ejemplo devuelve todo <p> elementos con nombre de clase "intro":
*/
$(document).ready(function(){
    $("p").filter(".intro");
});




/*
jQuery not() Método
los not() método devuelve todos los elementos que no coinciden con los criterios.

Consejo: elnot() método es lo opuesto a filter().

El siguiente ejemplo devuelve todo <p> elementos que no tienen nombre de clase "intro":
*/
$(document).ready(function(){
    $("p").not(".intro");
});
