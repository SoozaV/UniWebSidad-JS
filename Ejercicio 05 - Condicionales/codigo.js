// Se obtienen los elementos del DOM
var comparar = document.getElementById("comparar");
var resultado = document.getElementById("resultado");

function compararNumeros(){
      // Se obtienen los elementos del DOM
  var num1 = document.getElementById("numUno"),
      num2 = document.getElementById("numDos"),
      // Se obtiene el valor numérico de los input
      numero1 = Number(num1.value),
      numero2 = Number(num2.value);

      resultado.innerHTML = "";

  // Si es un número fuera del rango o con punto decimal, manda mensaje de error
  if(numero1 < -10 || numero1 > 10 || numero2 < -10 || numero2 > 10 || numero1 % 1 != 0 || numero2 % 1 != 0){
    alert("Por favor introduce solo números enteros del -10 al 10.");
  } else {
    // Se compara si ambos números son iguales
    if(numero1 == numero2) {
      resultado.innerHTML += "<p>" + numero1 + " es igual a " + numero2 + "</p>";
    } 
    // Se compara si numero1 es mayor o menor que numero2
    numero1 > numero2 ? resultado.innerHTML += "<p>" + numero1 + " es mayor que " + numero2 + "</p>" : resultado.innerHTML += "<p>" + numero1 + " es menor que " + numero2 + "</p>" ;
    
    // Se verifica si numero2 es positivo o negativo
    numero2 >= 0 ? resultado.innerHTML += "<p>" + numero2 + " es un número positivo." : resultado.innerHTML += "<p>" + numero2 + " es un número negativo." ;

    // Se verifica si numero1 es negativo o distinto de 0
    if(numero1 < 0 || numero1 != 0) {
      resultado.innerHTML += "<p>" + numero1 + " es negativo o distinto de cero.</p>";
    }

    // Se verifica si numero1 puede ser mayor a numero2 si se le suma 1.
    if(!(++numero1 >= numero2)) {
      resultado.innerHTML += "<p>Incrementar en 1 unidad el valor de " + numero1 + " no lo hace mayor o igual que " + numero2 + "</p>";
    }
  }
}

comparar.onclick = compararNumeros;