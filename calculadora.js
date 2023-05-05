// llamada a los elementos con el nombre de su clase
const screnn = document.querySelector('.screen');
const btn = document.querySelectorAll('.btn');
const operator = document.querySelectorAll('.operator');

/* --- Función que nos va a permitir borrar TODO lo que haya en la pantalla --- */
function clearScreen() {
    document.querySelector('.screen').value = '';
}

/* --- Función que va a mostrar los valores por pantalla --- */
function onScreen(value) {
    const screen = document.querySelector('.screen');
    screen.value += value;
}

