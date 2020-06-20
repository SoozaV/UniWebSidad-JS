let uno = document.getElementById("uno");
let dos = document.getElementById("dos");
let tres = document.getElementById("tres");
let cadena = document.getElementById("cadena");

let texto = "";

let suma, resta, multi, divi, modu, num1, num2;

let valores = [true, 5, false, "hola", "adios", 2];

cadena.innerText = valores.join(" - ");

// Determinar cual de los dos elementos de texto es mayor
for(cadena in valores){
    if(typeof valores[cadena] == "string" && valores[cadena] > texto){
        texto = valores[cadena];
    } if(typeof valores[cadena] == "number" && num1 == undefined){
        // Aprovechando el ciclo para sacar el valor de los números
        num1 = valores[cadena]; 
    } else {
        num2 = valores[cadena];
    }
}

uno.innerText = "De los elementos de texto, el mayor es: " + texto;

//Utilizando exclusivamente los dos valores booleanos del array, determinar los operadores necesarios para obtener un resultado true y otro resultado false

dos.innerHTML = valores[0] + " == " + valores[2] + " -> " + (valores[0] == valores[2]) + 
                "<br/>" + valores[0] + " != " + valores[2] + " -> " + (valores[0] != valores[2]);

//Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos elementos numéricos

suma = num1 + num2;
resta = num1 - num2;
multi = num1 * num2;
divi = num1 / num2;
modu = num1 % num2;

tres.innerHTML = "La suma de " + num1 + " y " + num2 + " es igual a " + suma +
                 "<br/>La resta de " + num1 + " y " + num2 + " es igual a " + resta +
                 "<br/>El producto de " + num1 + " y " + num2 + " es igual a " + multi +
                 "<br/>La división de " + num1 + " y " + num2 + " es igual a " + divi +
                 "<br/>El módulo de " + num1 + " y " + num2 + " es igual a " + modu;