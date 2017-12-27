/* 
Un descendiente es un hijo, un nieto, un bisnieto, etc.

Con jQuery puedes recorrer el árbol DOM para encontrar descendientes de un elemento.

Atravesando el árbol DOM
Dos métodos jQuery útiles para atravesar el árbol DOM son:

children()
find()
*/



/*
jQuery children() Método
los children() método devuelve todos los hijos directos del elemento seleccionado.

Este método solo atraviesa un único nivel en el árbol DOM.
*/
$(document).ready(function(){
    $("div").children();
});


$(document).ready(function(){
    $("div").children("p.first");
});



/* 
jQuery find() Método
los find() método devuelve elementos descendientes del elemento seleccionado, hasta el último descendiente.

El siguiente ejemplo devuelve todo <span> elementos que son descendientes de <div>:
*/
$(document).ready(function(){
    $("div").find("span");
});

//El siguiente ejemplo devuelve todos los descendientes de <div>:
$(document).ready(function(){
    $("div").find("*");
});