// Solución proporcionada por UniWebSidad
function informacion(elEvento) {
  var evento = elEvento || window.event;

  var coordenadaX = evento.clientX;
  var coordenadaY = evento.clientY;

  var dimensiones = tamanoVentanaNavegador();
  var tamanoX = dimensiones[0];
  var tamanoY = dimensiones[1];

  var posicionHorizontal = "";
  var posicionVertical = "";

  if(coordenadaX > tamanoX/2) {
    posicionHorizontal = "derecha";
  }
  else {
    posicionHorizontal = "izquierda";
  }

  if(coordenadaY > tamanoY/2) {
    posicionVertical = "abajo";
  }
  else {
    posicionVertical = "arriba";
  }

  muestraInformacion(['Posicion', posicionHorizontal, posicionVertical]);
}

function muestraInformacion(mensaje) {
  document.getElementById("info").innerHTML = '<h1>'+mensaje[0]+'</h1>';
  for(var i=1; i<mensaje.length; i++) {
    document.getElementById("info").innerHTML += '<p>'+mensaje[i]+'</p>';
  }
}

function tamanoVentanaNavegador(){
  // Adaptada de http:*www.howtocreate.co.uk/tutorials/javascript/browserwindow
  var dimensiones = [];

  if(typeof(window.innerWidth) == 'number') {
    // No es IE
    dimensiones = [window.innerWidth, window.innerHeight];
  } else if(document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
    //IE 6 en modo estandar (no quirks)
    dimensiones = [document.documentElement.clientWidth, document.documentElement.clientHeight];
  } else if(document.body && (document.body.clientWidth || document.body.clientHeight)) {
    //IE en modo quirks
    dimensiones = [document.body.clientWidth, document.body.clientHeight];
  }

  return dimensiones;
}

document.onclick = informacion;