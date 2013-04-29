class Game.NextLevelButton
  
  render: (@stage) =>
    
    data = {
      images: [Game.Preloader.getAsset('next-level')],
      frames: {width: 278, height: 65},
      animations: {default: 0, hover: 1}
    }
    @spriteSheet = new createjs.SpriteSheet(data);
    @shape = new createjs.BitmapAnimation(@spriteSheet)
    @shape.x = 315
    @shape.y = 610
    @shape.gotoAndStop("default")
    @shape.onClick = @onClick
    @shape.onPress = @onPress

  onClick: (e) =>
    @callback() if @callback
    
  onPress: (e) =>
    @shape.gotoAndStop("hover")
    e.onMouseUp = @onRelease

  onRelease: (e) =>
    @shape.gotoAndStop("default")
    
  setCallback: (@callback) =>
    
  show: =>
    @stage.addChild @shape

  hide: =>
    @stage.removeChild @shape