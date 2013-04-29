class Game.Stickers
  
  stickers: []
  
  callback: null
  
  snapBorder: 20
  
  render: (@stage) =>

    @layerBg = new createjs.Container()
    @layerContent = new createjs.Container()
    @layerMask = new createjs.Container()
    @layerGrid = new createjs.Container()
    @layerDrag = new createjs.Container()
    @stage.addChild @layerBg, @layerContent, @layerGrid, @layerDrag, @layerMask
    
    @bg = new createjs.Bitmap(Game.Preloader.getAsset("levelBg" + Game.Score.currentTheme()))
    @layerBg.addChild @bg
    
    @grid =  new createjs.Bitmap(Game.Preloader.getAsset("levelGrid" + Game.Score.currentTheme()))
    @layerGrid.addChild @grid
    
    @mask = new createjs.Shape()
    @mask.graphics.beginFill(createjs.Graphics.getRGB(255, 255, 255, 0.6))
    @mask.snapToPixel = true
    @mask.graphics.drawRect(0, 0, 900, 675)
    
    @showMask()

  setStickCallback: (callback) =>
    @callback = callback

  addSticker: (index) =>
    @sticker = new createjs.Bitmap(Game.Preloader.getAsset("levelSticker#{Game.Score.currentTheme()}-#{Game.Score.currentQuestion()}"))
    hitArea = new createjs.Shape()
    hitArea.graphics.beginFill(createjs.Graphics.getRGB(255, 255, 255, 0.6))
    hitArea.snapToPixel = true
    hitArea.graphics.drawRect(0, 0, @sticker.image.width, @sticker.image.height)   
    @sticker.hitArea = hitArea
    
    @stickerInfo = Game.Level.sticker(Game.Score.currentTheme(), Game.Score.currentQuestion())
    
    @sticker.onClick = @onClick
    @layerDrag.addChild @sticker

  dragSticker: =>
    @sticker.x = Game.Input.mousePosition().x - (@sticker.image.width / 2)
    @sticker.y = Game.Input.mousePosition().y - (@sticker.image.height / 2)

  snapSticker: (index) =>
    if Game.Level.sticker(Game.Score.currentTheme(), Game.Score.currentQuestion()).alt
      @sticker.image = Game.Preloader.getAsset("levelSticker#{Game.Score.currentTheme()}-#{Game.Score.currentQuestion()}Alt")
    @sticker.x = @stickerInfo.x
    @sticker.y = @stickerInfo.y
    @layerContent.addChild @sticker
    
  showMask: =>
    @layerMask.addChild @mask

  hideMask: =>
    @layerMask.removeChild @mask
    
  onClick: =>
    if @isMouseInSnapArea()  
      @snapSticker()
      @callback() if @callback
      @sticker.onClick = null
    else
      Game.Audio.playSFX('audio-wrong')
    
  isMouseInSnapArea: =>
    mouse = Game.Input.mousePosition()
    snapPosition = @stickerInfo
    snapPosition = @stickerInfo.snap if @stickerInfo.snap
    return false unless mouse.x > snapPosition.x - @snapBorder
    return false unless mouse.x < (snapPosition.x + @sticker.image.width) + @snapBorder 
    return false unless mouse.y > snapPosition.y - @snapBorder
    return false unless mouse.y < (snapPosition.y + @sticker.image.height) + @snapBorder
    true
    
  hideGrid: =>
    @layerGrid.removeAllChildren()
    
  reset: =>
    @bg.image = Game.Preloader.getAsset("levelBg" + Game.Score.currentTheme())
    @grid.image = Game.Preloader.getAsset("levelGrid" + Game.Score.currentTheme())
    @layerGrid.addChild @grid
    @layerContent.removeAllChildren()