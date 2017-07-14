var stateMain = {

    
    create: function (){
        this.score = 0;
        this.text = this.game.add.text(10,10, "Score:" + this.score);
        this.text.addColor("#0000ff",0);
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.world.enableBody = true;
        
        this.cursor = this.game.input.keyboard.createCursorKeys(); 
        this.speed=2;
        
        this.tileSprite = this.game.add.tileSprite(0, 0, 1500, 700, 'background');
        
        
        this.robot = this.game.add.sprite(100,0,"robot");
        //this.coin = this.game.add.sprite(100,50,"coin");
        
        this.robot.body.gravity.y = 600;
//        this.robot.anchor.set(0.5, 0.5);
        this.robot.scale.setTo(0.5,0.5);
        
        this.robot.animations.add('idle', [0,1,2,3,4,5,6,7,8,9], 12, true);
        this.robot.animations.add('run',[10,11,12,13,14,15,16,17], 12, true);
        this.robot.animations.add('jump',[18,19,20,21,22,23,24,25,26], 12, true);
       // this.coin.animations.add('spin', [0,1,2,3,4,5], 12, true);
       // this.coin.play('spin');
        
        this.walls = this.game.add.group();
        this.coins = this.game.add.group();
        this.lavas = this.game.add.group();
        this.game.camera.follow(this.robot);
        
        this.weapon = this.game.add.weapon(30, 'bala');
        this.weapon.bulletKillType = Phaser.Weapon.kill_LIFESPAN;
       this.weapon.bulletLifespan = 200;
      this.weapon.bullSpeed = 600;
       this.weapon.fireRate = 100;

    //  Wrap bullets around the world bounds to the opposite side
   this.weapon.bulletWorldWrap = true;

    
    //  Tell the Weapon to track the 'player' Sprite
    //  With no offsets from the position
    //  But the 'true' argument tells the weapon to track sprite rotation
   this.weapon.trackSprite(this.robot, 0, 0, true);


    this.fireButton = this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);

       var level = [
<<<<<<< HEAD
           
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'!                !                          ',
'!                                           ',
'!                                           ',
'!                                           ',
'!                                           ',
'!                                          ',
'!                                          ',
'!                                          ',
'!                                          ',                                
'!   o                                     ',
'!   o   xxx                 !               ',
'!                                           ',
'!                                           ',
'!                                           ',
'!                                           ',
'!                                           ',
'!           x                               ',
'!                         o                 ',
'!              o                            ',
'!                                           ',
'!                         x                ',
'!                                           ',
'!              !                          ',
'!                                           ',
'!                 x                           ',
'!                                           ',
'!        x                                 ',
'!                                           ',
'!                                           ',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
=======
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
'!                                                                                        !',
'!                                                                                        !',
'!                          o                                                             !',
'!                                    o                                                   !',
'!           o                                                                            !',
'!   x   x             o   x                                                              !',
'!           !!!!    x         !     x    !     x     !     x       !    x   !   x   !    !',            
'!                                                                                        !',
'!                                                                                        !',
'!                        o                             o                                 ',
'!                                        o                                 o             ',                
'!            o     x           x                x      x                   x           ',
'!         x   x         x            x     !        !            o                       ',
'!                    !       !      !                            x                       ',
'!                                                                                       ',
'!                                        !                !                              ',
'!             o             O                                                          ',
'!                                                    O                                  ',
'!     xx           x         x        O           X             o  !         X       ',
'!              !                                                  X                     ',
'!                                        x      !!                                     ',
'!                                                                                      ',
'!                                                                                      ',
'!     o              o                                   0                               ',
'!     x              x                      o             x                               ',
'!                                       x                                             ',
'!                       !!!   o     !!!                                                 ',
'!            o                x                                                         ',
'!            x                                                                          ',
'!                    o                                                                  ',
'!   ooo      !     o    ! o                                                               ',
'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
>>>>>>> master
];
        // Create the level by going through the array
        
for (var i = 0; i < level.length; i++) {
for (var j = 0; j < level[i].length; j++) {

// Create a wall and add it to the 'walls' group
if (level[i][j] == 'x') {
var wall = this.game.add.sprite(30+20*j, 30+20*i, 'wall');
this.walls.add(wall);
   wall.body.immovable = true; 
}

// Create a coin and add it to the 'coins' group
else if (level[i][j] == 'o') {
var coin = this.game.add.sprite(30+20*j, 30+20*i, 'coin');
coin.animations.add('spin', [0,1,2,3,4,5], 12, true);
coin.play('spin');
this.coins.add(coin);
}
 
// Create a enemy and add it to the 'enemies' group
else if (level[i][j] == '!') {
var lava = this.game.add.sprite(30+20*j, 30+20*i, 'lava');
this.lavas.add(lava);
}
}
}
                
       
        
    },
    
    update: function (){
        
        
        this.game.physics.arcade.collide(this.robot, this.walls);
        this.game.physics.arcade.collide(this.robot,this.coins,this.takeCoin, null, this);
        this.game.physics.arcade.overlap(this.robot,this.lavas,this.restart, null, this);
    this.game.world.bringToTop(this.robot);
            this.game.world.bringToTop(this.text);


        if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
    {
//        this.robot.x-=this.speed;
        this.robot.body.velocity.x = -300;
        this.robot.play("run");
        this.robot.scale.setTo(-0.5,0.5);;
        this.tileSprite.autoScroll(-100,0);
    }
    else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
    {
//        this.robot.x+=this.speed;
        this.robot.body.velocity.x = 300;
        this.robot.play("run");
        this.robot.scale.setTo(0.5,0.5);
        this.tileSprite.autoScroll(100,0);
    }
//        else
//    if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP))
//    {
////        this.robot.y-=this.speed;
//        this.robot.body.velocity.y = -300;
//        this.robot.play("jump");
//    }
    else if (this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN))
    {
//        this.robot.y+=this.speed;
        this.robot.body.velocity.y =200;
        this.robot.play("run");
    }else
    {
        this.robot.body.velocity.x = 0;
        this.robot.play('idle');
        this.tileSprite.autoScroll(-100&&0);
    }
        
        if(this.cursor.up.isDown && this.robot.body.touching.down){
//               this.robot.body.velocity.y = -300;
            this.robot.body.velocity.y = -400;
            this.robot.play("jump");
            
        
        }
         if (this.fireButton.isDown)
    {
       this.weapon.fire();
        
    }

        //if(this.weapon.fire()> gameworld)
        
    //game.world.wrap(sprite, 16);
        
    }, 
    
    render: function(){
        this.weapon.debug();
    },
takeCoin: function(player, coin){
       coin.kill();  
this.score +=1;
this.text.text= "Score:" + this.score;
    
},
    
    restart: function(){
        this.game.state.start("GameOver");
        
    }
    
};
