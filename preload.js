var preload = {
  
    preload: function(){

       var loadingBar = this.add.sprite(160, 240 ,"loading");
        loadingBar.anchor.setTo(0.5,0.5);
        this.load.setPreloadSprite(loadingBar);
        this.game.load.spritesheet('robot', 'robot.png', 80, 111);
        this.game.load.image("background", "campo.png");
        this.game.load.spritesheet('coin', 'moneda.png',26, 30);
       //this.game.load.image('player','player.png');
      this.game.load.image('wall', 'cloud.png', 20, 20);
       this.game.load.image('lava', 'lava.png');
       this.game.load.image('gameTitle', "title.png");
       this.game.load.image('play', 'play.png');
       this.game.load.image('gameOver', 'GameOver.png');
        this.game.load.image('bala', 'bala.png');
       //this.game.load.image('backpng', 'back.png');
    },
      
    
    create: function(){
        this.game.state.start("GameTitle");
        
    }
    
};