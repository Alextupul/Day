var instruction = {
    create: function(){
     var instructions = this.game.add.sprite(700, 250, 'instrucciones');
           instructions.anchor.setTo(0.5,0.5);
var playButton = this.game.add.button(700,550,'play',this.playTheGame,this);
        playButton.anchor.setTo(0.5,0.5);
        
    },
    
    playTheGame: function(){
        this.game.state.start('State');
    }
};