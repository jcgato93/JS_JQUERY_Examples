/*
Retirar los elementos / contenido
Para eliminar elementos y contenidos, existen principalmente dos métodos de jQuery:

remove() - Elimina el elemento seleccionado (y sus elementos secundarios)
empty() - Elimina los elementos secundarios del elemento seleccionado(contenido interno del elemento pero sin borrar el elemento)
*/

$("#div1").remove();

$("#div1").empty();



/*
Filtrar los elementos que ser eliminado
El jQuery remove() método también acepta un parámetro, que le permite filtrar los elementos que se deben eliminar.

El parámetro puede ser cualquiera de las sintaxis del selector de jQuery.

El siguiente ejemplo elimina todos los <p> elementos con class="test" :
*/
$("p").remove(".test");

//eliminar todos los elemtos con que contengan la clase CSS .test y .demo
$("p").remove(".test, .demo");