class Scene1 extends Phaser.Scene {
    constructor() {
        super('menu');
    }

    preload()
    {
        this.load.image("tri_name", "assets/images/name.jpg");
               
        this.load.image("background", "assets/images/background.jpeg");

        this.load.spritesheet("hp_char", "assets/images/chars/casa1/front_01.png", {
            frameHeight: 32,
            frameWidth: 32
        });

        this.load.audio("theme_song", "assets/audios/theme_song.mp3");
    } 
    create() {

        this.add.image(400, 300, "background");

        this.add.image(400, 70, "tri_name");


        let hpSprite = this.add.sprite(100, 100, "hp_char");
        hpSprite.setVisible(false);
        /*'#0f0' - green    
        '#ffffff' - black
        '#ffff00' - yellow
        '#ffffff' - white
        '#ff00ff' - purple
        */
        let style = {font: "40px Arial", fill: '#ffffff', align: "center"};

        //Play Button
        let playButton = this.add.text(330, 450, "Play", style)
        .setInteractive()
        .on("pointerover", () => {
            playButton.setStyle({fill: '#931C22'});
            hpSprite.setVisible(true);
            hpSprite.x = 310;
            hpSprite.y = 470;
        })
        .on("pointerout", () => {
            playButton.setStyle({fill: '#ffffff'});
            hpSprite.setVisible(false);
        })
        .on("pointerdown", () => {this.scene.start('play');});
        //Play Button
    }
    update() {}
}
