var TopDownGame = TopDownGame || {};

var width = window.innerWidth;
    height = window.innerHeight;

TopDownGame.game = new Phaser.Game(width, height, Phaser.WEBGL, '');

TopDownGame.game.state.add('Boot', TopDownGame.Boot);
TopDownGame.game.state.add('Preload', TopDownGame.Preload);
TopDownGame.game.state.add('Game', TopDownGame.Game);

TopDownGame.game.state.start('Boot');