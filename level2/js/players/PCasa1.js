export default class PCasa1 extends Phaser.Physics.Matter.Sprite {
    constructor(data,numAleat,nome){
        let {scene,x,y,texture,frame} = data;
        super(scene.matter.world,x,y,texture,frame);
        this.touching = [];
        this.scene.add.existing(this);
        this.numeroAleatorio = numAleat
        this.nome = nome;
        if (this.nome == 'player1'){
            this.personagem = this.scene.add.image(30,30,'fcasa1');
            this.personagem.depth=50;
            this.scene.add.text(0,50,'Player 1');
        }
        else if (this.nome == 'player2'){
            this.personagem = this.scene.add.image(770,30,'fcasa1');
            this.personagem.depth=50;
            this.scene.add.text(720,50,'Player 2');
        }

        // Colisor redondo
        const posY = this.y;
        const {Body,Bodies} = Phaser.Physics.Matter.Matter;
        var playerCollider = Bodies.circle(this.x,this.y,15,{isSensor:false,label:'playerCollider'});
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
        scene.load.atlas('casa1','assets/images/casa1/casa1.png','assets/images/casa1/casa1_atlas.json')
        scene.load.animation('casa1_anim','assets/images/casa1/casa1_anim.json');
        let pilha = new Stack()
    }

    get velocity() {
        return this.body.velocity;
    }

    update(){
        const speed = 2.5;
        let playerVelocity = new Phaser.Math.Vector2();
        if (this.inputKeys.left.isDown){
            playerVelocity.x = -1;
            this.anims.play('casa1_left',true);
        } else if (this.inputKeys.right.isDown){
            playerVelocity.x = 1;
            this.anims.play('casa1_right',true);
        } 

        if (this.inputKeys.up.isDown){
            playerVelocity.y = -1;
            this.anims.play('casa1_back',true);
        } else if (this.inputKeys.down.isDown){
            playerVelocity.y = 1;
            this.anims.play('casa1_front',true);
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
                            this.winner.depth = 100;
                            this.fimDeJogo()
                        }
                        else if (this.nome == 'player2'){
                            this.winner = this.scene.add.image(400,300,'winner2');
                            this.winner.depth = 100;
                            this.fimDeJogo()
                        }
                    }
                }
                if(other.gameObjectB.name == 'light') {
                    other.gameObjectB.destroy();
                    if (this.numeroAleatorio == 2){
                        this.winner = null;
                        if (this.nome == 'player1'){
                            this.winner = this.scene.add.image(400,300,'winner1');
                            this.winner.depth = 100;
                            this.fimDeJogo()
                        }
                        else if (this.nome == 'player2'){
                            this.winner = this.scene.add.image(400,300,'winner2');
                            this.winner.depth = 100;
                            this.fimDeJogo()
                        }
                    }
                }
                if(other.gameObjectB.name == 'cristal') {
                    other.gameObjectB.destroy();
                    if (this.numeroAleatorio == 3){
                        this.winner = null;
                        if (this.nome == 'player1'){
                            this.winner = this.scene.add.image(400,300,'winner1');
                            this.winner.depth = 100;
                            this.fimDeJogo()
                        }
                        else if (this.nome == 'player2'){
                            this.winner = this.scene.add.image(400,300,'winner2');
                            this.winner.depth = 100;
                            this.fimDeJogo()
                        }
                    }
                }
                if(other.gameObjectB.name == 'ghost') {
                    other.gameObjectB.destroy();
                    if (this.numeroAleatorio == 4){
                        this.winner = null;
                        if (this.nome == 'player1'){
                            this.winner = this.scene.add.image(400,300,'winner1');
                            this.winner.depth = 100;
                            this.fimDeJogo()
                        }
                        else if (this.nome == 'player2'){
                            this.winner = this.scene.add.image(400,300,'winner2');
                            this.winner.depth = 100;
                            this.fimDeJogo()
                        }
                    }
                }
                if(other.gameObjectB.name == 'hat') {
                    other.gameObjectB.destroy();
                    if (this.numeroAleatorio == 5){
                        this.winner = null;
                        if (this.nome == 'player1'){
                            this.winner = this.scene.add.image(400,300,'winner1');
                            this.winner.depth = 100;
                            this.fimDeJogo()
                        }
                        else if (this.nome == 'player2'){
                            this.winner = this.scene.add.image(400,300,'winner2');
                            this.winner.depth = 100;
                            this.fimDeJogo()
                        }
                    }
                }
                if(other.gameObjectB.name == 'candle') {
                    other.gameObjectB.destroy();
                    if (this.numeroAleatorio == 6){
                        this.winner = null;
                        if (this.nome == 'player1'){
                            this.winner = this.scene.add.image(400,300,'winner1');
                            this.winner.depth = 100;
                            this.fimDeJogo()
                        }
                        else if (this.nome == 'player2'){
                            this.winner = this.scene.add.image(400,300,'winner2');
                            this.winner.depth = 100;
                            this.fimDeJogo()
                        }
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

    fimDeJogo(){
        alert("Fim de jogo! Voltar para o menu.")
        setTimeout(function(){window.location.href = '../index.html' }, 3000);
    }
}