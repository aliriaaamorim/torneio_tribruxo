class Scene2 extends Phaser.Scene {
    constructor() {
        super('play');
    }
    preload()
    {
        this.load.image("tri_name", "assets/images/name.jpg");
        
        this.load.image("background", "assets/images/background.jpeg");

        this.load.spritesheet("hp_char", "assets/images/chars/casa1/front_01.png", {
            frameHeight: 32,
            frameWidth: 32
        });

        this.load.spritesheet("her_char", "assets/images/chars/casa2/front_01.png", {
            frameHeight: 32,
            frameWidth: 32
        });

        this.load.spritesheet("mal_char", "assets/images/chars/casa3/front_01.png", {
            frameHeight: 32,
            frameWidth: 32
        });

        this.load.spritesheet("ron_char", "assets/images/chars/casa4/front_01.png", {
            frameHeight: 32,
            frameWidth: 32
        });

    } 
    create() {
        this.add.image(400, 300, "background");

        this.add.image(400, 70, "tri_name");

        let style = {font: "40px Arial", fill: '#ffffff', align: "center"};

        //let player1 = ?, let player2 = ?, let player3 = ?, let player4 = ?,

        let playerNum = 1;
        //let char = 0;
        let charSelection = this.add.text(270, 200, `Select Player ${playerNum}`, style);

        let confirmButton = this.add.text(335, 420, "Next", style);
        confirmButton.setVisible(false)
        .setInteractive()
        .on("pointerover", () => {
            confirmButton.setScale(1.2);
        })
        .on("pointerout", () => {
            confirmButton.setScale(1);
        })
        .on("pointerdown", () => {
            if (playerNum == 2)
            {
                //this.scene.start("fase1");
            } else {
                playerNum++;
                charSelection.setText(`Select Player ${playerNum}`);
            }
            //m[playerNum] = char
        });

        //char selection
        let hpSprite = this.add.sprite(250, 350, "hp_char")
        .setInteractive()
        .setScale(2)
        .on("pointerover", () => {
            hpSprite.setScale(2.5);        
        })
        .on("pointerout", () => {
            hpSprite.setScale(2);
        })
        .on("pointerdown", () => {
            confirmButton.setStyle({fill:'#f84e4e'});
            confirmButton.setVisible(true);
            hpSprite.setScale(2.5);
            if (playerNum == 2)
            {
                confirmButton.setText("Start");
            } 
            //char = 1;
            //seta o personagem como harry potter
        });

        let herSprite = this.add.sprite(350, 350, "her_char")
        .setInteractive()
        .setScale(2)
        .on("pointerover", () => {
            herSprite.setScale(2.5);        
        })
        .on("pointerout", () => {
            herSprite.setScale(2);
        })
        .on("pointerdown", () => {
            confirmButton.setStyle({fill:'#ffff00'});
            confirmButton.setVisible(true);
            herSprite.setScale(2.5);
            //seta o personagem como hermione
            if (playerNum == 2)
            {
                //char = 2;
                confirmButton.setText("Start");
            } 
        });

        let malSprite = this.add.sprite(450, 350, "mal_char")
        .setInteractive()
        .setScale(2)
        .on("pointerover", () => {
            malSprite.setScale(2.5);       
        })
        .on("pointerout", () => {
            malSprite.setScale(2);
        })
        .on("pointerdown", () => {
            confirmButton.setStyle({fill:'#0f0'});
            confirmButton.setVisible(true);
            malSprite.setScale(2.5);
            //seta o personagem como malfoy
            if (playerNum == 2)
            {
                confirmButton.setText("Start");
            }
            //char = 3;
        });

        let ronSprite = this.add.sprite(550, 350, "ron_char")
        .setInteractive()
        .setScale(2)
        .on("pointerover", () => {
            ronSprite.setScale(2.5);       
        })
        .on("pointerout", () => {
            ronSprite.setScale(2);
        })
        .on("pointerdown", () => {
            confirmButton.setStyle({fill:'#4388f6'});
            confirmButton.setVisible(true);
            ronSprite.setScale(2.5);
            //seta o personagem como rony
            if (playerNum == 2)
            {
                confirmButton.setText("Start");
            }
            //char = 4; 
        });
        //char selection
    }
    update() {}
}