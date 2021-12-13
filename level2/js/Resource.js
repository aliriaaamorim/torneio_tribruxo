export default class Resource extends Phaser.Physics.Matter.Sprite{
    static preload(scene){
        scene.load.atlas('resources','assets/images/resources.png','assets/images/resources_atlas.json');
    }

    constructor(data){
        let {scene,resource} = data;
        super(scene.matter.world,resource.x,resource.y,'resources',resource.type);
        this.scene.add.existing(this);
        this.name = resource.type;
        this.x += this.width/2;
        this.y -= this.height/2;
        const {Body,Bodies} = Phaser.Physics.Matter.Matter;
        var circleCollider = Bodies.circle(this.x,this.y,12,{isSensor:false,label:'collider'});
        this.setExistingBody(circleCollider);
        this.setStatic(true);
    }
}