//El jQuery animate() método le permite crear animaciones personalizadas.

/*El parámetro params requerido define las propiedades CSS para ser animados.
El parámetro de velocidad opcional especifica la duración del efecto. Puede tomar los siguientes valores: "slow", "fast" , o milisegundos.
El parámetro callback opcional es una función a ejecutar después de la animación completa.*/ 


//Ejemplo
$("button").click(function(){
    $("div").animate({left: '250px'});
}); 



/*
jQuery animate() - manipular las propiedades múltiples
Tenga en cuenta que varias propiedades se pueden animar al mismo tiempo:
 */

$("button").click(function(){
    $("div").animate({
        left: '250px',
        opacity: '0.5',
        height: '150px',
        width: '150px'
    });
}); 


/*¿Es posible manipular todas las propiedades CSS con el animate() método?
¡Si casi! Sin embargo, hay una cosa importante recordar: todos los nombres de propiedad deben ser camella entubado cuando se utiliza con el animate() método: Usted tendrá que escribir paddingLeft en lugar de padding-left, marginRight en lugar de margin-right , y así sucesivamente. 
Además, la animación de color no está incluido en la biblioteca central de jQuery. 
Si desea animar el color, es necesario descargar el plug-in de color Animaciones de jQuery.com.*/ 



/*jQuery animate() - Uso de valores relativos
También es posible definir valores relativos 
(el valor es entonces en relación con el valor actual del elemento). 
Esto se hace poniendo += o -= frente al valor: */

$("button").click(function(){
    $("div").animate({
        left: '250px',
        height: '+=150px',
        width: '+=150px'
    });
}); 


/*jQuery animate() - Uso de valores predefinidos
Incluso puede especificar el valor de una propiedad de animación como 
"show", "hide" o "toggle" : */
$("button").click(function(){
    $("div").animate({
        height: 'toggle'
    });
}); 




/*jQuery animate() - Utiliza cola Funcionalidad
De forma predeterminada, jQuery viene con funcionalidad de colas para las animaciones.
Esto significa que si usted escribe múltiples animate() llama a una después de otra, jQuery crea una cola de "interno" con estas llamadas a métodos. 
A continuación, se corre el animado llama uno por uno.
Por lo tanto, si desea realizar diferentes animaciones, uno tras otro, tomamos ventaja de la funcionalidad de cola: */

$("button").click(function(){
    var div = $("div");
    div.animate({height: '300px', opacity: '0.4'}, "slow");
    div.animate({width: '300px', opacity: '0.8'}, "slow");
    div.animate({height: '100px', opacity: '0.4'}, "slow");
    div.animate({width: '100px', opacity: '0.8'}, "slow");
}); 


$("button").click(function(){
    var div = $("div");
    div.animate({left: '100px'}, "slow");
    div.animate({fontSize: '3em'}, "slow");
}); 




/*El jQuery stop() método se utiliza para detener animaciones o efectos antes de que termine. */


$(selector).stop(stopAll,goToEnd);

$("#stop").click(function(){
    $("#panel").stop();
});