
//el promt  sirve para solicitar informacion al usuario
//y poderla guardar en una variable


var nombre=promt("Introduce tu nombre porfavor");

var apellido=promt("Introduce tu nombre porfavor");

document.write("<p>");

document.write(nombre+" "+apellido);

document.write("</p>");

/**
 * lanza un alert con los botones de ok y cancel y retorna un boolean
 */
function alertConfirmation()
{
    return confirm("quieres realizar esta accion");    
}