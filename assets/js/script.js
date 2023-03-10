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

    
}
