// Primeira fase do jogo

const placar = document.querySelector("#placar");
const matriz = document.querySelector("#matriz_jogo");
const imagens = [
    'card_01.png',
    'card_02.png',
    'card_03.png',
    'card_04.jpg',
    'card_05.png',
    'card_06.png',
    'card_07.jpg',
    'card_08.jpg',
    'card_09.jpg',
    'card_10.png',
    'card_11.png',
    'card_12.png'

]

let divCarta = '';

// associa cada imagem a uma capa 
imagens.forEach(img => {
    divCarta += `
        <div class="carta">
            <img class ="frente" src="img/${img}" height="270" width="200">
            <img class ="verso" src="img/card_capa.jpg" height="270" width="200">
        </div>
    `
});

matriz.innerHTML = divCarta + divCarta;

const cartas = document.querySelectorAll('.carta');

function virarCarta() {     /* Rotacao das cartas */
    this.classList.add('abrir');
}
cartas.forEach(item => item.addEventListener('click', virarCarta));



/*=========== Pontuação dos jogadores =============*/
/*=================================================*/

let arrayCartas = [];

//array.push() -> insere no final
//array.pop() -> remove do final
//array.shift() -> remove do inicio
//array.unshift() - insere no inicio
/*
-----------
*1ª carta aberta*
    -se a 2ª for igual(mesmo nome .frente)
        {
            carta1 e carta2 aberta==true;
            pula vez=false
            this pontosJogador += 1
        }
        se não
        {
            carta1 e carta2 aberta==false
            pula vez==true;
        }
    -não abrir mais de 2 cartas por vez
*/

function pulaVez(p1, p2) {    

}

let nomeJogador1 = "Player-1";  // usar o nome definido no menu do jogo
let pontosJogador1 = document.getElementById("pontuacao1");

let nomeJogador2 = "Player-2";  // usar o nome definido no menu do jogo
let pontosJogador2 = document.getElementById("pontuacao2");





