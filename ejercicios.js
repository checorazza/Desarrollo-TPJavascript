// EJ 1. INTRODUCCION A JAVASCRIPT

// ejercicio 2

var a = 5
var b = 10

let c = a + b
console.log("La suma de a y b es ", c)

// ejercicio 3

let nombre = prompt("¿Cuál es tu nombre?");

console.log("¡Hola, " + nombre + "!");

// EJ 2. OPERADORES LÓGICOS

// ejercicio 1

var resultado = a > b ? "a es mayor a b":"a es menor a b"
console.log(resultado)

// ejercicio 2

let numeroIngresado = prompt("Ingresa un número para ver si es par o impar");

numeroIngresado = parseInt(numeroIngresado);

resultado = numeroIngresado % 2 === 0 ? "El número " + numeroIngresado + " es par" : "El número " + numeroIngresado + " es impar"

console.log(resultado)

// EJ 3. OPERADORES DE ASIGNACION Y BUCLES

// ejercicio 1

var contador = 10
while (contador > 0){
    console.log(contador)
    contador = contador - 1
}

// ejercicio 2

let nIngresado;

do {
    nIngresado = prompt("Ingrese un número mayor a 100")
}while(isNaN(nIngresado) || nIngresado <= 100);
console.log("Ingresaste un numero mayor a 100! El numero fue "+ nIngresado);

// EJ 4. FUNCIONES DE JAVASCRIPT

// ejercicio 1
function esPar(numero) {
    return numero % 2 === 0;
}

// ejercicio 2

function convertirCelsiusAFahrenheit(celsius) {
    let fahrenheit = celsius * 1.8 + 32;
    return fahrenheit;
}

//EJ 5. OBJETOS

// ejercicio 1
let persona = {
    nombre: "Ana",
    edad: 30,
    ciudad: "Barcelona",
};

console.log(persona);

// ejercicio 2

let libro = {
    titulo: "El quijote",
    autor: "Miguel de Cervantes",
    anio: 1605,

    esViejo: function() {
        let añoActual = new Date().getFullYear();
        if (añoActual - this.año > 10) {
            console.log("El libro '" + this.titulo + "' es antiguo.");
        } else {
            console.log("El libro '" + this.titulo + "' es reciente.");
        }
    }
};

libro.esViejo();

// EJ. 6 ARRAYS

//ejercicio 1

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let numerosMultiplicados = [];

for (let i = 0; i < numeros.length; i++) {
    numerosMultiplicados.push(numeros[i] * 2);
}

console.log("Array original:", numeros);
console.log("Array multiplicado por 2:", numerosMultiplicados);

// ejercicio 2

let pares = [];

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        pares.push(i);
    }
    
    if (pares.length === 10) {
        break;
    }
}

console.log("Primeros 10 números pares:", pares);


// EJ 7. INTRODUCCION AL DOM

// ejercicio 1
function cambiarColor() {

let elementosP = document.querySelectorAll('p');
 
elementosP.forEach(function(p) {
    p.style.color = 'blue';
});
}

// ejercicio 2
const campoTexto = document.getElementById('campoTexto');
const btnDeshabilitar = document.getElementById('btnDeshabilitar');
const btnHabilitar = document.getElementById('btnHabilitar');

function deshabilitarCampo() {
    campoTexto.disabled = true;
}

function habilitarCampo() {
    campoTexto.disabled = false;
}

        
btnDeshabilitar.addEventListener('click', deshabilitarCampo);
btnHabilitar.addEventListener('click', habilitarCampo);

// EJ 9. LOCAL STORAGE
const formulario = document.getElementById('formulario');
const emailInput = document.getElementById('email');
const mensaje = document.getElementById('mensaje');
const btnEliminar = document.getElementById('btnEliminar');

        
function mostrarCorreo() {
    const correo = emailInput.value;
    localStorage.setItem('correo', correo);
    mostrarCorreo();
    const correoGuardado = localStorage.getItem('correo');
    if (correoGuardado) {
        mensaje.textContent = `Correo guardado: ${correoGuardado}`;
        btnEliminar.style.display = 'block'; 
    } else {
        mensaje.textContent = '';
        btnEliminar.style.display = 'none'; 
    }
}
    

        
        btnEliminar.addEventListener('click', function() {
            localStorage.removeItem('correo');
            mostrarCorreo();
        });

        mostrarCorreo();

