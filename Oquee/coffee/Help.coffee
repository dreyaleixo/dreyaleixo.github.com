class Game.Help
  
  contentCount: 4
  contentIndex: 0
  
  render: (@stage) =>

    @help = new createjs.Container()
    @stage.addChild @help
    
    @bg = new createjs.Bitmap(Game.Preloader.getAsset("help"))
    @bg.onClick = @doNothing
    @help.addChild @bg

    @content = new createjs.Bitmap()
    @help.addChild @content
    
    @playButton = new Game.HelpPlayButton()
    @playButton.render(@help)
    @playButton.setCallback @onClickPlayButton
    
    @nextButton = new Game.HelpNextButton()
    @nextButton.render(@help)
    @nextButton.setCallback @onClickNextButton
    
    @prevButton = new Game.HelpPrevButton()
    @prevButton.render(@help)
    @prevButton.setCallback @onClickPrevButton
    
    @page = new createjs.Text(@pageText(),'32px SylebeQuiz', '#ffffff')
    @page.textAlign = 'center'
    @page.textBaseline= 'middle'
    @page.x = 458
    @page.y = 465
    @help.addChild @page
    
    @updateContent()
    @updateButtons()
    
  onClickPlayButton: =>
    @playCallback() if @playCallback

  onClickNextButton: =>
    @contentIndex++
    @updateContent()
    @updateButtons()

  onClickPrevButton: =>
    @contentIndex--
    @updateContent()
    @updateButtons()
    
  updateContent: =>
    @content.image = Game.Preloader.getAsset("help-#{@contentIndex}")
        
  doNothing: =>
    #yeah, nothing at all...
    
  setPlayCallback: (@playCallback) =>
    
  updateButtons: =>
    @page.text = @pageText()
    if @contentIndex <= 0
      @prevButton.disable()
    else
      @prevButton.enable()
    if @contentIndex >= @contentCount - 1
      @nextButton.disable()
    else
      @nextButton.enable()
    
  pageText: =>
    "#{@contentIndex + 1}/#{@contentCount}"
    
