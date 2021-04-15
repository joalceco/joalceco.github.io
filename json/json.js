
function ajson(){
    let valornombre = document.querySelector("#nombre").value;
    let objeto = {
        nombre:valornombre
    };
    document.querySelector("#tajson").value = JSON.stringify(objeto);
}

document.querySelector("#btnjson").addEventListener("click",ajson);


function aformulario(){
    let jsonstring = document.querySelector("#tajson").value;
    let objeto = JSON.parse(jsonstring);
    document.querySelector("#nombre").value = objeto.nombre;
}

document.querySelector("#btnformulario").addEventListener("click",aformulario);

