// variáveis

let boraBloco = document.getElementById('bora');
let pausaBloco = document.getElementById('pausa');

let boraTempo = 25;
let pausaTempo = 5;

let segundos = "00";

// display
window.onload = () => {
    document.getElementById('minutos').innerHTML = boraTempo;
    document.getElementById('segundos').innerHTML = segundos;

    boraBloco.classList.add('active');
}

// Iniciar timer
function iniciar() {
    // Mudar  botão
    document.getElementById('iniciar').style.display = "none";
    document.getElementById('reiniciar').style.display = "block";

    // mudar o tempo
    segundos = 59;

    let boraMinutos = boraTempo - 1;
    let pausaMinutos = pausaTempo - 1;

    pausaContador = 0;

    // Contagem Regressiva
    let timerFuncao = () => {
        // Mudar o display
        document.getElementById('minutos').innerHTML = boraMinutos;
        document.getElementById('segundos').innerHTML = segundos;

        // Iniciar
        segundos = segundos - 1;

        if(segundos === 0) {
            boraMinutos =  boraMinutos -1;
            if(boraMinutos === - 1) {
                if(pausaContador % 2 === 0) {
                    // Iniciar pausa
                    boraMinutos = pausaMinutos;
                    pausaContador++
                    
                    // Mudar o Painel
                    boraBloco.classList.remove('active');
                    pausaBloco.classList.add('active');

                }else {
                    // Continuar Bora!
                    boraMinutos = boraTempo;
                    pausaContador++

                    // Mudar o Painel
                    pausaBloco.classList.remove('active');
                    boraBloco.classList.add('active');
                }
            }    
            segundos = 59;
        }
    }

    // Iniciar contagem regressiva
    setInterval(timerFuncao, 1000); // 1000 - 1s

}





