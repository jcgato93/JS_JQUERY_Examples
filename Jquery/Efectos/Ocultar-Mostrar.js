//Con jQuery, puede ocultar y mostrar los elementos HTML con la hide() y show() métodos:
$("#hide").click(function(){
    $("p").hide();//esconde
});

$("#show").click(function(){
    $("p").show();//Muestra
});



/*El parámetro de velocidad opcional especifica la velocidad de la Ocultación / muestra, y puede tomar los siguientes valores: "slow", "fast" , o milisegundos.
El parámetro callback opcional es una función a ejecutar después de la hide() o show() método se completa .*/
$(selector).hide(speed,callback);

$(selector).show(speed,callback);

$("button").click(function(){
    $("p").hide(1000);
});


/*Con jQuery, puede alternar entre la hide() y show() métodos con el toggle() método.
elementos que se muestran están ocultos y se muestran los elementos ocultos:*/
$("button").click(function(){
    $("p").toggle();
});

$(selector).toggle(speed,callback);