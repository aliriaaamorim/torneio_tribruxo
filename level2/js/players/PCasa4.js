export default class PCasa4 extends Phaser.Physics.Matter.Sprite {
    constructor(data,numAleat,nome){
        let {scene,x,y,texture,frame} = data;
        super(scene.matter.world,x,y,texture,frame);
        this.touching = [];
        this.scene.add.existing(this);
        this.numeroAleatorio = numAleat
        this.nome = nome;
        if (this.nome == 'player1'){
            this.personagem = this.scene.add.image(30,30,'fcasa4');
            this.personagem.depth=50;
            this.scene.add.text(30,50,'Player 1');
        }
        else if (this.nome == 'player2'){
            this.personagem = this.scene.add.image(770,30,'fcasa4');
            this.personagem.depth=50;
            this.scene.add.text(720,50,'Player 2');
        }

        // Colisor redondo
        const posY = this.y;
        const {Body,Bodies} = Phaser.Physics.Matter.Matter;
        var playerCollider = Bodies.circle(this.x,this.y+10,15,{isSensor:false,label:'playerCollider'});
        var playerSensor = Bodies.circle(this.x,this.y,30,{isSensor:true, label:'playerSensor'});
        const compoundBody = Body.create({
            parts:[playerCollider,playerSensor],
            frictionAir: 0.35,
        });
        this.setExistingBody(compoundBody)
        this.setFixedRotation(playerCollider);
        this.CreatePickupCollisions(playerSensor);
    }

    static preload(scene){
        scene.load.atlas('casa4','assets/images/casa4/casa4.png','assets/images/casa4/casa4_atlas.json')
        scene.load.animation('casa4_anim','assets/images/casa4/casa4_anim.json');
    }

    get velocity() {
        return this.body.velocity;
    }

    update(){
        const speed = 2.5;
        let playerVelocity = new Phaser.Math.Vector2();
        if (this.inputKeys.left.isDown){
            playerVelocity.x = -1;
            this.anims.play('casa4_left',true);
        } else if (this.inputKeys.right.isDown){
            playerVelocity.x = 1;
            this.anims.play('casa4_right',true);
        } 

        if (this.inputKeys.up.isDown){
            playerVelocity.y = -1;
            this.anims.play('casa4_back',true);
        } else if (this.inputKeys.down.isDown){
            playerVelocity.y = 1;
            this.anims.play('casa4_front',true);
        }
        playerVelocity.normalize();
        playerVelocity.scale(speed);
        this.setVelocity(playerVelocity.x,playerVelocity.y);
        if (Math.abs(this.velocity.x) == 0 && Math.abs(this.velocity.y) == 0) {
            this.anims.stop();
        }

    }

    CreatePickupCollisions(playerCollider){
        this.scene.matterCollision.addOnCollideStart({
            objectA:[playerCollider],
            callback: other => {
                if(other.gameObjectB.name == 'crawn') {
                    other.gameObjectB.destroy();
                    if (this.numeroAleatorio == 1){
                        this.winner = null;
                        if (this.nome == 'player1'){
                            this.winner = this.scene.add.image(400,300,'winner1');
                        }
                        else if (this.nome == 'player2'){
                            this.winner = this.scene.add.image(400,300,'winner2');
                        }
                        this.winner.depth = 100;
                        this.scene.game.destroy();
                    }
                }
                if(other.gameObjectB.name == 'light') {
                    other.gameObjectB.destroy();
                    if (this.numeroAleatorio == 2){
                        this.winner = null;
                        if (this.nome == 'player1'){
                            this.winner = this.scene.add.image(400,300,'winner1');
                        }
                        else if (this.nome == 'player2'){
                            this.winner = this.scene.add.image(400,300,'winner2');
                        }
                        this.winner.depth = 100;
                        this.scene.game.destroy();
                    }
                }
                if(other.gameObjectB.name == 'cristal') {
                    other.gameObjectB.destroy();
                    if (this.numeroAleatorio == 3){
                        this.winner = null;
                        if (this.nome == 'player1'){
                            this.winner = this.scene.add.image(400,300,'winner1');
                        }
                        else if (this.nome == 'player2'){
                            this.winner = this.scene.add.image(400,300,'winner2');
                        }
                        this.winner.depth = 100;
                        this.scene.game.destroy();
                    }
                }
                if(other.gameObjectB.name == 'candle') {
                    other.gameObjectB.destroy();
                    if (this.numeroAleatorio == 4){
                        this.winner = null;
                        if (this.nome == 'player1'){
                            this.winner = this.scene.add.image(400,300,'winner1');
                        }
                        else if (this.nome == 'player2'){
                            this.winner = this.scene.add.image(400,300,'winner2');
                        }
                        this.winner.depth = 100;
                        this.scene.game.destroy();
                    }
                }
            },
            context: this.scene,
          });
      
          this.scene.matterCollision.addOnCollideActive({
            objectA:[playerCollider],
            callback: other => {
              if(other.gameObjectB && other.gameObjectB.pickup) other.gameObjectB.pickup();
            },
            context: this.scene,
          })
    }
}