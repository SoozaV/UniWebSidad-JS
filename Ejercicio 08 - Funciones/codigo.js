var divi = document.getElementById("numero"); 
var num = Number(prompt("Introduce un número"));

function parImpar(numero){
  if(isNaN(numero)){
    alert("Valor incorrecto, intenta de nuevo.");
  } else if(numero % 2 == 0){
    divi.innerHTML = divi.innerHTML + `El número ${numero} es par</br>`;
  } else {
    divi.innerHTML = divi.innerHTML + `El número ${numero} es impar</br>`;
  }
}

parImpar(num);
parImpar(num + 5);
parImpar(num - 2);
parImpar(3.5);