// // Word Array

// var words = [cat, dog, tiger, lion, monkey, rat, bear, goat, horse, river, truck, airplane, boat, building, garden, whale, shark, program, book];

// var word = words[Math.floor(Math.random()*words.length)];

// // Answer var array

// var answer = [];
// for (var i = 0; i<word.length; i++) {
//     answer[i] = "_";
// }

// var remainingLetters = word.length;



var _this;

var gameController = {
    form: document.querySelector( 'form' ),
    input: document.querySelector( '[name="guess"]' ),
    word: document.querySelector( '.word' ),
    chances: document.querySelector( '.chances' ),
    previousGuesses: document.querySelector( '.previous-guesses' )
}
function Hangman() {
    //Properties
    this.runGame = true;
    this.words = [
        'program',
        'testing',
        'Clayton',
        'TECHCareers'
    ];
    this.word = '';
    this.displayString = '';
    this.chances = 6;
    this.previousGuesses = [];
    //Methods
    this.run = function () {
        this.setup();
    };

    this.setup = function () {
        //Reset the game back to a starting position
        gameController.previousGuesses.innerHTML = '';
        this.previousGuesses = [];
        this.chances = 6;
        this.displayString = '';
        //Get a new word
        var i = Math.floor(Math.random() * this.words.length);//The floor() method rounds a number DOWNWARDS to the nearest integer, and returns the result.
        this.word = this.words[i];

        //How do we display enough empty spaces
        for ( var i = 0; i < this.word.length; i++ ) this.displayString += '_';//for loops do not need {} braces IF we only have one line of code inside the loop. "this.dislayString += '_';" is actually INSIDE this loop.
        
        gameController.word.textContent = this.displayString;

    };
};


//END OF FILE
var game = new Hangman();
game.run();