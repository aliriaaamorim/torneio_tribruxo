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
Foi criado um jogo baseado na série de fantasia Harry Potter escrita pela autora britânica J. K. Rowling a qual narra as aventuras de um jovem chamado Harry James Potter, que se descobre um bruxo e que foi convidado para estudar na Escola de Magia e Bruxaria de Hogwarts a qual possui diferentes casas que disputam o torneio tribruxo em um determinado ponto da série. Esta aplicação buscou trazer a diversificação da série para uma interatividade gamer.  


#### **1.1 Objetivo**<br>
Trabalho foi desenvolvido com intuito de criar um jogo na linguagem javaScript que contenha estruturas de dados sendo utilizadas na sua composição. Buscando com a produção adaptabilidade, aprendizado e o trabalho em equipe. 


#### **1.2 Convenções, termos e abreviações**<br>
A lista de siglas utilizadas nesse trabalho são:<br>
ED - Estrutura de Dados;


### **2. Visão Geral do Projeto**<br>
O projeto foi feito através do github e utilizando outras bibliotecas que vão ser demonstradas no decorrer da documentação. O jogo é subdividido em dois levels sendo o primeiro baseado no jogo da memória e o segundo em um jogo de labirinto e um jogo bônus que seria o jogo da cobrinha. Na aplicação web será possível a participação de 2 players sendo cada um indicado por uma casa da escola de magia como: Grifinória na cor vermelho, Lufa-Lufa na cor azul, Corvinal em amarelo e Sonserina com verde.<br>

**Tela de início e escolha dos personagens**<br>
A tela do menu é composta por uma foto com a temática do torneio aliado ao nome do mesmo. Além disso, há o botão de play na primeira cena, que permite a transição para a tela de seleção de personagem. Essa tela é composta por 4 bonecos, cada um representa uma casa do filme (Grifinória, Sonserina, Corvinal e Lufa Lufa), cada player irá escolher um personagem que serão usados no decorrer do jogo. Após a seleção, os jogadores são redirecionados para o jogo da memória, e posteriormente para a prova final no labirinto. 

**Jogo da memória**<br>
Este seria o primeiro level do torneio Tribruxo. Consistindo em um jogo de 30 cartas que tem por intuito achar os pares de cartas iguais. Caso seja encontrado as cartas iguais o player poderá fazer uma nova jogada, mas caso encontre cartas diferentes o mesmo perde a vez passando a mesma para o outro jogador. 

**Jogo do Labirinto**<br>
Para o segundo level tem-se o jogo do Labirinto que consiste na disputa entre jogadodores vencedores do level 1. O qual os players terão que procurar pelo objeto, dentre os objetos distribuidos no labirinto. Consquistando a vitória o player que achar o objeto correto primeiro. 

A criação do labirinto foi através do programa windowns gratuito chamado Tiled que auxilia na criação do mapa. Utilizou-se frames de personagens prontos retirado do site a seguir https://itch.io/game-assets/tag-sprites com algumas adaptações. E a movimentação do boneco foi feita através do site seguinte https://gammafp.com/ que é uma ferramenta auxiliadora para criar animações e tudo mais. Válido salientar o uso da biblioteca Phaser na criação do jogo.

No código possui um arquivo chamado "index.html" em que o mesmo faz a execução e o chamado dos métodos e funções dos arquivos '.js'. No arquivo torneio_tribruxo foi construído a partir de configurações básicas da biblioteca Phaser. O arquivo MainScene que faz o carregamento de todo o mapa da aplicação, dos personagens e todos os outros recursos usados no jogo. O resource que fará o papel de capturar os objetos coletáveis. Arquivo Player contendo a casa correspondente da escola de magia.

Para jogar pode ser utilizado as teclas W, A, S e D para o primeiro player e para o segundo I, J, K e L. Na qual as teclas W e I fazem o movimento para cima, já S e K movimentam o boneco para baixo, juntamente com os botões A e J que fazem o deslocamento para esquerda e os dois últimos que são o D e o L para a direita. 

**Jogo da cobrinha**<br>

**Estrutura de dados**<br>

### **4. Requisitos necessários na aplicação**<br>
Aplicação busca ser rápida, intuitiva e interativa. Funcionando no modelo web service na linguagem JavaScript, não precisando do armazenamento de dados pessoais. 
Play , seleção dos bonecos

### **5. Planejamento**<br>
A princípio foi pensado e dividido entre os membros da equipe a implementação da tela de Inicio e menu, do jogo da Memória, jogo de Labirinto, jogo da cobrinha e documentação. Com reuniões em boa parte semanais e com interação pelas mídias sociais a medida que um grande avanço ocorria.  

### **6. Conclusão**<br>
Conclui-se que o objetivo deste trabalho foi alcançado tendo em vista que conseguiu-se elaborar jogos em Javascript. Com os mesmos utilizando de estruturas de dados como priority queue, stack, dentre outras que compuseram os códigos para que o torneio funcionasse como um todo, além de trazer a série para o mundo gamer de uma forma saudosa e interativa. 

### **Referências**<br>


# MANUAL PARA JOGAR

## NO JOGO DA MEMÓRIA
**Quantos jogadores**
2 jogadores

**Objetivo**
Vence aquele que achar mais pares de cartas iguais.

**Botões**
Através do clique do botão esquerdo do mouse.

## NO JOGO DO LABIRINTO
**Quantos jogadores**
2 jogadores

**Objetivo**
Com os bonecos encontrar o objeto correto dentre os objetos espalhados pelo mapa. Ganha o player que o achar primeiro.

**Botões**
Para movimentar o player 1: W - cima, A - esquerda, S - baixo e D - direita.
Para movimentar o player 2: I - cima, J - esquerda, K - baixo e L - direita.
