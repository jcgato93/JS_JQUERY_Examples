/*
Manipulación de jQuery CSS
jQuery dispone de varios métodos para la manipulación de CSS. Vamos a ver los métodos siguientes:

addClass() - Añade una o más clases de los elementos seleccionados
removeClass() - Elimina una o más clases de los elementos seleccionados
toggleClass() - Cambia entre la adición / eliminación de las clases de los elementos seleccionados
css() - Establece o devuelve el atributo de estilo
*/



/*jQuery addClass() Método
El siguiente ejemplo muestra cómo agregar atributos de clase a los diferentes elementos. Por supuesto, puede seleccionar varios elementos, al agregar clases: */
$("button").click(function(){
    $("input[type=text],select").addClass("form-control");//se aplicara la clase a todos los text y a los select(dropDownList)
    $("#MainContent").addClass("container");
});



/*También puede especificar varias clases dentro de la addClass() método:*/ 
$("button").click(function(){
    $("#btnTest").addClass("btn btn-primary");
});



/*
jQuery removeClass() Método
El siguiente ejemplo muestra cómo eliminar un atributo de clase específica de diferentes elementos:
*/
$("button").click(function(){
    $("h1, p, strong").removeClass("class");
});



/*jQuery toggleClass() Método
El siguiente ejemplo mostrará cómo utilizar el jQuery toggleClass() método.
Este método se conmuta entre añadir / eliminar las clases de los elementos seleccionados:*/
$("button").click(function(){
    $("h1, h2, p").toggleClass("blue");
});




/* 
jQuery css() Método
Los css() conjuntos de método o devuelve una o más propiedades de estilo para los elementos seleccionados.

Devolver una propiedad CSS
Para devolver el valor de una propiedad CSS especificado, utilice la siguiente sintaxis:
*/
css("propertyname");

$("p").css("background-color"); // retorna el background-color de todas las etiquetas 'p'


/* 
Establecer una propiedad CSS
Para establecer una propiedad CSS especificado, utilice la siguiente sintaxis:
*/
css("propertyname","value");

$("p").css("background-color", "yellow");


//Establecer propiedades CSS Múltiples
//Para establecer múltiples propiedades CSS, utilice la siguiente sintaxis:
css({"propertyname":"value","propertyname":"value"});

$("p").css({"background-color": "yellow", "font-size": "200%"});