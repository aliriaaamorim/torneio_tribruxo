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
O projeto foi feito desenvolvido com o uso do github, foi escrito na linguagem JavaScript e faz uso da biblioteca Phaser 3 e outras que serão demonstradas ao longo da documentação. A Aplicação é composta por dois jogos, sendo eles: Jogo da Memória e Jogo do labirinto. Além disso, ela possui um modelo web service no qual será possível a participação de 2 players. Contendo o menu que permitirá com que o usuário seja redirecionado às fases de escolha. A aplicação possui a vantagem de ser rápida, intuitiva e interativa. Ademais, ela não faz uso do armazenamento de dados pessoais e banco de dados. 


#### **2.2 Planejamento geral**<br>
Para uma melhor dinâmica entre os membros da equipe, foi primordial a divisão de tarefas, que permitiu a execução de um trabalho mais eficiente. As tarefas ficaram divididas da seguinte forma: implementação do menu, jogo da memória, desafio do Labirinto e documentação. Ademais, haviam reuniões recorrentes e constante interação entre os membros da equipe para acrescentar na eficiência do jogo ao máximo.<br>


**Tela de início e escolha dos personagens**<br>
A tela do menu é composta por uma foto com a temática do torneio aliado ao nome do mesmo. Além disso, há o botão de play na primeira cena, que permite a transição para a tela de seleção de jogo. Essa tela é composta por 2 imagens animadas, cada um representando um jogo, onde cada player poderá escolher entre o jogo da memória e o jogo de labirinto. Após a seleção, os jogadores são redirecionados para a aplicação e podem interagir. Logo após a finalização retorna para tela com o play. 


**Estrutura de dados**<br>

Fila
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
DEVMEDIA.Código referência para função embaralharCartas() no arquivo jogoDaMemoria.js Disponível em < https://www.devmedia.com.br/embaralhando-o-conteudo-de-vetores-em-java/26382 > Acessado em 8 de Dezembro.

ALVARADO, Francisco Pereira. Disponível em < https://gammafp.com/ > Acessado em 1 de Novembro.


<br>
<br>
<br>
<br>
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
