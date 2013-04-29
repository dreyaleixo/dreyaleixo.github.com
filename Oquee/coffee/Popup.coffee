class Game.Popup
  
  render: (@stage) =>

    @popup = new createjs.Container()

    @layerMask = new createjs.Container()
    @layerContent = new createjs.Container()

    @popup.addChild @layerMask, @layerContent
    
    @mask = new createjs.Shape()
    #@mask.width = 900
    #@mask.height = 675
    #@mask.graphics.beginFill(createjs.Graphics.getRGB(255, 255, 255, 0.1))
    #@mask.snapToPixel = true
    #@mask.graphics.drawRect(0, 0, 900, 675)
    hitArea = new createjs.Shape()
    hitArea.graphics.beginFill("#f00")
    hitArea.graphics.drawRect(0,0,900,675)
    @mask.hitArea = hitArea
        
    @mask.onClick = @doNothing
    @layerMask.addChild @mask
    
  show: =>
    @stage.addChild @popup

  hide: =>
    @stage.removeChild @popup
    
  doNothing: =>
    #yeah, nothing at all...
    
