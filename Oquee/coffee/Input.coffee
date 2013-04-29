class Game.Input
  
  _instance = undefined
  
  @instance: =>
    _instance ?= new Game.InputImpl()
    
  @mousePosition: =>
    Game.Input.instance().mousePosition()

  @updateMousePosition: (x, y) =>
    Game.Input.instance().updateMousePosition(x, y)
    
  
class Game.InputImpl
  
  mousePositionX: 0
  mousePositionY: 0
  
  updateMousePosition: (x, y) =>
    @mousePositionX = x
    @mousePositionY = y
    
  mousePosition: =>
    {x: @mousePositionX, y: @mousePositionY}