class Scene2 extends Phaser.Scene {
    constructor() {
        super('play');
    }
    preload()
    {
        this.load.image("tri_name", "assets/images/name.jpg");
        
        this.load.image("background", "assets/images/background.jpeg");

        this.load.image("fase1", "assets/images/fase1.png");
        
        this.load.image("fase2", "assets/images/fase2.png");

    } 
    create() {

        this.add.image(400, 300, "background");

        this.add.image(400, 70, "tri_name");

        let style = {font: "40px Arial", fill: '#ffffff', align: "center"};

        //let player1 = ?, let player2 = ?, let player3 = ?, let player4 = ?,

        class Node {
            constructor(value) {
              this.value = value;
              this.next = null;
            }
        }
          
          // Cria uma fila
          
          class Queue {
            constructor() {
              this.head = null;
              this.tail = null;
              this.tamanho = 0;
        }
          
            // Coloca uma pessoa na fila
          
            enqueue(value) {
              const node = new Node(value);
          
              if (this.head) {
                this.tail.next = node;
                this.tail = node;
              } else {
                this.head = node;
                this.tail = node;
              }
          
              this.tamanho++;
            }
          
            // Tira uma pessoa da fila
          
            dequeue() {
              const atual = this.head;
              this.head = this.head.next;
              this.tamanho--;
          
              return atual.value;
            }
          
            // Checa se esta vazio
          
            empty() {
              return this.tamanho === 0;
            }
        
            peek()
            {
                return this.head.value;
            }
          
            // Retorna o tamanho
          
            size() {
              return this.tamanho;
            }
        }

        let q = new Queue();

        let confirmButton = this.add.text(335, 420, "Start", style);
        confirmButton.setVisible(false)
        .setInteractive()
        .on("pointerover", () => {
            confirmButton.setScale(1.2);
            confirmButton.setStyle({fill:'#0f0'});
        })
        .on("pointerout", () => {
            confirmButton.setScale(1);
            confirmButton.setStyle({fill:'#ffffff'});
        })
        .on("pointerdown", () => {
            if (q.peek() === 1)
            {
                window.location.href = "../jogoDaMemoria/level1.html";
            }
            else if (q.peek() === 2)
            {
                window.location.href = "../level2/index.html";
            }
        });

        let fase1Button = this.add.image(270, 300, "fase1")
        .setInteractive()
        fase1Button.setScale(0.3)
        .on("pointerover", () => {
            fase1Button.setScale(0.4);
        })
        .on("pointerout", () => {
            fase1Button.setScale(0.3);
        })
        .on("pointerdown", () => {
            confirmButton.setVisible(true);
            if(!q.empty())
            {
                q.dequeue();
            }
            q.enqueue(1);
        });

        let fase2Button = this.add.image(510, 300, "fase2")
        .setInteractive()
        fase2Button.setScale(0.28)
        .on("pointerover", () => {
            fase2Button.setScale(0.35);
        })
        .on("pointerout", () => {
            fase2Button.setScale(0.28);
        })
        .on("pointerdown", () => {
            confirmButton.setVisible(true);
            if(!q.empty())
            {
                q.dequeue();
            }
            q.enqueue(2);
        });
    }
    update() {}
}
