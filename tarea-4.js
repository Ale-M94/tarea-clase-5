//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

const horas = document.querySelectorAll('.horas');
const minutos = document.querySelectorAll('.minutos');
const segundos = document.querySelectorAll('.segundos');
const $botonCalcular = document.querySelector('#boton-calcular');
const tiempoTotal = document.querySelector('#tiempo-total');

$botonCalcular.onclick = function () {
    let contadorHoras = 0;
    let contadorMinutos = 0;
    let contadorSegundos = 0;

    segundos.forEach(seg => {
        contadorSegundos += Number(seg.value);
    });

    minutos.forEach(min => {
        contadorMinutos += Number(min.value);
    });

    horas.forEach(hs => {
        contadorHoras += Number(hs.value);
    });

    let totalSegundos = contadorSegundos % 60;
    let sgs = Math.floor(contadorSegundos / 60);

    contadorMinutos += sgs;
    let totalMinutos = contadorMinutos % 60;
    let mins = Math.floor(contadorMinutos / 60);

    let totalHoras = contadorHoras + mins;

    tiempoTotal.textContent = `El tiempo total de las clases es ${totalHoras} horas, ${totalMinutos} minutos, ${totalSegundos} segundos.`;

    return false;
};

