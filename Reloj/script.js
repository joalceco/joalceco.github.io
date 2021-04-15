

function actualizartiempo(){
    let date=new Date();
    document.querySelector("#horas").textContent=date.getHours();
    document.querySelector("#minutos").textContent=date.getMinutes();
    document.querySelector("#segundos").textContent=date.getSeconds();
}


setInterval(actualizartiempo, 1000);
