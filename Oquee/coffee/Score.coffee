class Game.Score
  
  _instance = undefined
  
  @instance: =>
    _instance ?= new Game.ScoreImpl()
    
  @currentTheme: =>
    Game.Score.instance().currentTheme()

  @currentQuestion: =>
    Game.Score.instance().currentQuestion()
    
  @nextQuestion: =>
    Game.Score.instance().nextQuestion()
    
  @isEndOfGame: =>
    Game.Score.instance().isEndOfGame()
    
  @time: =>
    Game.Score.instance().time()
    
  @resetTime: =>
    Game.Score.instance().resetTime()
    
  @updateTime: (elapsedTime) =>
    Game.Score.instance().updateTime(elapsedTime)
    
  @reset: =>
    _instance = undefined
    
class Game.ScoreImpl
  
  themeIndex: 0
  
  questionIndex: 0
  
  elapsedTime: 0

  currentTheme: =>
    @themeIndex
    
  currentQuestion: =>
    @questionIndex

  nextQuestion: =>
    @questionIndex++
    if (@questionIndex >= Game.Level.themeQuestionsCount(@themeIndex))
      @questionIndex = 0
      @themeIndex++
      if (@themeIndex >= Game.Level.themesCount())
        @themeIndex = -1
        
  isEndOfGame: =>
    @themeIndex == -1
    
  time: =>
    @elapsedTime
    
  resetTime: =>
    @elapsedTime = 0
    
  updateTime: (elapsedTime) =>
    @elapsedTime += elapsedTime
