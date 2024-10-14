// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

const lista = document.querySelector('#lista');
const listaItems = document.querySelectorAll('li');
const contenidos = Array.from(listaItems, item => item.innerText);
const $informacion = document.querySelector('#boton-resultados');

const textoPromedio = document.querySelector('#texto-num-promedio');
const textoNumGrande = document.querySelector('#texto-num-grande');
const textoNumChico = document.querySelector('#texto-num-chico');
const textoNumRepite = document.querySelector('#texto-num-repite');


function calcularPromedio(arr) {
    let contador = 0;
    for (let i = 0; i < arr.length; i++) {
        contador += Number(arr[i]);
    };

    return contador / arr.length;
};

function numeroChico(arr) {
    let chico = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (chico > arr[i]) {
            chico = arr[i];
        };
    };
    return chico;
};

function numeroGrande(arr) {
    let grande = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (grande < arr[i]) {
            grande = arr[i];
        };
    };
    return grande;
};

function numeroRepite(arr){
    let numeroMasRepetido = arr[0];
    let repeticiones = 0;

    for(let i = 0; i < arr.length; i++){
        let contador = 0;
        for(let j = 0; j < arr.length; j++){
            if(arr[i] === arr[j]){
                contador++;
            };
        };
        if(contador > repeticiones){
            repeticiones = contador;
            numeroMasRepetido = arr[i];
        };
    };

    return numeroMasRepetido;
};

$informacion.onclick = function () {
    textoPromedio.textContent = `El promedio es ${calcularPromedio(contenidos)}`;
    textoNumGrande.textContent = `El número más grande es ${numeroGrande(contenidos)}`;
    textoNumChico.textContent = `El número más chico es ${numeroChico(contenidos)}`;
    textoNumRepite.textContent = `El número que más se repite es ${numeroRepite(contenidos)}`;
};
