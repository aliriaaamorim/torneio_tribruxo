// Primeira fase do jogo

const placar = document.querySelector("#placar");
const matriz = document.querySelector("#matriz_jogo");
let imagens = [
    'card_01.png', 'card_01.png',
    'card_02.png', 'card_02.png',
    'card_03.png', 'card_03.png',
    'card_04.jpg', 'card_04.jpg',
    'card_05.png', 'card_05.png',
    'card_06.png', 'card_06.png',
    'card_07.jpg', 'card_07.jpg',
    'card_08.jpg', 'card_08.jpg',
    'card_09.jpg', 'card_09.jpg',
    'card_10.png', 'card_10.png',
    'card_11.png', 'card_11.png',
    'card_12.png', 'card_12.png',
    'card_13.png', 'card_13.png',
    'card_14.png', 'card_14.png',
    'card_15.png', 'card_15.png',

]

/* randomizar elementos do array 'imagens' */

function embaralharCartas(lista) {  //código original(java): devmedia

    for (let itemLista = 0; itemLista < (lista.length) -1 ; itemLista++) {
        let aleatorio = Math.floor(Math.random()*itemLista);
        let listaTemp = lista[itemLista];
        lista[itemLista] = lista[aleatorio];
        lista[aleatorio] = listaTemp;
    }

    return lista;
}

imagens = embaralharCartas(imagens);

// recebe um Template String para atribuicao
/// de cada carta a uma clase HTML
let divCarta = '';

// associa cada imagem a uma capa 
imagens.forEach(img => {
    divCarta += `
        <div class="carta" data-id="${img}">
            <img class ="frente" src="img/${img}" height="90" width="67">
            <img class ="verso" src="img/card_capa.jpg" height="90" width="67">
        </div>
    `
});

matriz.innerHTML = divCarta;

const cartas = document.querySelectorAll('.carta');

//////////////////////////////////////////
///////// Definicao das variaveis
///////// de nome e pontosJogador1 dos 
///////// jogadores

const nomeJogador1 = "Jogador1";
const nomeJogador2 = "Jogador2";
let pontosJogador1 = 0;
let pontosJogador2 = 0;
let vezJogador1 = true;


const nomeJ1_html = document.getElementById("nomeJogador1"); 
const nomeJ2_html = document.getElementById("nomeJogador2");
const pontosJ1_html = document.getElementById("pontuacao1"); 
const pontosJ2_html = document.getElementById("pontuacao2");

nomeJ1_html.innerHTML = nomeJogador1;
nomeJ2_html.innerHTML = nomeJogador2;
pontosJ1_html.innerText = pontosJogador1;
pontosJ2_html.innerText = pontosJogador2; 



/////////////////////////////////////////////
// Variaveis para as cartas em ordem de click
let carta1, carta2;

/////////////////////////////////////////////
// Controle de cartas abertas por vez (2)
let bloquar = false; 

//////////////////////////////////////////////////////
// Controle de cartas viradas para finalizacao do jogo
let cartasViradas = 0; //

/////////////////////////////////////////////
// Controle de vez de jogada para cada player


///////////////////////////////////////////////////
///////// FUNCAO PARA VIRAR CARTA AO CLICAR ///////
///  chama a classe 'abrir' no arquivo "style.css"

function virarCarta() {
    if (bloquar) return false;
    
    /// chama a classe 'abrir' no arquivo "style.css"
    this.classList.add('abrir'); //Rotacao das cartas

    /// verifica se ja existem cartas abertas
    // se false 'carta1' recebe a carta clicada
    if (!carta1) {
        carta1 = this;
        return false;
    }

    /// se true 'carta2' recebe a carta clicada
    carta2 = this;

    // chama a funcao 'comparar'
    comparar();
    
    //exibe mensagem de fim de jogo, caso todas as cartas tenham sido abertas
    mudarCena(); 

}

function atribuirPontos(){
    if(vezJogador1){
        if(carta1.dataset.id === 'card_13.png'){
            pontosJogador1 += 3;
            pontosJ1_html.innerText = pontosJogador1;
        } else if(carta1.dataset.id === 'card_14.png' || carta1.dataset.id == 'card_15.png'){
            pontosJogador1 += 5;
            pontosJ1_html.innerText = pontosJogador1;

        } else{
            pontosJogador1 ++;
            pontosJ1_html.innerText = pontosJogador1;

        } 
     } else{
        if(carta1.dataset.id === 'card_13.png'){
            pontosJogador2 += 3;
            pontosJ2_html.innerText = pontosJogador2;
        } else if(carta1.dataset.id === 'card_14.png' || carta1.dataset.id == 'card_15.png'){
            pontosJogador2 += 5;
            pontosJ2_html.innerText = pontosJogador2;

        } else{
            pontosJogador2 ++;
            pontosJ2_html.innerText = pontosJogador2;
        }
       
    }

}

function pulaVez() {
    vezJogador1 = !vezJogador1;
}



//////////////////////////////////////////////////////
///////// FUNCAO PARA COMPARAR CARTAS CLICADAS ///////
function comparar(){

    // compara o identificador das cartas clicadas
    /// a partir da atribuicao em 'divCarta':60
    let cartasIguais = carta1.dataset.id === carta2.dataset.id;
    
    if (cartasIguais){
        cartasViradas++; // incrementa a variavel cartasViradas para registrar o fim do jogo
        atribuirPontos();
        limparVariavel(cartasIguais); // chama a funcao 'limparvariavel' com o parametro 'cartasIguais' = true

    } else{
        pulaVez();
        desabilitarCartas();
    }

    // chama a funcao 'desabilitarCartas', caso os
    ///identificadores sejam diferentes
}

///////////////////////////////////////////////////////////////
///////// FUNCAO DESABILITAR CARTAS NAO CORRESPONDENTES ///////

function desabilitarCartas(){
    bloquar = true;
    setTimeout(() => {
        carta1.classList.remove('abrir');
        carta2.classList.remove('abrir');

        limparVariavel();

    }, 1000);
}

////////////////////////////////////////////////////////////
///////// FUNCAO DESVIRAR CARTAS NAO CORRESPONDENTES ///////

function limparVariavel(cartasIguais = false){

    //caso sejam iguais, as cartas permanecem abertas
    if(cartasIguais){
        carta1.removeEventListener('click', virarCarta);
        carta2.removeEventListener('click', virarCarta);
    }

    // atrubui valores default para 'carta1' e 'carta2'
    /// para receber as novas cartas
    carta1 = null;
    carta2 = null;
    bloquar = false;
}


function mudarCena(){
    if (cartasViradas == 15){
        alert("Fim de jogo");
      } 
  }

cartas.forEach(item => item.addEventListener('click', virarCarta));



  




