var divi = document.getElementById("fact"); 
//var divi = document.getElementsByClassName("fact");

var num = Number(prompt("Intruduce un número menor a 25 para calcular su factorial"));
var factorial = 1;

if(num <= 0 || num > 25 || typeof num != "number"){
  alert("Valor incorrecto, intenta de nuevo.");
}

for(i = 1; i <= num; i++){
  factorial = factorial * i;
}

divi.textContent = "El factorial de " + num + " es " + factorial;
// Aquí no entiendo porqué el texto no se imprime en pantalla si en lugar de 
// usar getElementById uso getElementsByClassName