let tempo = 0; // Tempo em segundos
let intervalo;
let cronometroRodando = false;

function formatarTempo(segundos) {
    let minutos = Math.floor(segundos / 60);
    let segundosRestantes = segundos % 60;
    return `${minutos < 10 ? '0' + minutos : minutos}:${segundosRestantes < 10 ? '0' + segundosRestantes : segundosRestantes}`;
}

function iniciarCronometro() {
    if (!cronometroRodando) {
        intervalo = setInterval(() => {
            tempo++;
            document.getElementById('tempo').innerText = formatarTempo(tempo);
        }, 1000);
        cronometroRodando = true;
        document.getElementById('iniciar').innerText = 'Pausar'; 
    } else {
        pausarCronometro();
    }
}

function pausarCronometro() {
    clearInterval(intervalo);
    cronometroRodando = false;
    document.getElementById('iniciar').innerText = 'Continuar'; 
}

function pararCronometro() {
    clearInterval(intervalo);  
    cronometroRodando = false;
    
    document.getElementById('tempo').innerText = formatarTempo(tempo);
    document.getElementById('iniciar').innerText = 'Iniciar'; 
}

function zerarCronometro() {
    clearInterval(intervalo);  
    cronometroRodando = false;
    tempo = 0;
    document.getElementById('tempo').innerText = formatarTempo(tempo);
    document.getElementById('iniciar').innerText = 'Iniciar'; 
}
