var info = document.getElementById('info');

function informacion(elEvento) {
  var evento = elEvento || window.event;
  var zonaY, zonaX, alto = document.documentElement.clientHeight, ancho = document.documentElement.clientWidth;

  navegadorX = evento.clientX;
  navegadorY = evento.clientY;

  navegadorX < (ancho / 2) ? zonaX = "Izquierda" : zonaX = "Derecha";
  navegadorY < (alto / 2) ? zonaY = "Arriba" : zonaY = "Abajo";
  
  muestraInformacion(["Zona de click", "[" + zonaY + ": " + navegadorY + ", " + zonaX + ": " + navegadorX, 
                      "Alto documento: " + alto, "Ancho documento: " + ancho + "]"]);
}

function muestraInformacion(mensaje) {
  info.innerHTML = '<h1>'+mensaje[0]+'</h1>';
  for(var i=1; i<mensaje.length; i++) {
    info.innerHTML += '<p>'+mensaje[i]+'</p>';
  }
}

document.onclick = informacion;