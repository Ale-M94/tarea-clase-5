//TAREA: crear un formulario donde un usuario pueda ingresar su salario anual.
//cuando el usuario haga click en el botón "calcular", mostrar el salario mensual
// en una caja de texto deshabilitada. --> <input type="text" disabled id="salario-mensual"/>

function calcularSalarioMensual(salarioAnual) {
  return salarioAnual / 12;
};

const $botonCalcular = document.querySelector('#boton-calcular');
const salarioAnual = document.querySelector('#salario-anual');
const salarioMensual = document.querySelector('#salario-mensual');

$botonCalcular.onclick = function () {
  let resultado = Number(calcularSalarioMensual(salarioAnual.value));
  salarioMensual.value = `$ ${Number(resultado)}`;
  return false;
};


