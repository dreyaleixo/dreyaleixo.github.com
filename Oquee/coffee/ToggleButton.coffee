class Game.ToggleButton
  
  assetId: 'btn-pause'
  width: 100
  height: 100
  x: 0
  y: 0
  audioId: null

  state: false
  
  render: (@stage) =>
    data = {
      images: [Game.Preloader.getAsset(@assetId)],
      frames: {width: @width, height: @height},
      animations: {off: 0, on: 1}
    }
    @spriteSheet = new createjs.SpriteSheet(data);
    @shape = new createjs.BitmapAnimation(@spriteSheet)
    @shape.x = @x
    @shape.y = @y
    @shape.gotoAndStop("off")
    @shape.onClick = @onClick
    @shape.onMouseOver = @mouseOver
    @shape.onMouseOut = @mouseOut    
    @stage.addChild @shape
    
  onClick: (e) =>
    if (@state)
      @state = false
      @shape.gotoAndStop("off")
      @callbackOff() if @callbackOff
    else
      @state = true
      @shape.gotoAndStop("on")
      @callbackOn() if @callbackOn
    Game.Audio.playSFX(@audioId) if @audioId

  setCallbacks: (@callbackOn, @callbackOff) =>
    
  mouseOver: =>
    $('body').css('cursor','pointer')
    
  mouseOut: =>
    $('body').css('cursor','default')