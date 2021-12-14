import PCasa1 from "./players/PCasa1.js"
import PCasa2 from "./players/PCasa2.js"
import PCasa3 from "./players/PCasa3.js"
import PCasa4 from "./players/PCasa4.js"
import Resource from "./Resource.js";

export default class MainScene extends Phaser.Scene {
    constructor(){
        super("MainScene");
    }

    preload(){
        PCasa1.preload(this);
        PCasa2.preload(this);
        PCasa3.preload(this);
        PCasa4.preload(this);
        this.load.image('winner1','assets/images/winner1.png');
        this.load.image('winner2','assets/images/winner2.png');
        this.load.image('tiles','assets/images/RPG Nature Tileset.png');
        this.load.image('fcasa1','assets/images/fcasa1.png');
        this.load.image('fcasa2','assets/images/fcasa2.png');
        this.load.image('fcasa3','assets/images/fcasa3.png');
        this.load.image('fcasa4','assets/images/fcasa4.png');
        this.load.tilemapTiledJSON('map','assets/images/map.json');
        Resource.preload(this);
        window.scene = this;
    }

    create(){
        let min = 1;
        let max = 7;
        let numeroAleatorio = Math.floor(Math.random() * (max - min)) + min;
        let nome1 = 'player1'
        let nome2 = 'player2'
        const map = this.make.tilemap({key: 'map'});
        this.map = map;
        const tileset = map.addTilesetImage('RPG Nature Tileset','tiles',32,32,0,0);
        const ground = map.createStaticLayer('ground',tileset,0,0);
        const collider_walls = map.createStaticLayer('collider_walls',tileset,0,0);
        const uncollider_walls = map.createStaticLayer('uncollider_walls',tileset,0,0);
        collider_walls.setCollisionByProperty({collides:true});
        this.matter.world.convertTilemapLayer(collider_walls);
        this.map.getObjectLayer('Resources').objects.forEach(resource => new Resource({scene:this,resource}));
        this.player1 = new PCasa1({scene:this,x:285,y:550,texture:'casa1',frame:'front_01'},numeroAleatorio,nome1);
        this.player2 = new PCasa4({scene:this,x:580,y:550,texture:'casa4',frame:'front_01'},numeroAleatorio,nome2);
        this.player1.inputKeys = this.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            down: Phaser.Input.Keyboard.KeyCodes.S,
            left: Phaser.Input.Keyboard.KeyCodes.A,
            right: Phaser.Input.Keyboard.KeyCodes.D,
        })
        this.player2.inputKeys = this.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.I,
            down: Phaser.Input.Keyboard.KeyCodes.K,
            left: Phaser.Input.Keyboard.KeyCodes.J,
            right: Phaser.Input.Keyboard.KeyCodes.L,
        })

        this.cameras.main.setBounds(0,0);
        uncollider_walls.depth=1;
    }

    update(){
        this.player1.update()
        this.player2.update()
    }
}