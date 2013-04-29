class Game.Sylabe
  
  label: ''

  selectedIndex: -1
  
  @size: 70
  
  @damping: 0.99
  
  constructor: (@label, @x, @y, @selectCallback) ->
    @velocity = {x: -10 + (Math.random() * 20), y: -10 + (Math.random() * 20)}
  
  render: (@stage) =>
    
    data = {
      images: [Game.Preloader.getAsset('sylabe-bg')],
      frames: {width: 75, height: 77},
      animations: {default: 0, selected: 1}
    }
    @spriteSheet = new createjs.SpriteSheet(data);
    @shape = new createjs.BitmapAnimation(@spriteSheet)
    @shape.x = -37
    @shape.y = -38
    @shape.gotoAndStop("default")
    
    @text = new createjs.Text(@label,'30px SylebeQuiz', '#fff')
    @text.textAlign = 'center'
    @text.textBaseline  = 'middle'
    
    @textOutline = @text.clone()
    @textOutline.color = "#000"
    @textOutline.outline = true
    
    @shadow = new createjs.Shadow("#000000", 2, 2, 1)
    @text.shadow  = @shadow
    
    @sprite = new createjs.Container()
    @sprite.name = "sylabe-#{@label}"
    @sprite.addChild(@shape, @text, @textOutline)
    @sprite.x = @x + (Game.Sylabe.size / 2)
    @sprite.y = @y + (Game.Sylabe.size / 2)
    @sprite.width = Game.Sylabe.size
    @sprite.height = Game.Sylabe.size
    @sprite.onClick = @select
    @sprite.onMouseOver = @mouseOver
    @sprite.onMouseOut = @mouseOut
    
    @stage.addChild(@sprite)
    
  update: =>
    @updateMovement()
    
  updateMovement: =>
    @sprite.x += @velocity.x
    @sprite.y += @velocity.y
    @velocity.x *= Game.Sylabe.damping
    @velocity.y *= Game.Sylabe.damping
    
  select: =>
    return if (@selected)
    Game.Audio.playSFX('select-sylabe')
    @selected = true
    @stage.addChild(@sprite)
    @shape.gotoAndStop("selected")
    @selectCallback(@)
    
  unselect: =>
    return unless (@selected)
    Game.Audio.playSFX('deselect-sylabe')
    @shape.gotoAndStop("default")
    @selected = false

  mouseOver: =>
    $('body').css('cursor','pointer')
    
  mouseOut: =>
    $('body').css('cursor','default')
