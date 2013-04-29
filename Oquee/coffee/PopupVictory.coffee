class Game.PopupVictory extends Game.Popup
  
  render: (@stage) =>

    super(@stage)

    shape = new createjs.Bitmap(Game.Preloader.getAsset("popup-victory"))
    @layerContent.addChild shape
    
    @object = new createjs.Bitmap()
    @layerContent.addChild @object
    
    button = new createjs.Shape()
    hitArea = new createjs.Shape(new createjs.Graphics().beginFill("#f00"))
    hitArea.graphics.beginFill("#f00")
    hitArea.graphics.drawRect(0,0,294,68)
    button.hitArea = hitArea
    button.x = 303
    button.y = 504
    button.onClick = @onClickNext
        
    @layerContent.addChild button
    
  show: (index) =>
    super()
    
    center = {x: 460, y: 370}
    maxSize = {width: 328, height: 231}
    
    @object.image = Game.Preloader.getAsset("levelSticker#{Game.Score.currentTheme()}-#{index}")

    scale = Math.min((maxSize.width / @object.image.width), (maxSize.height / @object.image.height), 1)

    @object.scaleX = scale
    @object.scaleY = scale
    
    @object.rotation = -5 + (Math.random() * 10)

    @object.x = center.x - (@object.image.width * scale / 2)
    @object.y = center.y - (@object.image.height * scale / 2)
    
    Game.Audio.playSFX('audio-right')

  setCallback: (@callback) =>

  onClickNext: =>
    @callback() if @callback
    @hide()
    