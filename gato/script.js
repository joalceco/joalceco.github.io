// Realizar un juego de tic-tac-toe (gato) para aprender sobre eventos en JS
//  y manejo de variables.

// El juego debe contener lo siguiente:

// Tablero
// Fichas de Jugador ( X y O )
// Botón de reinicio
// Detección del ganador
// Marcador de juegos ganados
// Cambios de estilo al detectar ganador

let tablero=["", "", "","", "", "","", "", ""];
let turno="X";

function clickcasilla(evt){
    let id = Number(evt.target.id[1])-1;
    if(tablero[id]===""){
        tablero[id] = turno;
        evt.target.classList.add(turno);
        if( turno === "X"){
            turno="O";

        }else{
            turno="X";
        }
    }
    
}

function ganador(){
    // Revisar si alguien gano
    // Si alguien gano
}

function reiniciar(){
    let casillas = document.querySelectorAll(".casilla");
    tablero=["", "", "","", "", "","", "", ""];
    for(var i=0; i<9;i++){
        casillas[i].classList.remove("X", "O");
    }    
}

let casillas = document.querySelectorAll(".casilla");
for(var i=0; i<9;i++){
    casillas[i].addEventListener('click',clickcasilla);
}

document.querySelector("#reiniciar").addEventListener('click',reiniciar);

