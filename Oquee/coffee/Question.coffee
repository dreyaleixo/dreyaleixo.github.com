class Game.Question
  
  label: ''

  render: (@stage) =>
    
    @text = new createjs.Text(@label,'30px SylebeQuiz', '#fff');
    @text.textAlign = 'center';
    @text.textBaseline= 'middle';
    @text.x = 450;
    @text.y = 540;
    @text.width = 470;
    @text.height = 107;
    @text.lineWidth = @text.width;
    
    @textOutline = @text.clone()
    @textOutline.color = "#000"
    @textOutline.outline = true
    
    @shadow = new createjs.Shadow("#000000", 1, 1, 1)
    @text.shadow  = @shadow
    
    @stage.addChild(@text, @textOutline)
    
  changeText: (@label) =>
    @text.text = @label
    @textOutline.text = @label
    
