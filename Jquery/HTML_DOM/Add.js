/*
Añadir nuevo contenido HTML
Vamos a ver cuatro métodos de jQuery que se utilizan para añadir nuevos contenidos:

append() - contenido de inserciones en el extremo de los elementos seleccionados
prepend() - contenido de inserciones en el comienzo de los elementos seleccionados
after() - Inserta el contenido después de los elementos seleccionados
before() - Inserta el contenido antes de que los elementos seleccionad
*/

$("p").append("Some appended text.");

$("p").prepend("Some prepended text.");


/*
Añadir varios nuevos elementos con append() y prepend()
En los dos ejemplos anteriores, sólo hemos insertado un texto / HTML al principio / final de los elementos HTML seleccionados.

Sin embargo, tanto en el append() y prepend() métodos pueden tomar un número infinito de nuevos elementos como parámetros. Los nuevos elementos se pueden generar con el texto / HTML (como lo hemos hecho en los ejemplos anteriores), con jQuery, o con código JavaScript y elementos DOM.

En el siguiente ejemplo, creamos varios elementos nuevos. Los elementos se crean con el texto / HTML, jQuery y JavaScript / DOM. A continuación, añadimos los nuevos elementos al texto con el append() método (esto habría trabajado para prepend() también):
*/
function appendText() {
    var txt1 = "<p>Text.</p>";               // Create element with HTML  
    var txt2 = $("<p></p>").text("Text.");   // Create with jQuery
    var txt3 = document.createElement("p");  // Create with DOM
    txt3.innerHTML = "Text.";
    $("p").append(txt1, txt2, txt3);         // Append the new elements 
}



/*
jQuery after() y before() Métodos
El jQuery after() método inserta contenido después de los elementos HTML seleccionados.
El jQuery before() método inserta contenido antes de los elementos HTML seleccionados.
*/
$("img").after("Some text after");

$("img").before("Some text before");
