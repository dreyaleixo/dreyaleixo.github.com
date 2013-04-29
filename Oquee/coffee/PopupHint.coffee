class Game.PopupHint extends Game.Popup
  
  render: (@stage) =>

    super(@stage)

    shape = new createjs.Bitmap(Game.Preloader.getAsset("popup-hint"))
    @layerContent.addChild shape
    
    @text = new createjs.Text('','30px SylebeQuiz', '#fff');
    @text.textAlign = 'center';
    @text.textBaseline= 'middle';
    @text.width = 421;
    @text.height = 152;
    @text.x = 277 + (@text.width / 2);
    @text.y = 287 + (@text.height / 2);
    @text.lineWidth = @text.width;
    @layerContent.addChild @text
    
    button = new createjs.Shape()
    hitArea = new createjs.Shape(new createjs.Graphics().beginFill("#f00"))
    hitArea.graphics.beginFill("#f00")
    hitArea.graphics.drawRect(0,0,183,65)
    button.hitArea = hitArea
    button.x = 384
    button.y = 463
    button.onClick = @onClickOk
        
    @layerContent.addChild button
    
  show: (themeIndex, questionIndex) =>
    super()
    @text.text =  Game.Level.hint(themeIndex, questionIndex)

  setCallback: (@callback) =>

  onClickOk: =>
    @callback() if @callback
    @hide()
    