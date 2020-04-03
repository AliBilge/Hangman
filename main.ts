var _this;
var maxChances = 6;

var gameController = {
  form: document.querySelector("form"),

  input: <HTMLInputElement>document.getElementById('guess'),
  //input: document.querySelector('[name="guess"]'),

  word: document.querySelector(".word"),

  chances: document.querySelector(".chances"),

  previousGuesses: document.querySelector(".previous-guesses")
};
function Hangman() {
  //Properties
  this.runGame = true;
  this.words = [
    "program",
    "testing",
    "Clayton",
    "TECHCareers",
    "cat",
    "dog",
    "tiger",
    "lion",
    "monkey",
    "rat",
    "bear",
    "goat",
    "horse",
    "river",
    "truck",
    "airplane",
    "boat",
    "building",
    "garden",
    "whale",
    "shark",
    "program",
    "book"
  ];
  this.word = "";
  this.displayString = "";
  this.chances = maxChances;
  this.previousGuesses = [];
  //Methods
  this.run = function() {
    this.setup();
    _this = this;
    gameController.form.addEventListener("submit", this.guessLetter);
  };

  this.setup = function() {
    //Reset the game back to a starting position
    gameController.previousGuesses.innerHTML = "";
    this.previousGuesses = [];
    this.chances = maxChances;
    this.displayString = "";
    //Get a new word
    var i = Math.floor(Math.random() * this.words.length); //The floor() method rounds a number DOWNWARDS to the nearest integer, and returns the result.
    this.word = this.words[i];

    //How do we display enough empty spaces
    for (var i = 0; i < this.word.length; i++) this.displayString += "_"; //for loops do not need {} braces IF we only have one line of code inside the loop. "this.dislayString += '_';" is actually INSIDE this loop.

    gameController.word.textContent = this.displayString;
    gameController.chances.textContent = this.chances;
    console.log(this.word);
  };

  this.guessLetter = function(event) {
    event.preventDefault();
    if (_this.word.includes(gameController.input.value)) {
      for (var i = 0; i < _this.word.length; i++) {
        var currentChar = _this.word.substr(i, 1);
        if (currentChar === gameController.input.value) {
          _this.displayString =
            _this.displayString.slice(0, i) +
            currentChar +
            _this.displayString.slice(i + 1, _this.displayString.length);
          gameController.word.textContent = _this.displayString;
        }
      }

      if (!gameController.word.textContent.includes("_")) {
        //Win!
        _this.win();
      }
    } else {
      //Letter is not in word
      //Burn one chance
      _this.chances--;
      //Update user interface
      gameController.chances.textContent = _this.chances;

      //Check for game over
      if (_this.chances == 0) {
        _this.lose();
      }
    }

    //Reset the input
    gameController.input.value = "";
  };

  //Win
  this.win = function() {
    if (confirm("You win! Play again?")) {
      this.setup();
    }
  };

  //Lose
  this.lose = function() {
    if (confirm("You lose! Play again?")) {
      this.setup();
    }
  };
}

//END OF FILE
var game = new Hangman();
game.run();
