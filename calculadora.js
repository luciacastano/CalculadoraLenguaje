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


/* --- Funcionalidades especiales (log, sin, cos, tan) --- */
/* --- Función para calcular el logaritmo --- */
function logFunct() {
    const value = parseFloat(screen.value); // obtiene el valor de la pantalla y lo pasa a float
    const result = Math.log10(value); // Math.log() -> función que calcula el logaritmo (en base 10) y lo guarda en la variable result
    screen.value = result; // muestra el resultado de la operación
}

/* --- Función para calcular el seno --- */
function sinFunct() {
    const value = parseFloat(screen.value); // obtiene el valor de la pantalla y lo pasa a float
    const radianes = (value * Math.PI) / 180; // converte a radianes si no, está calculando en grados
    const result = Math.sin(radianes); // Math.sin() -> función que calcula el seno y lo guarda en la variable result
    screen.value = result; // muestra el resultado de la operación
}

/* --- Función para calcular el coseno --- */
function cosFunct() {
    const value = parseFloat(screen.value); // obtiene el valor de la pantalla y lo pasa a float
    const radianes = (value * Math.PI) / 180; // converte a radianes si no, está calculando en grados
    const result = Math.cos(radianes); // Math.cos() -> función que calcula el coseno y lo guarda en la variable result
    screen.value = result; // muestra el resultado de la operación
}

/* --- Función para calcular la tangente --- */
function tanFunct() {
    const value = parseFloat(screen.value); // obtiene el valor de la pantalla y lo pasa a float
    const radianes = (value * Math.PI) / 180; // converte a radianes si no, está calculando en grados
    const result = Math.tan(radianes); // Math.tan() -> función que calcula la tangente y lo guarda en la variable result
    screen.value = result; // muestra el resultado de la operación
}