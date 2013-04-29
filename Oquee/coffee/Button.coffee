class Game.Button
  
  assetId: 'hint-bg'
  width: 100
  height: 100
  x: 0
  y: 0
  audioId: null
  
  enabled: true
  
  render: (@stage) =>
    
    data = {
      images: [Game.Preloader.getAsset(@assetId)],
      frames: {width: @width, height: @height},
      animations: {default: 0, hover: 1}
    }
    @spriteSheet = new createjs.SpriteSheet(data);
    @shape = new createjs.BitmapAnimation(@spriteSheet)
    @shape.x = @x
    @shape.y = @y
    @shape.gotoAndStop("default")
    @shape.onClick = @onClick
    @shape.onPress = @onPress
    @shape.onMouseOver = @mouseOver
    @shape.onMouseOut = @mouseOut
    @show()
    
  onClick: (e) =>
    return unless @enabled
    @callback() if @callback
    Game.Audio.playSFX(@audioId) if @audioId
    
  onPress: (e) =>
    return unless @enabled
    @shape.gotoAndStop("hover")
    e.onMouseUp = @onRelease

  onRelease: (e) =>
    @shape.gotoAndStop("default")
    
  setCallback: (@callback) =>
    
  show: =>
    @stage.addChild @shape

  hide: =>
    @stage.removeChild @shape
    
  enable: =>
    @enabled = true
    @shape.alpha = 1.0
    
  disable: =>
    @enabled = false
    @shape.alpha = 0.5
    
  mouseOver: =>
    $('body').css('cursor','pointer')
    
  mouseOut: =>
    $('body').css('cursor','default')