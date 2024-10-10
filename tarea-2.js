const body = document.querySelector('body');
const cartelBienvenida = document.querySelector('#cartel-bienvenida');
const $botonIngreso = document.querySelector('#boton-ingreso');
const nombreUsuario = document.querySelector('#nombre-usuario');
const edadUsuario = document.querySelector('#edad-usuario');
const entradaBar = document.querySelector('#entrada-bar');

$botonIngreso.onclick = function () {
  cartelBienvenida.textContent = `¡Hola ${nombreUsuario.value}!`;
  if (Number(edadUsuario.value) >= 18){
    entradaBar.textContent = `¡Tenés ${edadUsuario.value} años, podés entrar!`;
  }else {
    entradaBar.textContent = `Tenés ${edadUsuario.value} años, sos menor y no podés entrar.`
  };

  return false;
};


