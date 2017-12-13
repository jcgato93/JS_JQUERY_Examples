/*¿Qué son los eventos?
Todas las diferentes acciones de los visitantes a las que una página web puede responder se llaman eventos.

Un evento representa el momento preciso en que sucede algo.

Ejemplos:

mover un mouse sobre un elemento
seleccionando un botón de radio
haciendo clic en un elemento
El término "fuego / fuego" a menudo se usa con eventos. Ejemplo: "El evento de pulsación de tecla se dispara, en el momento en que presiona una tecla".

Aquí hay algunos eventos DOM comunes:*/


/*
Mouse Events  |	Keyboard Events	|  Form Events | Document/Window Events
              |                 |              |
click	      |  keypress	    |  submit	   | load
dblclick	  |  keydown        |  change	   | resize
mouseenter	  |  keyup	        |  focus	   | scroll
mouseleave	  |	                |  blur	       | unload
*/




/*jQuery sintaxis Para Métodos de Evento
En jQuery, la mayoría de los eventos DOM tienen un método jQuery equivalente.

Para asignar un evento de clic a todos los párrafos en una página, usted puede hacer esto:*/

$("p").click();
//El siguiente paso es definir lo que debe ocurrir cuando se activa el evento. Debe pasar una función para el evento:

$("p").click(function(){
  // action goes here!!
});



//Comúnmente utilizado métodos de eventos de jQuery
$(document).ready()

//El $(document).ready() método nos permite ejecutar una función cuando el documento se ha cargado completamente. Este evento ya se explicó en el jQuery Sintaxis capítulo.

click()

/*El click() método atribuye una función de controlador de eventos para un elemento HTML.
La función se ejecuta cuando el usuario hace clic en el elemento HTML.
El siguiente ejemplo se dice: Cuando un evento de clic incendios en un <p> elemento; ocultar la corriente <p> elemento:*/

$("p").click(function(){
    $(this).hide();
});



dblclick()
/*El dblclick() método atribuye una función de controlador de eventos para un elemento HTML.
La función se ejecuta cuando el usuario hace doble clic en el elemento HTML:*/
$("p").dblclick(function(){
    $(this).hide();
});


mouseenter()
/*El mouseenter() método atribuye una función de controlador de eventos para un elemento HTML.
La función se ejecuta cuando el puntero del ratón entra en el elemento HTML:*/
$("#p1").mouseenter(function(){
    alert("You entered p1!");
});


mouseleave()
/*El mouseleave() método atribuye una función de controlador de eventos para un elemento HTML.
La función se ejecuta cuando el puntero del ratón sale del elemento HTML:*/
$("#p1").mouseleave(function(){
    alert("Bye! You now leave p1!");
});


mousedown()
/*El mousedown() método atribuye una función de controlador de eventos para un elemento HTML.
La función se ejecuta, cuando el botón central o derecho del ratón izquierdo, se presiona hacia abajo, mientras que el ratón está sobre el elemento HTML:*/
$("#p1").mousedown(function(){
    alert("Mouse down over p1!");
});


mouseup()
/*El mouseup() método atribuye una función de controlador de eventos para un elemento HTML.
La función se ejecuta, cuando la izquierda, el botón central o derecho del ratón es liberado, mientras que el ratón está sobre el elemento HTML:*/
$("#p1").mouseup(function(){
    alert("Mouse up over p1!");
});


hover()
/*El hover() método tiene dos funciones y es una combinación de la mouseenter() y mouseleave() métodos.
La primera función se ejecuta cuando el ratón entra en el elemento HTML, y se ejecuta la segunda función cuando el ratón sale del elemento HTML:*/
$("#p1").hover(function(){
    alert("You entered p1!");
},
function(){
    alert("Bye! You now leave p1!");
});


focus()
/*El método focus () adjunta una función de controlador de eventos a un campo de formulario HTML.
La función se ejecuta cuando el campo de formulario obtiene el foco:*/
$("input").focus(function(){
    $(this).css("background-color", "#cccccc");
});

blur()
/*El método blur () asocia una función de controlador de eventos a un campo de formulario HTML.
La función se ejecuta cuando el campo de formulario pierde foco:*/
$("input").blur(function(){
    $(this).css("background-color", "#ffffff");
});



on()
/*El método on () conecta uno o más controladores de eventos para los elementos seleccionados.
Adjunte un evento de clic a un elemento <p>:*/
$("p").on("click", function(){
    $(this).hide();
});
//Adjunte controladores de eventos múltiples a un elemento <p>:
$("p").on({
    mouseenter: function(){
        $(this).css("background-color", "lightgray");
    }, 
    mouseleave: function(){
        $(this).css("background-color", "lightblue");
    }, 
    click: function(){
        $(this).css("background-color", "yellow");
    } 
});


