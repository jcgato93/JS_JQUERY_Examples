//formas de declarar un array

var Array=[];//vacio

var articulos=["Zapatillas","Camisetas","Pantalon"];

//=======segunda formas

var articulos=new Array("Zapatillas","Camisetas","Pantalon");



///========== Metodos ============================

//conocer tamaño del Array
var cantidad= articulos.length


//===== agregar un elemento al final del Array
articulos.push("elemento_al_Final");


//===== agregar un elemento al comienzo del Array
articulos.unshift("elemento_al_inicio");


//======Borrar primer elemento
articulos.shift();


//======Borrar el ultimo elemento
articulos.pop();

