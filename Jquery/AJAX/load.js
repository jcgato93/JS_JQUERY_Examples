/*
jQuery load() Método
El jQuery load() método es un método AJAX simple pero poderoso.

los load() método carga datos de un servidor y coloca los datos devueltos en el elemento seleccionado.

Syntax:
*/
$(selector).load(URL,data,callback);

/* 
El parámetro de URL requerido especifica la URL que desea cargar.

El parámetro de datos opcional especifica un conjunto de querystring pares clave / valor para enviar junto con la solicitud.

El parámetro de devolución de llamada opcional es el nombre de una función que se ejecutará después del load() método se completa.
*/




/*
El parámetro de devolución de llamada opcional especifica una función de devolución de llamada para ejecutar cuando load()método se completa. La función de devolución de llamada puede tener diferentes parámetros:

responseTxt - contiene el contenido resultante si la llamada tiene éxito
statusTxt - contiene el estado de la llamada
xhr - contiene el XMLHttpRequest objeto ----data (json / xml ...etc)
El siguiente ejemplo muestra un cuadro de alerta después del load()método completo. Si elload() método ha tenido éxito, muestra "External content loaded successfully!"y si falla, muestra un mensaje de error:
*/
$("button").click(function(){
    $("#div1").load("demo_test.txt", function(responseTxt, statusTxt, xhr){
        if(statusTxt == "success")
            alert("External content loaded successfully!");
        if(statusTxt == "error")
            alert("Error: " + xhr.status + ": " + xhr.statusText);
    });
});