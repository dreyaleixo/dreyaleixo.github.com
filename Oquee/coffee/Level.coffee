class Game.Level
  
  _instance = undefined
  
  @instance: =>
    _instance ?= new Game.LevelImpl()
    
  @themesCount: =>
    Game.Level.instance().themesCount()
    
  @themeQuestionsCount: (index) =>
    Game.Level.instance().themeQuestionsCount(index)
    
  @theme: (index) =>
    Game.Level.instance().theme(index)

  @question: (themeIndex, index) =>
    Game.Level.instance().question(themeIndex, index)

  @answer: (themeIndex, index) =>
    Game.Level.instance().answer(themeIndex, index)

  @hint: (themeIndex, index) =>
    Game.Level.instance().hint(themeIndex, index)

  @sticker: (themeIndex, index) =>
    Game.Level.instance().sticker(themeIndex, index)
    
  @sylabes: (themeIndex, index) =>
    Game.Level.instance().sylabes(themeIndex, index)

class Game.LevelImpl
  
  allSylabes: []

  constructor: ->
    @data = Game.Data.questions
    @allSylabes = _.flatten(_.map(@data, (theme) ->
      _.map(theme.questions, (question) ->
        question.answer
      )
    ))

  themesCount: =>
    @data.length
    
  themeQuestionsCount: (index) =>
    @data[index].questions.length

  theme: (index) =>
    @data[index].theme

  question: (themeIndex, index) =>
    @data[themeIndex].questions[index].question

  answer: (themeIndex, index) =>
    @data[themeIndex].questions[index].answer

  hint: (themeIndex, index) =>
    @data[themeIndex].questions[index].hint

  sticker: (themeIndex, index) =>
    @data[themeIndex].questions[index].sticker

  sylabes: (themeIndex, index) =>
    answer = @answer(themeIndex, index)
    sylabes = _.shuffle(answer)
    while(sylabes.length < @sylabesCount(themeIndex, index))
      newSylabe = @allSylabes[_.random(@allSylabes.length - 1)]
      while(_.contains(sylabes, newSylabe))
        newSylabe = @allSylabes[_.random(@allSylabes.length - 1)]
      sylabes.push(newSylabe)    
    _.shuffle(sylabes)
    
  sylabesCount: (themeIndex, index) =>
    @data[themeIndex].questions[index].sylabes || @data[themeIndex].questions[index].answer.length * 2 
    
