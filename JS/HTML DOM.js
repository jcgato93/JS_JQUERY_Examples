/*El objeto del documento HTML DOM
El objeto de documento representa su página web.

Si desea acceder a cualquier elemento en una página HTML, que siempre comienza con el acceso al objeto de documento.

A continuación se presentan algunos ejemplos de cómo se puede utilizar el objeto de documento para acceder y manipular HTML.




Elementos HTML hallazgo
Método	Descripción*/
document.getElementById( id )	//Encontrar un elemento por elemento de Identificación
document.getElementsByTagName( name )//	Encontrar elementos por nombre de etiqueta
document.getElementsByClassName( name )	//Encontrar elementos por nombre de la clase



//Cambio de elementos HTML
//Método	Descripción
element .innerHTML =  new //html content	Cambiar el código HTML interno de un elemento
element . attribute = new //value	Cambiar el valor del atributo de un elemento HTML
element .setAttribute (attribute, value) //Cambiar el valor del atributo de un elemento HTML
element .style. property = new //style	Cambiar el estilo de un elemento HTML

/*Adición y eliminación de elementos
Método	Descripción*/
document.createElement( element ) //Crear un elemento HTML
document.removeChild( element )	//Quitar un elemento HTML
document.appendChild( element )	//Añadir un elemento HTML
document.replaceChild( element ) //Reemplazar un elemento HTML
document.write( text )	//Escribe en la corriente de salida en HTML

/*Adición de Eventos Manipuladores
Método	Descripción*/
document.getElementById( id ).onclick = function(){ code }//Adición de código de controlador de eventos a una onclick caso Encontrar los objetos HTML


//Propiedad	Descripción	DOM

document.anchors    //Devuelve todos los <a> elementos que tienen un atributo de nombre	1
document.applets	//Devuelve todos los <applet> elementos (en desuso en HTML5)	1
document.baseURI	//Devuelve el URI base absoluta del documento	3
document.body	//Devuelve el <body> elemento	1
document.cookie	//Devuelve la cookie del documento	1
document.doctype	//Devuelve tipo de documento del documento	3
document.documentElement	//Devuelve el <html> elemento	3
document.documentMode	//Devuelve el modo utilizado por el navegador	3
document.documentURI	//Devuelve el URI del documento	3
document.domain	//Devuelve el nombre de dominio del servidor de documentos	1
document.domConfig	//Obsoleta. Devuelve la configuración DOM	3
document.embeds	//Devuelve todos los <embed> elementos	3
document.forms	//Devuelve todos los <form> elementos	1
document.head	//Devuelve el <head> elemento	3
document.images	//Devuelve todos los <img> elementos	1
document.implementation	//Devuelve la implementación DOM	3
document.inputEncoding	//Devuelve la codificación del documento (conjunto de caracteres)	3
document.lastModified	//Devuelve la fecha y hora del documento fue actualizado	3
document.links	//Devuelve todos los <area> y <a> elementos que tienen un atributo href	1
document.readyState	//Devuelve el (carga) de estado del documento	3
document.referrer	//Devuelve el URI de la URL de referencia (el documento enlazado)	1
document.scripts	//Devuelve todos los <script> elementos	3
document.strictErrorChecking	//Devuelve si la comprobación de errores se hace cumplir	3
document.title	//Devuelve el <title> elemento	1
document.URL	//Devuelve el URL completo del documento	1
