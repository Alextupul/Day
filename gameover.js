var gameOver = {
    create: function(){
        var gameOverTitle = this.game.add.sprite(700, 250, "gameOver");
        gameOverTitle.anchor.setTo(0.5,0.5);
        var playButton = this.game.add.button(700,400, "play", this.playTheGame,this);
        playButton.anchor.setTo(0.5,0.5);
    },
    
    playTheGame: function(){
        this.game.state.start('GameTitle');
    }
};