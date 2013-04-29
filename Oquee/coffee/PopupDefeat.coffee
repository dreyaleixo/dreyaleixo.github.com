class Game.PopupDefeat extends Game.Popup
  
  render: (@stage) =>

    super(@stage)

    shape = new createjs.Bitmap(Game.Preloader.getAsset("popup-defeat"))
    @layerContent.addChild shape
    
    button = new createjs.Shape()
    hitArea = new createjs.Shape(new createjs.Graphics().beginFill("#f00"))
    hitArea.graphics.beginFill("#f00")
    hitArea.graphics.drawRect(0,0,193,67)
    button.hitArea = hitArea
    button.x = 376
    button.y = 387
    button.onClick = @onClickOk
        
    @layerContent.addChild button
    
  show: =>
    super()
    Game.Audio.playSFX('audio-wrong')
    
    
  setCallback: (@callback) =>

  onClickOk: =>
    @callback() if @callback
    @hide()
    