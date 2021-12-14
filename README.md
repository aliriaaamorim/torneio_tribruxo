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
Foi criado um jogo baseado na série de fantasia Harry Potter escrita pela autora britânica J. K. Rowling a qual narra as aventuras de um jovem chamado Harry James Potter, que se descobre um bruxo e que foi convidado para estudar na Escola de Magia e Bruxaria de Hogwarts a qual possui diferentes casas que disputam o torneio tribruxo em um determinado ponto da série. Esta aplicação buscou trazer a diversificação da série para uma interatividade gamer através do jogo da memória e do jodo de labirinto.   


#### **1.1 Objetivo**<br>
Trabalho foi desenvolvido com intuito de criar um jogo na linguagem JavaScript que contenha estruturas de dados sendo utilizadas na sua composição. Buscando com a produção adaptabilidade, aprendizado e o trabalho em equipe. 


### **2. Desenvolvimento**<br>

#### **2.1 Visão Geral do Projeto**<br>
O projeto foi feito através do github na linguagem JavaScript e utilizando outras bibliotecas que vão ser demonstradas no decorrer da documentação. A aplicação possui dois jogos atualmente o primeiro que é jogo da memória e o segundo o jogo de labirinto. Sendo um modelo web service no qual será possível a participação de 2 players. Contendo uma tela de início, após uma segunda tela para selecionar os jogos. Aplicação busca ser rápida, intuitiva e interativa, não precisando do armazenamento de dados pessoais nem de um banco de dados. 


#### **2.2 Planejamento geral**<br>
A princípio foi pensado e dividido entre os membros da equipe a implementação da tela de Inicio, tela de selecionar jogo, do jogo da Memória, do jogo de Labirinto e documentação. Com reuniões em boa parte semanais e com interação pelas mídias sociais a medida que um grande avanço ocorria.<br>


**Tela de início e escolha dos personagens**<br>
A tela do menu é composta por uma foto com a temática do torneio aliado ao nome do mesmo. Além disso, há o botão de play na primeira cena, que permite a transição para a tela de seleção de jogo. Essa tela é composta por 2 imagens animadas, cada um representando um jogo, onde cada player poderá escolher entre o jogo da memória e o jogo de labirinto. Após a seleção, os jogadores são redirecionados para a aplicação e podem interagir. Logo após a finalização retorna para tela com o play. 


**Estrutura de dados**<br>
queue
- Queue (Menu para seleção de fase)
-  É primordial entender o funcionamento da fila antes de explicar o funcionamento dela dentro do jogo. A fila é uma estrutura FIFO(primeiro a entrar, primeiro a sair), além disso ela é uma estrutura que nos permite acessar o primeiro termo dela (o termo que está na frente), e fazer as operações push e pop em tempo constante. Essa estrutura foi usada para o menu de seleção de fase do jogo, pois permitia criar dinamicidade na escolha do player em relação a o que pretende jogar, ou seja, é possível trocar de jogo mesmo quando ele já havia clicado em outro. Assim que o usuário clica em algum jogo, há a verificação se ele clicou em algum outro jogo antes, caso tenha clicado retiraremos esse jogo da fila e colocaremos o novo jogo que o mesmo pretende jogar, assim, quando ele decidir realmente o que quer jogar, há a verificação do jogo que está na frente da fila e posteriormente é iniciado.

fila
- Fila (Armazenamento do jogo que será iniciado)
-  É primordial entender o funcionamento da fila antes de explicar o funcionamento dela dentro do jogo. A fila é uma estrutura FIFO(primeiro a entrar, primeiro a sair), além disso ela é uma estrutura que nos permite acessar o primeiro termo dela (o termo que está na frente), e fazer as operações push e pop em tempo constante. Essa estrutura foi usada para o menu de seleção de fase do jogo, pois permitia criar dinamicidade na escolha do player em relação a o que pretende jogar, ou seja, é possível trocar de jogo mesmo quando ele já havia clicado em outro. Assim que o usuário clica em algum jogo, há a verificação se ele clicou em algum outro jogo antes, caso tenha clicado retiraremos esse jogo da fila e colocaremos o novo jogo que o mesmo pretende jogar, assim, quando ele decidir realmente o que quer jogar, há a verificação do jogo que está na frente da fila e posteriormente é iniciado.

stack

**Jogo da memória**<br>
Este seria o primeiro level do torneio Tribruxo. Consistindo em um jogo de 30 cartas que tem por intuito achar os pares de cartas iguais. Caso seja encontrado as cartas iguais o player poderá fazer uma nova jogada, mas caso encontre cartas diferentes o mesmo perde a vez passando a mesma para o outro jogador. 

**Jogo do Labirinto**<br>
Para o segundo level tem-se o jogo do Labirinto que consiste na disputa entre jogadodores vencedores do level 1. O qual os players terão que procurar pelo objeto, dentre os objetos distribuidos no labirinto. Consquistando a vitória o player que achar o objeto correto primeiro. 

A criação do labirinto foi através do programa windowns gratuito chamado Tiled que auxilia na criação do mapa. Utilizou-se frames de personagens prontos retirado do site a seguir https://itch.io/game-assets/tag-sprites com algumas adaptações. E a movimentação do boneco foi feita através do site seguinte https://gammafp.com/ que é uma ferramenta auxiliadora para criar animações e tudo mais. Válido salientar o uso da biblioteca Phaser na criação do jogo.

No código possui um arquivo chamado "index.html" em que o mesmo faz a execução e o chamado dos métodos e funções dos arquivos '.js'. No arquivo torneio_tribruxo foi construído a partir de configurações básicas da biblioteca Phaser. O arquivo MainScene que faz o carregamento de todo o mapa da aplicação, dos personagens e todos os outros recursos usados no jogo. O resource que fará o papel de capturar os objetos coletáveis. Arquivo Player contendo a casa correspondente da escola de magia.

Para jogar pode ser utilizado as teclas W, A, S e D para o primeiro player e para o segundo I, J, K e L. Na qual as teclas W e I fazem o movimento para cima, já S e K movimentam o boneco para baixo, juntamente com os botões A e J que fazem o deslocamento para esquerda e os dois últimos que são o D e o L para a direita. 

### **3. Conclusão**<br>
Conclui-se que o objetivo deste trabalho foi alcançado tendo em vista que conseguiu-se elaborar jogos em Javascript. Com os mesmos utilizando de estruturas de dados como priority queue, stack, dentre outras que compuseram os códigos para que o torneio funcionasse como um todo, além de trazer a série para o mundo gamer de uma forma saudosa e interativa. 

### **Referências**<br>





# MANUAL PARA JOGAR

## NO JOGO DA MEMÓRIA

### > **Quantos jogadores**<br>
2 jogadores

### > **Objetivo**<br>
Vence aquele que achar mais pares de cartas iguais.

### > **Botões**<br>
Através do clique do botão esquerdo do mouse.

## NO JOGO DO LABIRINTO

### > **Quantos jogadores**<br>
2 jogadores

### > **Objetivo**<br>
Com os bonecos encontrar o objeto correto dentre os objetos espalhados pelo mapa. Ganha o player que o achar primeiro.

### > **Botões**<br>
Para movimentar o player 1: W - cima, A - esquerda, S - baixo e D - direita.<br>
Para movimentar o player 2: I - cima, J - esquerda, K - baixo e L - direita.
