// Primeira fase do jogo

const placar = document.querySelector("#placar");
const matriz = document.querySelector("#matriz_jogo");
const imagens = [
    'card_01.jpg',
    'card_02.png',
    'card_03.png',
    'card_04.png',
    'card_05.png',
    'card_06.png',
    'card_07.png',
    'card_08.jpg'

]

let cartaHTLM = '';

// associa cada imagem a uma capa 
imagens.forEach(img => {
    cartaHTLM += `
        <div class="carta">
            <img class ="frente" src="img/${img}" height="270" width="200">
            <img class ="verso" src="img/card_capa.jpg" height="270" width="200">
        </div>
    `
});

matriz.innerHTML = cartaHTLM + cartaHTLM;

const cartas = document.querySelectorAll('.carta');

function virarCarta() {
    this.classList.add('abrir');
}
cartas.forEach(cart => cart.addEventListener('click', virarCarta));



/*=========== Pontuação dos jogadores =============*/
/*=================================================*/

let nomeJogador1 = "Player-1";  // usar o nome definido no menu do jogo
let pontosJogador1 = document.getElementById("nomeJogador1");

let nomeJogador2 = "Player-2";  // usar o nome definido no menu do jogo
let pontosJogador2 = 0;





