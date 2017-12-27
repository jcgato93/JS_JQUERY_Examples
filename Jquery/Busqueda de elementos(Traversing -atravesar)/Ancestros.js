/*
Un antepasado es un padre, abuelo, bisabuelo, etc.

Con jQuery puedes recorrer el árbol DOM para encontrar ancestros de un elemento.

travesando el árbol DOM
Tres métodos jQuery útiles para atravesar el árbol DOM son:

parent()
parents()
parentsUntil()
*/ 


/*jQuery parent() Método
los parent() método devuelve el elemento primario directo del elemento seleccionado.
Este método solo atraviesa un único nivel en el árbol DOM.*/
$(document).ready(function(){
    $("span").parent();
});


/*jQuery parents() Método
los parents() método devuelve todos los elementos antecesores del elemento seleccionado, todo el camino hasta el elemento raíz del documento (<html>).
 */
$(document).ready(function(){
    $("span").parents();
});
/*ambién puede usar un parámetro opcional para filtrar la búsqueda de antepasados.
El siguiente ejemplo devuelve todos los antepasados ​​de todos <span> elementos que son <ul> elementos: */
$(document).ready(function(){
    $("span").parents("ul");
});



/*
jQuery parentsUntil() Método
los parentsUntil() método devuelve todos los elementos antecesores entre dos argumentos dados.
El siguiente ejemplo devuelve todos los elementos antecesores entre <span> y un <div> elemento:
 */
$(document).ready(function(){
    $("span").parentsUntil("div");
});