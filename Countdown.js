const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')

const lancamento = "01 dec 2024"

function countDown(){
    const datalanc = new Date(lancamento)
    const hoje = new Date()

    const segTotal = (datalanc - hoje)/1000;

    const finalDias = Math.floor(segTotal / 60 / 60 / 24);
    const finalHoras = Math.floor(segTotal / 60 /60) % 24;
    const finalMinutos = Math.floor(segTotal / 60 ) % 60;
    const finalSegundos = Math.floor(segTotal) % 60;

    dia.innerHTML = fromatoTempo(finalDias)+"D"
    hora.innerHTML = fromatoTempo(finalHoras)+"H"
    minuto.innerHTML = fromatoTempo(finalMinutos)+"M"
    segundo.innerHTML = fromatoTempo(finalSegundos)+"S"
}


function fromatoTempo( tempo ){
    return tempo < 10? `0${tempo}` : tempo;
}


function formatoDia(finalSegundos){
    return `${tempo}S` 
}


countDown();
setInterval(countDown, 1000)