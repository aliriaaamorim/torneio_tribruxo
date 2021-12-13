var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'hp-menu',
    scene: [ Scene1, Scene2 ]
};

var game = new Phaser.Game(config);