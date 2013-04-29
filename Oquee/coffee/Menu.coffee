class Game.Menu
  
  render: (@stage) =>

    @menu = new createjs.Container()
    @stage.addChild @menu
    
    @bg = new createjs.Bitmap(Game.Preloader.getAsset("menu"))
    @bg.onClick = @doNothing
    @menu.addChild @bg
    
    @playButton = new Game.MenuPlayButton()
    @playButton.render(@menu)
    @playButton.setCallback @onClickPlayButton
    
    @helpButton = new Game.MenuHelpButton()
    @helpButton.render(@menu)
    @helpButton.setCallback @onClickHelpButton
    
  onClickPlayButton: =>
    _gaq.push(['_trackPageview', 'jogo/' + analytics_game_name + '/jogar'])
    @playCallback() if @playCallback

  onClickHelpButton: =>
    @helpCallback() if @helpCallback
        
  doNothing: =>
    #yeah, nothing at all...
    
  setPlayCallback: (@playCallback) =>
    
  setHelpCallback: (@helpCallback) =>