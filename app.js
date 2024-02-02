//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Juego del número secreto';

//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Escoje un numero entre 1 a 10';
let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteado = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); //aqui estamos haciendo una variable que pone el dato en int, luego recupera lo metido en el input con el id del input y al final solo pide el valor (value)
    
    //console.log(numeroSecreto);
    //console.log(intentos);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1 ? 'vez' : 'veces')}`);
        document.getElementById('reiniciar').removeAttribute('disabled'); //aquí estamos activando el boton de juego nuevo quitando el atributo de disabled
    }else{
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        }else{
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumeroSorteado);
    //Si ya sorteamos todos los números
    if (listaNumeroSorteado.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
        
    }else{

    //Si el número generado está incluido en la lista
    if (listaNumeroSorteado.includes(numeroGenerado)) {
         return generarNumeroSecreto();       
    }else{
        listaNumeroSorteado.push(numeroGenerado);
        return numeroGenerado;
    }
} }

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalos de números
    //Generar el número aleatorio
    //inicializar el número de intentos
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true'); //Aquí estamos poniendo el boton de nuevo juego nuevamente como deshabilitado
     
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = ''; //Aquí estamos limpiando la caja donde pones los números. Utilizamos el id de valorUsuario y después el valor con "value" lo pasamos a vacio con ''
}

condicionesIniciales();