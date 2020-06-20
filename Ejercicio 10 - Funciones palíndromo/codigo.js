var divi = document.getElementById("palindromo"); 
var texto = prompt("Introduce un texto");

function palindromo(texto){

  var inverso = texto.split(" ");
  inverso = inverso.join("");
  inverso = inverso.split("");
  inverso.reverse();
  inverso = inverso.join("");

  var texto2 = texto.split(" ");
  texto2 = texto2.join("");

  if(texto2 == inverso){
    divi.textContent = `El texto "${texto}" es un palíndromo.`;
  } else {
    divi.textContent = `El texto "${texto}" NO es un palíndromo.`;
  }
}

palindromo(texto);