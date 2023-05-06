// llamada a los elementos con el nombre de su clase
const screen = document.querySelector('.screen');
const btn = document.querySelectorAll('.btn');
const operator = document.querySelectorAll('.operator');

/* --- Función que nos va a permitir borrar TODO lo que haya en la pantalla --- */
function clearScreen() {
    screen.value = '';
}

/* --- Función que va a mostrar los valores por pantalla --- */
function onScreen(value) {
    screen.value = screen.value + value;
}

/* --- Función que va a comprobar la función que hemos puesto en pantalla --- */
function valueOperation() {
    const operation = screen.value; //obtenemos el valor de la pantalla
    const result = calcOperation(operation); // pasamos el valor de la pantalla y calculamos llamando a la función calculate()
    screen.value = result; // nos devuelve el valor
}

/* --- Función que va a calcular la operación que se ponga en pantalla --- */
function calcOperation(operation) {
    return eval(operation); 
    /* eval -> función de js para realizar el cálculo matemático 
     * de la operación pasada como argumento; en este caso, el 
     * argumento es operation, que es el que toma el valor de la pantalla
    */
}