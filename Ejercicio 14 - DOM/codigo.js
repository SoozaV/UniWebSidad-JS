var parrafos = document.getElementsByTagName("p");
    let enlaceOriginal = "Ocultar contenidos";
    let enlaceVolver = "Volver a mostrar";

function muestraOculta(e) {
    
    var parrafoId = e.id.split("_");
    var numParrafo = Number(parrafoId[1]) - 1;

    if(parrafos[numParrafo].style.display == "block" || parrafos[numParrafo].style.display == ""){
      parrafos[numParrafo].style.display = "none";
    } else {
      parrafos[numParrafo].style.display = "block";
    }
  
    e.innerHTML == enlaceOriginal ? e.innerHTML = enlaceVolver : e.innerHTML = enlaceOriginal;
}  

for(enlace of document.querySelectorAll('a')){
  enlace.addEventListener("click", function(){
    muestraOculta(this);
  })
}