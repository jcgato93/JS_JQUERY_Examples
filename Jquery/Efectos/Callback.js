/* Las funciones de devolución de llamada jQuery
sentencias de JavaScript se ejecutan línea por línea. Sin embargo, con efectos, la siguiente línea de código se puede ejecutar a pesar de que el efecto no se ha terminado.
Esto puede crear errores.
Para evitar esto, se puede crear una función de devolución de llamada.
Una función de devolución de llamada se ejecuta después de que el efecto actual ha terminado.
Sintaxis típica: $(selector).hide(speed,callback);

Ejemplos

El siguiente ejemplo tiene un parámetro de devolución de llamada que es una función que se ejecutará después de que se complete el efecto de ocultar:*/


$("button").click(function(){
    $("p").hide("slow", function(){
        alert("The paragraph is now hidden");
    });
});