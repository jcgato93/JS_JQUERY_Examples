/* 
Contenido Set - text(), html() , y val()
Vamos a utilizar los mismos tres métodos de la página anterior paraestablecer el contenido:

text() - Establece o devuelve el contenido de texto de los elementos seleccionados
html() - Establece o devuelve el contenido de los elementos seleccionados (incluyendo el formato HTML)
val() - Establece o devuelve el valor de los campos de formulario
El siguiente ejemplo muestra cómo establecer el contenido con el jQuery text(), html() , y val() métodos:
*/
$("#btn1").click(function(){
    $("#test1").text("Hello world!");
});
$("#btn2").click(function(){
    $("#test2").html("<b>Hello world!</b>");
});
$("#btn3").click(function(){
    $("#test3").val("Dolly Duck");
});


/* 
Una llamada de retorno para text(), html() , y val()
Todos los tres métodos anteriores jQuery: text(), html() , y val() , también vienen con una función de devolución de llamada. La función de devolución de llamada tiene dos parámetros: el índice del elemento actual de la lista de elementos seleccionados y el valor original (antigua). A continuación, retornar la cadena que desea utilizar como el nuevo valor de la función.

El siguiente ejemplo muestra text() y html() con una función de devolución de llamada:
*/
$("#btn1").click(function(){
    $("#test1").text(function(i, origText){
        return "Old text: " + origText + " New text: Hello world!"+
        "(index: " + i + ")"
    });
});

$("#btn2").click(function(){
    $("#test2").html(function(i, origText){
        return "Old html: " + origText + " New html: Hello <b>world!</b>"+
        "(index: " + i + ")"
    });
});



/*
- Establecer los atributos attr()
El jQuery attr() método también se utiliza para ajustar / cambiar los valores de atributos.

El siguiente ejemplo muestra cómo cambiar (set) el valor de la href atributo en un enlace:
*/
$("button").click(function(){
    $("#w3s").attr("href", "http://www.w3ii.com/jquery");
});

/* 
El attr() método también permite definir múltiples atributos al mismo tiempo.

El siguiente ejemplo muestra cómo establecer tanto el href y el título atributos al mismo tiempo:
*/
$("button").click(function(){
    $("#w3s").attr({
        "href" : "http://www.w3ii.com/jquery",
        "title" : "w3ii jQuery Tutorial"
    });
});