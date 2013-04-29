class Game.Timer
  
  render: (@stage) =>
    
    @layerContent = new createjs.Container()
    
    @bg = new createjs.Bitmap(Game.Preloader.getAsset("timer-bg"))
    @bg.x = 710
    @bg.y = 500
    @layerContent.addChild @bg
    
    data = {
      images: [Game.Preloader.getAsset('hourglass-sheet')],
      frames: {width: 84, height: 84},
      animations: {hourglass: [0, 17, "hourglass", 4], stopped: 9}
    }
    @spriteSheet = new createjs.SpriteSheet(data);
    @shape = new createjs.BitmapAnimation(@spriteSheet)
    @shape.x = 745
    @shape.y = 470
    @shape.rotation = 15
    @play()    
    
    @text = new createjs.Text("00:00",'30px SylebeQuiz', '#626262')
    @text.textAlign = 'center'
    @text.x = 763
    @text.y = 565
    @text.rotation = 15

    @layerContent.addChild @text, @shape
    
    @show()
    
  update: =>
    
    elapsedTime = Game.Score.time()
    
    seconds = Math.floor(elapsedTime / 1000)
    minutes = Math.floor(seconds / 60)
    seconds = Math.floor(seconds - (minutes * 60))
    
    padding = "00"
    
    minutes = (padding + minutes)
    minutes = minutes.substring(minutes.length - 2, minutes.length)
    seconds = padding + seconds
    seconds = seconds.substring(seconds.length - 2, seconds.length)

    @text.text = minutes + ":" + seconds
    
  play: =>
    @shape.gotoAndPlay("hourglass")
    
  stop: =>
    @shape.gotoAndStop("stopped")

  show: =>
    @stage.addChild @layerContent

  hide: =>
    @stage.removeChild @layerContent