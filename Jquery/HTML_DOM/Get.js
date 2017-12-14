/*Una parte muy importante de jQuery es la posibilidad de manipular el DOM.
jQuery viene con un montón de métodos DOM relacionados que hacen que sea fácil de acceder y manipular los elementos y atributos. */



/*Obtener contenido - text(), html() , y val()
Tres, métodos sencillos, pero útiles para la manipulación DOM de jQuery son:

text() - Establece o devuelve el contenido de texto de los elementos seleccionados
html() - Establece o devuelve el contenido de los elementos seleccionados (incluyendo el formato HTML)
val() - Establece o devuelve el valor de los campos de formulario */


/*El siguiente ejemplo muestra cómo obtener el contenido con el jQuery text() y html() métodos: */
$("#btn1").click(function(){
    alert("Text: " + $("#test").text());
});
$("#btn2").click(function(){
    alert("HTML: " + $("#test").html());
});


//El siguiente ejemplo muestra cómo obtener el valor de un campo de entrada con el jQuery val() método:
$("#btn1").click(function(){
    alert("Value: " + $("#test").val());
});



/*Obtener Atributos - attr()
El jQuery attr() método se utiliza para obtener los valores de los atributos.
El siguiente ejemplo muestra cómo obtener el valor de la href atributo en un enlace: */
$("button").click(function(){
    alert($("#w3s").attr("href"));
});