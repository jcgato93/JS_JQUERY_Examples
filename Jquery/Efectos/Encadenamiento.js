/*
Método jQuery encadenamiento
Hasta ahora hemos estado escribiendo jQuery declaraciones de uno en uno (uno tras otro).
Sin embargo, existe una técnica llamada encadenamiento, que nos permite ejecutar varios comandos de jQuery, uno tras otro, en el mismo element(s) .
Consejo: De esta manera, los navegadores no tienen que encontrar el mismo element(s) más de una vez.
Para encadenar una acción, sólo tiene que anexar la acción de la acción anterior.


El siguiente ejemplo cadenas juntos los css(), slideUp() , y slideDown() métodos. El "p1" primer elemento cambia a rojo, luego se desliza hacia arriba, y luego se desliza hacia abajo: */

$("#p1").css("color", "red").slideUp(2000).slideDown(2000);