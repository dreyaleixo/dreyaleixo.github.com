class Game.Placeholder
  
  render: (@stage) =>
    size = 79
    
    data = {
      images: [Game.Preloader.getAsset('answer-placeholder-bg')],
      frames: {width: 79, height: 77},
      animations: {default: 0, filled: 1}
    }
    @spriteSheet = new createjs.SpriteSheet(data);
    @shape = new createjs.BitmapAnimation(@spriteSheet)
    @shape.gotoAndStop("default")
    @shape.x = -(size/2)
    @shape.y = -(size/2)
    
    @text = new createjs.Text('','30px SylebeQuiz', '#fff')
    @text.textAlign = 'center'
    @text.textBaseline  = 'middle'
    
    @placeholder = new createjs.Container()
    @placeholder.addChild(@shape, @text)
    @placeholder.width = size
    @placeholder.height = size
    
    @stage.addChild(@placeholder)
    
  setText: (text) =>
    @text.text = text
    @shape.gotoAndStop("filled")

  clear: =>
    @text.text = ""
    @shape.gotoAndStop("default")

  getText: =>
    @text.text
    
  setX: (x) =>
    @placeholder.x = x
    
  destroy: =>
    @stage.remove(@placeholder)
