var resultados = document.getElementById("resultados");
var prueba = 0;

// Numero de enlaces de la pagina
var enlaces = document.getElementsByTagName("a");
resultados.innerHTML +=  "Hay " + enlaces.length + " enlaces en la página.</br>";

// Direccion del penultimo enlace
var dirUltimoEnlace = enlaces[enlaces.length - 2].href;
resultados.innerHTML +=  "La dirección del penúltimo enlace es: " + dirUltimoEnlace + "</br>";

// Numero de enlaces que apuntan a http://prueba
for(enlace in enlaces){
  if(enlaces[enlace].href == "http://prueba/"){
    prueba += 1;
  }
}
resultados.innerHTML +=  "El número de enlaces que apuntan a prueba es: " + prueba + "</br>";

// Numero de enlaces del tercer párrafo
var parrafos = document.getElementsByTagName("p");
var tercerParrafo = parrafos[2].getElementsByTagName("a");

resultados.innerHTML +=  "El número de enlaces que hay en el tercer párrafo es: " + tercerParrafo.length;