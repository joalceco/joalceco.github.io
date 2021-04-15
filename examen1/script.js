let requestURL = "https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en";
let request = new XMLHttpRequest();

function requestPronosticoTiempo(){
    // Preparamos API
    requestURL = `https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en`;
    // Limpiamos Tabla de pronosticos
    let tablapronostico = document.querySelector("#pronostico");
    tablapronostico.innerHTML="";
    // Hacemos la solicitud al API
    request.open("GET", requestURL);
    request.responseType="json";
    request.send();
}

function formatofecha(fecha){
    let anio = fecha.substring(0,4);
    let mes = fecha.substring(4,6);
    let dia = fecha.substring(6,8);
    return `${dia}/${mes}/${anio}`;
}

function formatoclima(clima){
    // <i class="bi bi-sun"></i>
    switch (clima) {
        case 'clear':
            return `<i class="bi bi-sun"></i> Despejado`
        case 'ts':
            return `<i class="bi bi-cloud-lightning"></i> Tormenta Electrica`
        case 'pcloudy':
            return `<i class="bi bi-cloud-sun"></i> Parcialmente Nublado`
        case 'mcloudy':
            return `<i class="bi bi-cloudy"></i> Medianamente Nublado`
        case 'cloudy':
            return `<i class="bi bi-clouds"></i> Nublado`
        case 'lightrain':
            return `<i class="bi bi-cloud-drizzle"></i> LLuvia ligera`
        case 'humid':
            return `<i class="bi bi-droplet"></i> Humedo`
        default:
            return `<i class="bi bi-question-circle"></i> Desconocido`
    }
}

function formatoviento(viento){
    // <i class="bi bi-sun"></i>
    switch (viento) {
        case 1:
            return `<i class="bi bi-wind"></i> Calmado`
        case 2:
            return `<i class="bi bi-wind"></i> Ligero`
        case 3:
            return `<i class="bi bi-wind"></i> Moderado`
        case 4:
            return `<i class="bi bi-wind"></i> Fresco`
        case 5:
            return `<i class="bi bi-wind"></i> Fuerte`
        case 6:
            return `<i class="bi bi-wind"></i> Vendaval`
        case 7:
            return `<i class="bi bi-wind"></i> Tormenta`
        case 8:
            return `<i class="bi bi-wind"></i> Hurracan`
        default:
            return `<i class="bi bi-wind"></i>Desconocido`
    }
}

request.onload = function(){
    console.log(request.response);
    // let respuesta = request.response;
    // let tablapronostico = document.querySelector("#pronostico");
    // for(let valor of respuesta.dataseries){
    //     let contenedor = document.createElement("div");
    //     contenedor.classList.add("prediccion");
    //     contenedor.innerHTML=`
    //         <span><i class="bi bi-calendar"></i>${formatofecha(""+valor.date)}</span>
    //         <span><i class="bi bi-thermometer"></i>${valor.temp2m.min}</span>
    //         <span><i class="bi bi-thermometer-high"></i>${valor.temp2m.max}</span>
    //         <span class="clima">${formatoclima(valor.weather)}</span>
    //         <span>${formatoviento(valor.wind10m_max)}</span>
    //     `;
    //     tablapronostico.appendChild(contenedor);
    // }
}

document.querySelector("#btnconsulta").addEventListener("click",function(){

    requestPronosticoTiempo();
    
});