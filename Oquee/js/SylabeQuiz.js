var SylabeQuiz = {};

SylabeQuiz.Main = new function() {
	
	var State = {
		Guessing: 0,
		Sticking: 1,
		Popup: 2,
		FinishLevel: 3,
		Menu: 4,
	}
	
	var state = State.Menu;
	
	var sylabePositions = [
	    {x: 100, y: 250},
		{x: 750, y: 20},
		{x: 220, y: 20},
		{x: 700, y: 300},
		{x: 450, y: 50},
		{x: 400, y: 270},
		{x: 200, y: 150},
		{x: 600, y: 155},
		{x: 600, y: 155},
		{x: 600, y: 155},
	]
	
	var canvas;
	var stage;
	
	var menu;
	var help;
	var end;
	
	var theme;
	
	var question;
	
	var timer;
	var hintButton;
	var pauseButton;
	var helpButton;
	var musicButton;
	var soundButton;
	var nextLevelButton;
	
	var pauseMask;
	
	var stickers;
	
	var area
	
	var frame

	var placeholdersContainer
	
	var sylabes = [];
	var selectedSylabes = [];
	
	var answerPlaceholders = [];
	var answeredIndex = 0;

    var layerMenu;
    var layerGame;
	var layerHelp;
	var layerEnd;
    
	var layerBg;
	var layerFrame;
	var layerSylabes;
	var layerPopup;
	var layerPause;
	
	var popupVictory;
	var popupDefeat;
	var popupHint;

	this.init = function() {
		canvas = document.getElementById('main');
		stage = new createjs.Stage(canvas);
		
		//settings for stage
		stage.mouseEventsEnabled = true;
		stage.enableMouseOver();

		var manifest = [
			{src:"font/FairpNarBla.ttf", id:"font"},
			{src:"assets/menu.png", id:"menu"},
			{src:"assets/btn-menu-play.png", id:"btn-menu-play"},
			{src:"assets/btn-menu-help.png", id:"btn-menu-help"},
			{src:"assets/help.png", id:"help"},
			{src:"assets/btn-help-next.png", id:"btn-help-next"},
			{src:"assets/btn-help-prev.png", id:"btn-help-prev"},
			{src:"assets/help/0.png", id:"help-0"},
			{src:"assets/help/1.png", id:"help-1"},
			{src:"assets/help/2.png", id:"help-2"},
			{src:"assets/help/3.png", id:"help-3"},
			{src:"assets/frame.png", id:"frame"},
			{src:"assets/sylabe-bg.png", id:"sylabe-bg"},
			{src:"assets/hint-bg.png", id:"hint-bg"},
			{src:"assets/answer-placeholder-bg.png", id:"answer-placeholder-bg"},
			{src:"assets/timer-bg.png", id:"timer-bg"},
			{src:"assets/hourglass-sheet.png", id:"hourglass-sheet"},
			{src:"assets/next-level.png", id:"next-level"},
			{src:"assets/btn-pause.png", id:"btn-pause"},
			{src:"assets/btn-help.png", id:"btn-help"},
			{src:"assets/btn-music.png", id:"btn-music"},
			{src:"assets/btn-sound.png", id:"btn-sound"},
			{src:"assets/popups/popup-victory.png", id:"popup-victory"},
			{src:"assets/popups/popup-defeat.png", id:"popup-defeat"},
			{src:"assets/popups/popup-hint.png", id:"popup-hint"},
            {src:"assets/end.png", id:"end"},
            {src:"assets/btn-end-play-again.png", id:"btn-end-play-again"},
			{src:"assets/audio/bgmusic.ogg", id:"bgmusic"},
			{src:"assets/audio/hint.ogg", id:"audio-hint"},
			{src:"assets/audio/menu.ogg", id:"audio-menu"},
			{src:"assets/audio/right.ogg", id:"audio-right"},
			{src:"assets/audio/wrong.ogg", id:"audio-wrong"},
			{src:"assets/audio/select-sylabe.ogg", id:"select-sylabe"},
			{src:"assets/audio/deselect-sylabe.ogg", id:"deselect-sylabe"},
		]		
		Game.Preloader.load(manifest, startGame);
	}
	
	
	function startGame() {
		
		Game.Audio.playBG("bgmusic");
		
		layerMenu = new createjs.Container();
		layerGame = new createjs.Container();
		layerHelp = new createjs.Container();
		layerEnd = new createjs.Container();
		
		layerBg = new createjs.Container();
		stage.addChild(layerBg);
		layerSylabes = new createjs.Container();
		layerGame.addChild(layerSylabes);
		layerFrame = new createjs.Container();
		layerGame.addChild(layerFrame);
		layerPause = new createjs.Container();
		layerGame.addChild(layerPause);
		layerPopup = new createjs.Container();
		layerGame.addChild(layerPopup);
		
		//menu
		menu = new Game.Menu();
		menu.render(layerMenu);
		menu.setPlayCallback(play);
		menu.setHelpCallback(showHelp);
		
		//help
		help = new Game.Help();
		help.render(layerHelp);
		help.setPlayCallback(closeHelp);
		
		//end
		end = new Game.End();
		end.render(layerEnd);
		end.setPlayAgainCallback(restart);
		
		//frame
		frame = new createjs.Bitmap(Game.Preloader.getAsset("frame"));
		frame.x = 0;
		frame.y = 0;
		frame.width = canvas.width;
		frame.height = canvas.height;
		frame.isAnimated = false;
		frame.name = 'frame';
		layerFrame.addChild(frame);

		//theme
		theme = new createjs.Text('tema','20px SylebeQuiz', '#626264');
		theme.textAlign = 'center';
		theme.textBaseline= 'middle';
		theme.x = canvas.width / 2;
		theme.y = 486;
		theme.height = 44;
		theme.width = 257;
		layerFrame.addChild(theme);
		
		//area
		area = new createjs.Shape();
		area.x = 94;
		area.y = 113;
		area.width = 721;
		area.height = 332;
		area.isAnimated = false;
		area.name = 'area';
		area.mouseEventsEnabled = true;
		layerSylabes.addChild(area);
	
		areaHitArea = new createjs.Shape();
        areaHitArea.width = 900;
        areaHitArea.height = 675;
        areaHitArea.graphics.beginFill(createjs.Graphics.getRGB(255, 255, 255, 0.1))
        areaHitArea.snapToPixel = true
        areaHitArea.graphics.drawRect(0, 0, 900, 675)
    
	    area.hitArea = areaHitArea;
	    
		area.onClick = onClickArea;
		//question
		question = new Game.Question();
		question.render(layerFrame);

		//timer
		timer = new Game.Timer;
		timer.render(layerFrame);
		
		//game buttons
		hintButton = new Game.HintButton();
		hintButton.render(layerFrame);
		hintButton.setCallback(showHint);
		
		pauseButton = new Game.PauseButton();
		pauseButton.render(layerPause);
		pauseButton.setCallbacks(pause, resume);
		
		helpButton = new Game.HelpButton();
		helpButton.render(layerFrame);
		helpButton.setCallback(showHelp);
		
		soundButton = new Game.SoundButton();
		soundButton.render(layerFrame);
		soundButton.setCallbacks(muteSfx, unmuteSfx);
		
		musicButton = new Game.MusicButton();
		musicButton.render(layerFrame);
		musicButton.setCallbacks(muteBg, unmuteBg);
		
		//next level
		nextLevelButton = new Game.NextLevelButton();
		nextLevelButton.render(layerFrame);
		nextLevelButton.setCallback(nextLevel);
		
		//stickers
		stickers = new Game.Stickers();
		stickers.render(layerBg);
		stickers.setStickCallback(victory);
		
		//popups
		popupVictory = new Game.PopupVictory();
		popupVictory.render(layerPopup);
		popupVictory.setCallback(nextQuestion);
		
		popupDefeat = new Game.PopupDefeat();
		popupDefeat.render(layerPopup);
		popupDefeat.setCallback(retry);

		popupHint = new Game.PopupHint();
		popupHint.render(layerPopup);
		
		//pause
	    pauseMask = new createjs.Shape();
	    pauseMask.graphics.beginFill(createjs.Graphics.getRGB(255, 255, 255, 0.7))
	    pauseMask.snapToPixel = true
	    pauseMask.graphics.drawRect(0, 0, 900, 675)
	    pauseMask.onClick = function() { /* do nothing */ }
		
		$(document).bind('keyup', onDocumentKeyUp);
		
		//Ticker.useRAF = true;
		createjs.Ticker.setFPS(30);
		createjs.Ticker.addListener(window);
		window.tick = onTick;

		showMenu();
	}
	
	function onClickArea() {
	    if (selectedSylabes.length == 0) return;
	    var undoSylabe = selectedSylabes.pop();
	    undoSylabe.unselect();
        answeredIndex--
        answerPlaceholders[answeredIndex].clear();
	}
	
	function showMenu() {
	    state = State.Menu;
		stage.addChild(layerMenu);
		stage.removeChild(layerGame);
	}
    
    function showHelp() {
        stage.addChild(layerHelp);
    }

    function showEnd() {
        stage.addChild(layerEnd);
        Game.Audio.playSFX('audio-right');
    }
    
    function closeHelp() {
        stage.removeChild(layerHelp);
        if (state == State.Menu) {
            play();
        }
    }
	
    function restart() {
        Game.Score.reset();
        loadedNextLevel();
    }

	function pause() {
		createjs.Ticker.setPaused(true);
		layerPause.addChild(pauseMask);
		layerPause.addChild(pauseButton.shape);
		Game.Audio.pause();
		stage.update();
	}
	
	function resume() {
		createjs.Ticker.setPaused(false);
		Game.Audio.resume();
		layerPause.removeChild(pauseMask);
	}
	
	function muteSfx() {
        Game.Audio.muteSFX();
	}

	function unmuteSfx() {
        Game.Audio.unmuteSFX();
	}
	
	function muteBg() {
        Game.Audio.muteBG();
	}

	function unmuteBg() {
        Game.Audio.unmuteBG();
	}

	
	function populateQuiz() {
		Game.Score.resetTime();
		theme.text = Game.Level.theme(Game.Score.currentTheme());
		question.changeText(Game.Level.question(Game.Score.currentTheme(), Game.Score.currentQuestion()));
		createSylabes();
		createPlaceholders();		
	}
	
	function createSylabes() {
		var levelSylabes = Game.Level.sylabes(Game.Score.currentTheme(), Game.Score.currentQuestion());
		for (var index = 0; index < (levelSylabes.length); ++index) {
			sylabes.push(createSylabe(levelSylabes[index], sylabePositions[index]));
		}
	}
	
	function destroySylabes() {
		selectedSylabes = [];
		for(var i = 0; i < sylabes.length; ++i) {
			layerSylabes.removeChild(sylabes[i].sprite);
		}
		sylabes = [];		
	}
	
	function createSylabe(sylabe, position) {
		var sylabe = new Game.Sylabe(sylabe, area.x + position.x, area.y + position.y, onSylabeSelect);
		sylabe.render(layerSylabes);
		return sylabe;
	}
	
	function onSylabeSelect(sylabe) {
		answerPlaceholders[answeredIndex].setText(sylabe.label);
		selectedSylabes.push(sylabe);
		sylabe.selectedIndex = answeredIndex++;
		checkResult();
	}
	
	function createPlaceholders() {
		var placeholderSize = 80;
		if (placeholdersContainer != null) layerFrame.removeChild(placeholdersContainer);
		answerPlaceholders = [];
		answeredIndex = 0;
		var answer = Game.Level.answer(Game.Score.currentTheme(), Game.Score.currentQuestion());
		var containerSize = placeholderSize * answer.length;
		placeholdersContainer = new createjs.Container		
		for (var index = 0; index < answer.length; index++) {
			var placeholder = new Game.Placeholder();
			placeholder.render(placeholdersContainer);
			placeholder.setX(index * placeholderSize);
			answerPlaceholders.push(placeholder);
		}
		placeholdersContainer.x = (canvas.width - containerSize) / 2 + (placeholderSize / 2);
		placeholdersContainer.y = 640;
		layerFrame.addChild(placeholdersContainer);
	}
	
	function checkResult() {
		var answer = Game.Level.answer(Game.Score.currentTheme(), Game.Score.currentQuestion());
		if  (answeredIndex != answer.length) return;
		for (var index = 0; index < answer.length; index++) {
			if (answerPlaceholders[index].getText() != answer[index]) {
				return fail();
			}
		}
		placeSticker();
	}
	
	function fail() {
		state = State.Popup;
		popupDefeat.show();
		timer.stop()
	}
	
	function play() {
		state = State.Guessing;
        stage.removeChild(layerMenu);
        stage.removeChild(layerHelp);
        stage.removeChild(layerEnd);
        stage.addChild(layerGame);
        area.onClick = onClickArea;
		timer.play();
		stickers.showMask();
		populateQuiz();
		nextLevelButton.hide();
		hintButton.show();
		timer.show();
	}
	
	function retry() {
		destroySylabes();
		play();
	}
	
	function victory() {
		state = State.Popup;
		popupVictory.show(Game.Score.currentQuestion());
		timer.stop()
	}
	
	function showHint() {
		popupHint.show(Game.Score.currentTheme(), Game.Score.currentQuestion());		
	}
	
	function placeSticker() {
	    area.onClick = undefined;
		state = State.Sticking;
		timer.stop()
		stickers.addSticker(Game.Score.currentQuestion());
		stickers.hideMask();
		destroySylabes();
		hintButton.hide();
		timer.hide();
	}
	
	function nextQuestion() {
		Game.Score.nextQuestion();
		if (Game.Score.currentQuestion() == 0) { 
			finishLevel();
		}
		else {
			play();
		}
	}
	
	function finishLevel() {
		state = State.FinishLevel;
		stickers.hideGrid();
		nextLevelButton.show();
		if (placeholdersContainer != null) layerFrame.removeChild(placeholdersContainer);
		question.changeText("Parabéns! Você acertou todas as perguntas desta fase.");
	    if (Game.Score.isEndOfGame()) {
            showEnd();
	    }
	}
	
	function nextLevel() {
	    //else {
    		Game.Preloader.loadLevel(Game.Score.currentTheme(), loadedNextLevel);
    		nextLevelButton.hide();
    		question.changeText("Carregando próxima fase...");
	    //}
	}
	
	function loadedNextLevel() {
		stickers.reset();
		play();		
	}
	
	function onDocumentKeyUp(e) {
		//alert("Pressed: " + e.keyCode);
	}
	
	function onTick(elapsedTime) {

		Game.Input.updateMousePosition(stage.mouseX, stage.mouseY);		
		Game.Score.updateTime(elapsedTime);

		switch (state) {
			case State.Guessing:
				selectedSylabesFollowMouse();
				UpdateMovements();
				HandleColisions();
				timer.update();
				break;
			case State.Sticking:
				stickers.dragSticker();
				break;
		}
		
		stage.update();
	}
	
	//Physics...
	
	function UpdateMovements() {
		for (var index = 0; index < sylabes.length; index++) {
			sylabes[index].update();
		}
	}
	
	function HandleColisions() {
		for (var index = 0; index < sylabes.length; index++) {
			var sylabe = sylabes[index];
			var sylabePosition = {x: sylabe.sprite.x, y: sylabe.sprite.y};

			for (var otherIndex = index + 1; otherIndex < sylabes.length; otherIndex++) {
				var other = sylabes[otherIndex];
				var otherPosition = {x: other.sprite.x, y: other.sprite.y};
				if (distance(sylabePosition, otherPosition) < Game.Sylabe.size) {
					handleCollision(sylabe, other);
				}
			}
		}
		//Walls Collisions...
		for (var index = 0; index < sylabes.length; index++) {
			var sylabe = sylabes[index];
			if (sylabe.sprite.x < area.x + (Game.Sylabe.size / 2)) {
				sylabe.sprite.x = area.x + (Game.Sylabe.size / 2) + (area.x + (Game.Sylabe.size / 2) - sylabe.sprite.x);
				sylabe.velocity.x *= -1;
			}
			if (sylabe.sprite.x > area.x + area.width - (Game.Sylabe.size / 2)) {
				sylabe.sprite.x = area.x + area.width - (Game.Sylabe.size / 2) + (area.x + area.width - (Game.Sylabe.size / 2)) - sylabe.sprite.x;
				sylabe.velocity.x *= -1;
			}
			if (sylabe.sprite.y < area.y + (Game.Sylabe.size / 2)) {
				sylabe.sprite.y = area.y + (Game.Sylabe.size / 2) + (area.y + (Game.Sylabe.size / 2) - sylabe.sprite.y);
				sylabe.velocity.y *= -1;
			}
			if (sylabe.sprite.y > area.y + area.height - (Game.Sylabe.size / 2)) {
				sylabe.sprite.y = area.y + area.height - (Game.Sylabe.size / 2) + (area.y + area.height - (Game.Sylabe.size / 2)) - sylabe.sprite.y;
				sylabe.velocity.y *= -1;
			}			
		}
	}
	
	function selectedSylabesFollowMouse() {
		var maxVelocity = 50;
		var minAtenuationDistance = 200;
		var constrainedMousePosition = calculateConstrainedMousePosition();
		var previousDistance = 1.0;
		for (var index = 0; index < selectedSylabes.length; index++) {
			var selectedSylabe = selectedSylabes[index]
			var targetPosition = {x: constrainedMousePosition.x + ((Game.Sylabe.size + 10) * (index + 1)), y: constrainedMousePosition.y};
			var position = {x: selectedSylabe.sprite.x, y: selectedSylabe.sprite.y};
			var distanceToTarget = distance(targetPosition, position);
			var currentDistance = (distanceToTarget / minAtenuationDistance);
			var velocity = previousDistance * maxVelocity * currentDistance;
			previousDistance = Math.max(0.2, 1 - currentDistance);
			var dx = targetPosition.x - position.x;
			var dy = targetPosition.y - position.y;
			var angle = Math.atan2(dy, dx);
			selectedSylabe.velocity.x = Math.cos(angle) * velocity;
			selectedSylabe.velocity.y = Math.sin(angle) * velocity;
		}
	}
	
	function calculateConstrainedMousePosition() {
		var constrainedMousePosition = {x: stage.mouseX, y: stage.mouseY};
		constrainedMousePosition.x = Math.max(constrainedMousePosition.x, area.x);
		constrainedMousePosition.x = Math.min(constrainedMousePosition.x, (area.x + area.width - (selectedSylabes.length * Game.Sylabe.size)));
		constrainedMousePosition.y = Math.max(constrainedMousePosition.y, area.y + (0.5 * Game.Sylabe.size));
		constrainedMousePosition.y = Math.min(constrainedMousePosition.y, area.y + area.height - (0.5 * Game.Sylabe.size));
		return constrainedMousePosition
	}
	
	function distance( point1, point2 ) {
	  var xs = 0;
	  var ys = 0;
	  xs = point2.x - point1.x;
	  xs = xs * xs;
	  ys = point2.y - point1.y;
	  ys = ys * ys;
	  return Math.abs(Math.sqrt( xs + ys ));
	}
	
	function handleCollision(sylabe1, sylabe2) {
		var dx = sylabe1.sprite.x - sylabe2.sprite.x;
		var dy = sylabe1.sprite.y - sylabe2.sprite.y;
		var collision_angle = Math.atan2(dy, dx);
		var magnitude_1 = Math.sqrt(sylabe1.velocity.x * sylabe1.velocity.x + sylabe1.velocity.y * sylabe1.velocity.y);
		var magnitude_2 = Math.sqrt(sylabe2.velocity.x*sylabe2.velocity.x+sylabe2.velocity.y*sylabe2.velocity.y);
		var direction_1 = Math.atan2(sylabe1.velocity.y, sylabe1.velocity.x);
		var direction_2 = Math.atan2(sylabe2.velocity.y, sylabe2.velocity.x);
		var new_xspeed_1 = magnitude_1*Math.cos(direction_1-collision_angle);
		var new_yspeed_1 = magnitude_1*Math.sin(direction_1-collision_angle);
		var new_xspeed_2 = magnitude_2*Math.cos(direction_2-collision_angle);
		var new_yspeed_2 = magnitude_2*Math.sin(direction_2-collision_angle);
		var final_xspeed_1 = new_xspeed_2;
		var final_xspeed_2 = new_xspeed_1;
		var final_yspeed_1 = new_yspeed_1;
		var final_yspeed_2 = new_yspeed_2;
		sylabe1.velocity.x = Math.cos(collision_angle)*final_xspeed_1+Math.cos(collision_angle+Math.PI/2)*final_yspeed_1;
		sylabe1.velocity.y = Math.sin(collision_angle)*final_xspeed_1+Math.sin(collision_angle+Math.PI/2)*final_yspeed_1;
		sylabe2.velocity.x = Math.cos(collision_angle)*final_xspeed_2+Math.cos(collision_angle+Math.PI/2)*final_yspeed_2;
		sylabe2.velocity.y = Math.sin(collision_angle)*final_xspeed_2+Math.sin(collision_angle+Math.PI/2)*final_yspeed_2;
		sylabe2.sprite.x = sylabe1.sprite.x - (Math.cos(collision_angle) * Game.Sylabe.size) - 1;
		sylabe2.sprite.y = sylabe1.sprite.y - (Math.sin(collision_angle) * Game.Sylabe.size) - 1;
	}
	
}

/* 
 * Start Project
 */
