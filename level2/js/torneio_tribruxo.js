import MainScene from "./MainScene.js"

const config = {
    width: 800,
    height: 600,
    backgroundColor: '#333333',
    type: Phaser.AUTO,
    parent: 'torneio_tribruxo',
    scene: [MainScene],
    scale: {
        zoom: 1,
    },
    physics: {
        default: 'matter',
        matter: {
            debug:false,
            gravity:{y:0},
        }
    },
    plugins: {
        scene:[
            {
                plugin: PhaserMatterCollisionPlugin,
                key: 'matterCollision',
                mapping: 'matterCollision'
            }
        ]
    }
}

new Phaser.Game(config)