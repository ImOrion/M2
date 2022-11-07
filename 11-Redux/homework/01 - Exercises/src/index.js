const { createStore } = require("redux");
const contador = require("./reducer");
const { incremento, decremento } = require("./actions");

// En esta línea creamos nuestro store. Pasándole como parámetro nuestro Reducer
var store = createStore(contador);

// Obtenemos el elemento con el id `valor`.
var valor = document.querySelector("#valor");

// Esta función nos va a servir para actualizar nuestro DOM con el valor que tengamos en nuestro Store.
// En el primer render y cada vez que nos subscribamos al Store.
// Utilizamos el elemento obtenido arriba para mostrar el State.
function renderContador(contador) {
  const numero = store.getState().contador;
  valor.innerHTML = numero;
  // Obtenemos la propiedad 'contador' de nuestro store:
  // Seteamos el número obtenido como texto dentro del elemento con id 'valor':
}

// Ejecutamos la función 'renderContador':
renderContador();

// Nos subscribimos al store pasándole la misma función. Así cada vez que llegue una acción, ejecutamos la función:
store.subscribe(renderContador);
// Por último, utilizamos los botones de nuestro HTML para que cada vez que hagamos click,
// hagan un dispatch al store de la acción correspondiente:

const buttonIncrement = document.querySelector("#incremento");
const buttonDecrement = document.querySelector("#decremento");
const buttonIncrementImpar = document.querySelector("#incrementoImpar");
const buttonIncrementAsync = document.querySelector("#incrementoAsync");

buttonIncrement.addEventListener("click", () => {
  store.dispatch(incremento());
});

buttonDecrement.addEventListener("click", () => {
  store.dispatch(decremento());
});

buttonIncrementImpar.addEventListener("click", () => {
  const numero = store.getState().contador;
  if (!(numero % 2 === 0)) {
    store.dispatch(incremento());
  }
});

buttonIncrementAsync.addEventListener("click", () => {
  setTimeout(() => {
    store.dispatch(incremento());
  }, 1000);
});