class Game.Preloader
  
  preloader = undefined
  
  @load: (manifest, callback) =>
    preloader ?= new Game.PreloaderImpl()
    preloader.load(manifest, callback)
    
  @loadLevel: (level, callback) =>
    preloader.loadLevel(level, callback)
    
  @getAsset: (id) =>
    preloader.getAsset(id) if (preloader)
  
  
class Game.PreloaderImpl
  
  assets: {}
  
  load: (@manifest, @callback) =>
    @loader = new createjs.LoadQueue()
    @loader.installPlugin(createjs.Sound)
    
    @loader.addEventListener("fileload", @handleFileLoad);
    @loader.addEventListener("complete", @handleComplete);
    #@loader.onFileLoad = @handleFileLoad
    #@loader.onComplete = @handleComplete
    #@loader.useXHR = false
    @loader.loadManifest(@manifest)
    @loadLevel(Game.Score.currentTheme(), @callback)
    
  loadLevel: (level, @callback = null) =>
    @loader.loadFile({id: "levelBg#{level}", src: "assets/themes/#{level}/bg.png"})
    @loader.loadFile({id: "levelGrid#{level}", src: "assets/themes/#{level}/grid.png"})
    count = Game.Level.themeQuestionsCount(level)
    for i in [0..count-1]
      @loader.loadFile({id: "levelSticker#{level}-#{i}", src: "assets/themes/#{level}/#{i}.png"})
      if Game.Level.sticker(level, i).alt == true
        @loader.loadFile({id: "levelSticker#{level}-#{i}Alt", src: "assets/themes/#{level}/#{i}-alt.png"})
      
  handleFileLoad: (event) =>
    switch event.item.type
      when createjs.LoadQueue.IMAGE
        img = new Image()
        img.src = event.item.src
        @assets[event.item.id] = img
    
  handleComplete: =>
    $("#loader").remove()
    @callback() if @callback
    
  getAsset: (id) =>
    @assets[id]

  