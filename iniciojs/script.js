console.log("Hola mundo");
// alert("Hola desde ventanita");
let a = 2;


function cambiacolorTexto(){
    let nodoCambiar = document.querySelector('#tituloacambiar');
    nodoCambiar.classList.toggle("red");
    // nodoCambiar.classList.add("blue");
}

function imprimeTexto(){
    let entrada = document.querySelector("#entrada");
    console.log(entrada.value);
}

let boton=document.querySelector("#boton");
boton.addEventListener('click',cambiacolorTexto);
boton.addEventListener('click',imprimeTexto);

