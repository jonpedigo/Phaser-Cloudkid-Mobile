var TopDownGame = TopDownGame || {};

TopDownGame.Boot = function(){};

//setting game configuration and loading the assets for the loading screen
TopDownGame.Boot.prototype = {
  preload: function() {
    //assets we'll use in the loading screen
    this.load.image('preloadbar', 'assets/images/preloader-bar.png');
  },
  create: function() {
    //loading screen will have a white background
    this.game.stage.backgroundColor = '#fff';


    if(navigator.isCocoonJS){
      this.game.stage.children[0].scale.x = 4;
      this.game.stage.children[0].scale.y = 4;
    }else{
      this.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
    }

    this.scale.forceOrientation(false, true);

    // this.game.world.scale.x = 2;
    // this.game.world.scale.y = 2;
    //physics system
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    
    this.state.start('Preload');
  }
};



