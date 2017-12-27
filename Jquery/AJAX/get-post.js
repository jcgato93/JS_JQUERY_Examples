/*
l jQuery get() y post() los métodos se utilizan para solicitar datos del servidor con un HTTP GET o POST solicitud.

Solicitud HTTP: GET vs POST
Dos métodos comúnmente utilizados para una solicitud-respuesta entre un cliente y un servidor son: GET y POST.

GET - Solicita datos de un recurso especificado
POST - Envía datos para ser procesados ​​a un recurso especificado
GET se usa básicamente para obtener (retrieving) algunos datos del servidor. Note: los GET método puede devolver datos en caché.

POSTtambién se puede usar para obtener algunos datos del servidor. sin embargo, elPOST el método NUNCA almacena en caché los datos, y se usa a menudo para enviar datos junto con la solicitud.
*/





/*
jQuery $.get() Método
los $.get() método solicita datos del servidor con un HTTP GET solicitud.
*/
$.get(URL,callback);
/*El parámetro de URL requerido especifica la URL que desea solicitar.
El parámetro de devolución de llamada opcional es el nombre de una función que se ejecutará si la solicitud tiene éxito.

El siguiente ejemplo usa el $.get() método para recuperar datos de un archivo en el servidor: */
$("button").click(function(){
    $.get("demo_test.asp", function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
    });
});





/*jQuery $.post() Método
los $.post() método solicita datos del servidor utilizando un HTTP POST solicitud. */
$.post(URL,data,callback);

/*
El parámetro de URL requerido especifica la URL que desea solicitar.

El parámetro de datos opcional especifica algunos datos para enviar junto con la solicitud.

El parámetro de devolución de llamada opcional es el nombre de una función que se ejecutará si la solicitud tiene éxito.

El siguiente ejemplo usa el $.post() método para enviar algunos datos junto con la solicitud:
*/
var datos = {
            name: "Donald Duck",
            city: "Duckburg"
            }

$("button").click(function(){
    $.post("demo_test_post.asp",
    datos,
    function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
    });
});