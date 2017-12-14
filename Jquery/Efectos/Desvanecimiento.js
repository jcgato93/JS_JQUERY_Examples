//Con jQuery puede desvanecerse elementos dentro y fuera de la visibilidad.

//El jQuery fadeIn() método se utiliza para desvanecerse en un elemento oculto.
//muestra el elemento
//Sintaxis:
$(selector).fadeIn(speed,callback);
/*El parámetro de velocidad opcional especifica la duración del efecto. Puede tomar los siguientes valores: "slow", "fast" , o milisegundos.
El parámetro callback opcional es una función a ejecutar después de la decoloración completa.*/

$("button").click(function(){
    $("#div1").fadeIn();
    $("#div2").fadeIn("slow");
    $("#div3").fadeIn(3000);
    $("#div2").fadeIn("slow",function(){ alert('funcion luego de aparecer') });
});


/*El jQuery fadeOut() método se utiliza a desaparecer un elemento visible.
oculta el elemento
Sintaxis:*/

$(selector).fadeOut(speed,callback);

$("button").click(function(){
    $("#div1").fadeOut();
    $("#div2").fadeOut("slow");
    $("#div3").fadeOut(3000);
    $("#div2").fadeOut("slow",function(){ alert('funcion luego de ocultar') });
});




fadeToggle() //Método
/*El jQuery fadeToggle() método alterna entre la fadeIn() y fadeOut() métodos.
Si los elementos se desvanecieron, fadeToggle() se desvanecerá en.
Si los elementos se desvanecieron en, fadeToggle() se desvanecerá a cabo.
Sintaxis:*/

$(selector).fadeToggle(speed,callback);

$("button").click(function(){
    $("#div1").fadeToggle();
    $("#div2").fadeToggle("slow");
    $("#div3").fadeToggle(3000);
});


fadeTo() 
/*El jQuery fadeTo() método permite la decoloración de una opacidad dada (valor entre 0 y 1).
no desaparece el objeto por completo
Sintaxis:*/

$(selector).fadeTo(speed,opacity,callback);

$("button").click(function(){
    $("#div1").fadeTo("slow", 0.15);
    $("#div2").fadeTo("slow", 0.4);
    $("#div3").fadeTo("slow", 0.7);
});