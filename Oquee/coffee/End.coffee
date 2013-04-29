class Game.End
  
  render: (@stage) =>

    @end = new createjs.Container()
    @stage.addChild @end
    
    @bg = new createjs.Bitmap(Game.Preloader.getAsset("end"))
    @bg.onClick = @doNothing
    @end.addChild @bg
    
    @playAgainButton = new Game.EndPlayAgainButton()
    @playAgainButton.render(@end)
    @playAgainButton.setCallback @onClickPlayAgainButton
    
  onClickPlayAgainButton: =>
    _gaq.push(['_trackPageview', 'jogo/' + analytics_game_name + '/jogar'])
    @playAgainCallback() if @playAgainCallback
        
  doNothing: =>
    #yeah, nothing at all...
    
  setPlayAgainCallback: (@playAgainCallback) =>