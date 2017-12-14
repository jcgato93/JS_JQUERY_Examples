//Los métodos de diapositivas jQuery se deslizan los elementos arriba y abajo.



/*El jQuery slideDown() método se utiliza para deslizarse por un elemento.
Sintaxis:*/

$(selector).slideDown(speed,callback);

$("#flip").click(function(){
    $("#panel").slideDown();
});



/*El jQuery slideUp() método se utiliza para deslizarse hacia arriba un elemento.
Sintaxis:*/

$(selector).slideUp(speed,callback);

$("#flip").click(function(){
    $("#panel").slideUp();
});

/*El jQuery slideToggle() método alterna entre la slideDown() y slideUp() métodos.*/

$(selector).slideToggle(speed,callback);

$("#flip").click(function(){
    $("#panel").slideToggle();
});