var info = document.getElementById('info');
    // Variables que guardan las coordenadas al momento de hacer click.
var navegadorX, navegadorY,
    // Estas variables muestran Izquierda, Derecha, Arriba o Abajo dependiendo de la zona de click.
    zonaX, zonaY;

function informacion(elEvento) {
      // Variable para el evento.
  var evento = elEvento || window.event,
      // Variables para definir alto / ancho del navegador, y altura del documento.
      alto = document.documentElement.clientHeight, 
      ancho = document.documentElement.clientWidth,
      documentoY = document.documentElement.scrollHeight,  
      // Variables para mostrar las coordenadas actuales al mover el mouse.
      posicionActualX = evento.clientX, 
      posicionActualY = evento.clientY,
      // Mensaje inicial
      mensajeZona = ["Zona de click"];

  if(evento.type == 'click'){
    navegadorX = posicionActualX;
    navegadorY = posicionActualY;
    navegadorX < (ancho / 2) ? zonaX = "Izquierda" : zonaX = "Derecha";
    navegadorY < (alto / 2) ? zonaY = "Arriba" : zonaY = "Abajo";
  }

  // Condicional para evitar que se muestre "undefined" si el usuario no ha hecho ningún click.
  zonaX == undefined ? mensajeZona = mensajeZona : mensajeZona = ["Zona de click", zonaX + ": " + navegadorX + ", " + zonaY + ": " + navegadorY];
      
  muestraInformacion(mensajeZona.concat(["Coordenadas actuales: " + posicionActualX + " | " + posicionActualY,
                                         "Ancho navegador: " + ancho, 
                                         "Alto navegador: " + alto, 
                                         "Alto documento: " + documentoY]));
}

function muestraInformacion(mensaje) {
  info.innerHTML = '<h1>'+mensaje[0]+'</h1>';
  for(var i=1; i<mensaje.length; i++) {
    info.innerHTML += '<p>'+mensaje[i]+'</p>';
  }
}

document.onclick = informacion;
document.onmousemove = informacion;