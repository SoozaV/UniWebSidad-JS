var ie = navigator.userAgent.toLowerCase().indexOf('msie') != -1;
var info = document.getElementById('info');

function coordenadasMouse(evento){
  if(ie) {
    paginaX = evento.clientX + document.body.scrollLeft;
    paginaY = evento.clientY + document.body.scrollTop;
  } else {
    paginaX = evento.pageX;
    paginaY = evento.pageY;
  }
  navegadorX = evento.clientX;
  navegadorY = evento.clientY;
  muestraInformacion(['Ratón', `Documento: [${paginaX}, ${paginaY}]`, `Navegador: [${navegadorX}, ${navegadorY}]`]);
}

function teclasTeclado(evento){
  var caracter = evento.charCode || evento.keyCode;
  var letra = String.fromCharCode(caracter);
  muestraInformacion(['Teclado', `Carácter: [${letra}]`, `Código: [${caracter}]`]);
}

function informacion(elEvento){
  var evento = elEvento || window.event;
  switch(evento.type){
    case 'mousemove':
      coordenadasMouse(elEvento);
      info.style.background = "#fff";
      break;
    case 'keypress':
      teclasTeclado(elEvento);
      info.style.background = '#cce6ff';
      break;
    case 'click':
      info.style.background = "#ffc";
      break;
  }
}

function muestraInformacion(mensaje) {
  info.innerHTML = '<h1>'+mensaje[0]+'</h1>';
  for(var i=1; i<mensaje.length; i++) {
    info.innerHTML += '<p>'+mensaje[i]+'</p>';
  }
}

document.onmousemove = informacion;
document.onclick = informacion;
document.onkeypress = informacion;