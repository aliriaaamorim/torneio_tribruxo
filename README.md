# Projeto Torneio Tribruxo
## UNIVERSIDADE FEDERAL DE SERGIPE
### Departamento de Computação(DCOMP)
### Matéria: Estrutura de dados
### Prof: Hendrik Macedo


### **COMPONENTES**<br>
ALIRIA DE SANTANA DE AMORIM CRUZ<br>
ENDY JOSE ALEXANDRE MELO DOS SANTOS<br>
RAI RAFAEL SANTOS SILVA<br>
RODRIGO ALVES ANDRADE<br>
WILLIAM KEVIM FONTES GARANGAU<br>


### **1. Introdução**<br>
Foi criado um jogo baseado na série de fantasia Harry Potter escrita pela autora britânica J. K. Rowling a qual narra as aventuras de um jovem chamado Harry James Potter, que se descobre um bruxo, e posteriormente é convidado para estudar na Escola de Magia e Bruxaria de Hogwarts. Além disso, a escola possui diferentes casas que disputam o torneio tribruxo (torneio para testar a capacidade do aluno no âmbito de uso de magias na hora correta. Essa aplicação tem o intuito de relembrar os componentes presentes no filme de harry potter, além de criar uma dinâmica de competitividade para o usuário, permitindo com que ele se divirta com as temáticas do filme.     


#### **1.1 Objetivo**<br>
A implementação desse jogo foi direcionada a o uso de estrutura de dados, e como ela pode ser útil no desenvolvimento de uma aplicação. As estruturas se mostram primordiais para a facilitação e correção de algumas adversidades. Além disso, há o aprendizado de uma nova linguagem juntamente com uma biblioteca de desenvolvimento de jogos, JavaScript e Phaser 3 respectivamente. Após a junção do uso das estruturas com os recursos que a linguagem e a biblioteca fornece, foi possível a criação de uma aplicação fluida e divertida, proporcionando uma ótima experiência para o usuário.


### **2. Desenvolvimento**<br>

#### **2.1 Visão Geral do Projeto**<br>
O projeto foi feito através do github na linguagem JavaScript e utilizando outras bibliotecas que vão ser demonstradas no decorrer da documentação. A aplicação possui dois jogos atualmente o primeiro que é jogo da memória e o segundo o jogo de labirinto. Sendo um modelo web service no qual será possível a participação de 2 players. Contendo uma tela de início, após uma segunda tela para selecionar os jogos. Aplicação busca ser rápida, intuitiva e interativa, não precisando do armazenamento de dados pessoais nem de um banco de dados. 


#### **2.2 Planejamento geral**<br>
A princípio foi pensado e dividido entre os membros da equipe a implementação da tela de Inicio, tela de selecionar jogo, do jogo da Memória, do jogo de Labirinto e documentação. Com reuniões em boa parte semanais e com interação pelas mídias sociais a medida que um grande avanço ocorria.<br>


#### **2.3 Progresso do projeto**<br>

**Tela de início e escolha do jogo**<br>
A tela do menu é composta por uma foto com a temática do torneio aliado ao nome do mesmo. Além disso, há o botão de play na primeira cena, que permite a transição para a tela de seleção de jogo. Essa tela é composta por 2 imagens animadas, cada um representando um jogo, onde cada player poderá escolher entre o jogo da memória e o jogo de labirinto. Após a seleção, os jogadores são redirecionados para a aplicação e podem interagir. Logo após a finalização retorna para tela com o play. 


**Estrutura de dados**<br>

- Fila (Armazenamento do jogo que será iniciado)
É primordial entender o funcionamento da fila antes de explicar o funcionamento dela dentro do jogo. A fila é uma estrutura FIFO(primeiro a entrar, primeiro a sair), além disso ela é uma estrutura que nos permite acessar o primeiro termo dela (o termo que está na frente), e fazer as operações push e pop em tempo constante. Essa estrutura foi usada para o menu de seleção de fase do jogo, pois permitia criar dinamicidade na escolha do player em relação a o que pretende jogar, ou seja, é possível trocar de jogo mesmo quando ele já havia clicado em outro. Assim que o usuário clica em algum jogo, há a verificação se ele clicou em algum outro jogo antes, caso tenha clicado retiraremos esse jogo da fila e colocaremos o novo jogo que o mesmo pretende jogar, assim, quando ele decidir realmente o que quer jogar, há a verificação do jogo que está na frente da fila e posteriormente é iniciado.

- Stack (Comparação das cartas no Jogo da Memória)
Uma vez que as cartas são abertas durante a jogada, é necessário compará-las para: atrubuir pontuação ao jogador, caso sejam iguais, ou alternar a vez dos jogadores, caso sejam diferentes. Para essa comparação é utilizada a estrutura de dados pilha (Stack). São instanciados dois objetos do tipo "Stack", pilha1 e pilha2. Quando a primeira carta é selecionada pelo jogador na rodada, esta é armazenada na primeira pilha por meio da função "pop". O mesmo processo ocorre com a segunda carta aberta na rodada. A função "peek()" da pilha seleciona o elemento no topo das pilhas (nesse caso, as cartas selecionadas) e compara os identificadores de cada uma. Se as cartas correspondem, ambas são armazenadas em suas respectivas pilhas. Caso seja diferentes, as cartas são retiradas da pilha por meio da função "pop". O processo se repete ao longo do jogo e o tamanho da fila é usado para verifiação do fim do jogo (se o tamanho da pilha corresponder ao total de cartas no jogo, a aplicação é finalizada).

**Jogo da memória**<br>
Este seria o primeiro jogo do torneio Tribruxo. Consistindo em um jogo de 30 cartas que tem por intuito achar os pares de cartas iguais. Caso seja encontrado as cartas iguais o player poderá fazer uma nova jogada, mas caso encontre cartas diferentes o mesmo perde a vez passando a mesma para o outro jogador. 

**Jogo do Labirinto**<br>
Para o segundo jogo tem-se o jogo do Labirinto que consiste na disputa entre dois jogadores. No qual os players terão que procurar pelo objeto, dentre os objetos distribuidos no labirinto. Consquistando a vitória o player que achar o objeto correto primeiro. 

A criação do labirinto foi através do programa windowns gratuito chamado Tiled que auxilia na criação do mapa. Utilizou-se frames de personagens prontos retirado do site a seguir https://itch.io/game-assets/tag-sprites com algumas adaptações. E a movimentação do boneco foi feita através do site seguinte https://gammafp.com/ que é uma ferramenta auxiliadora para criar animações e tudo mais. Válido salientar o uso da biblioteca Phaser na criação do jogo.

No código possui um arquivo chamado "index.html" em que o mesmo faz a execução e o chamado dos métodos e funções dos arquivos '.js'. No arquivo torneio_tribruxo foi construído a partir de configurações básicas da biblioteca Phaser. O arquivo MainScene que faz o carregamento de todo o mapa da aplicação, dos personagens e todos os outros recursos usados no jogo. O resource que fará o papel de capturar os objetos coletáveis. A pasta `players` contendo a casa correspondente da escola de magia. O código fonte do jogo se encontra na pasta level2.


### **Manual para jogar**<br>
Link para funcionamneto do jogo: https://www.youtube.com/watch?v=plqWoYLUt8E

#### - NO JOGO DA MEMÓRIA

##### > **Quantos jogadores**<br>
2 jogadores

##### > **Objetivo**<br>
Vence aquele que achar mais pares de cartas iguais.

##### > **Botões**<br>
Através do clique do botão esquerdo do mouse.

#### - NO JOGO DO LABIRINTO

##### > **Quantos jogadores**<br>
2 jogadores

##### > **Objetivo**<br>
Com os bonecos encontrar o objeto correto dentre os objetos espalhados pelo mapa. Ganha o player que o achar primeiro.

##### > **Botões**<br>
Para movimentar o player 1: W - cima, A - esquerda, S - baixo e D - direita.<br>
Para movimentar o player 2: I - cima, J - esquerda, K - baixo e L - direita.


### **3. Conclusão**<br>
Conclui-se que o objetivo deste trabalho foi alcançado tendo em vista que conseguiu-se elaborar jogos em Javascript. Com os mesmos utilizando de estruturas de dados como priority queue, stack, dentre outras que compuseram os códigos para que o torneio funcionasse como um todo, além de trazer a série para o mundo gamer de uma forma saudosa e interativa. 

### **Referências**<br>
DEVMEDIA.Código referência para função embaralharCartas() no arquivo jogoDaMemoria.js Disponível em < https://www.devmedia.com.br/embaralhando-o-conteudo-de-vetores-em-java/26382 > Acessado em 8 de Dezembro.

ALVARADO, Francisco Pereira. Disponível em < https://gammafp.com/ > Acessado em 1 de Novembro.

Curso utilizado como base para desenvolvimento do jogo: https://www.udemy.com/course/create-a-survival-game-in-javascript-with-phaser-3-in-2020/
