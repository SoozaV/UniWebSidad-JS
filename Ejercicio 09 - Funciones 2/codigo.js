var divi = document.getElementById("numero"); 
var texto = prompt("Introduce un texto");

function textoMinMay(texto){
  if(typeof texto != "string" || Number(texto) == texto){
    alert("Valor incorrecto, intenta de nuevo.");
  } else if(texto == texto.toLowerCase()){
    divi.textContent = `El texto "${texto}" solo tiene minúsculas.`;
  } else if(texto == texto.toUpperCase()){
    divi.textContent = `El texto "${texto}" solo tiene mayúsculas.`;
  } else {
    divi.textContent = `El texto "${texto}" tiene una combinación de mayúsculas y minúsculas.`;
  }
}

textoMinMay(texto);