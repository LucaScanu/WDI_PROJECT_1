/* Pseudo Code
-The aim of the project is to create a memory game of flipping tiles to be paired against time. The game will have three different levels of difficulty (easy, medium, hard) and the option to compete against a friend.
-The game board will be a 6X6 grid and the tiles will have pictures of famous cartoon characters and associated sounds.
-The player will have to click on the difficulty level to start the game or click to play against another player.
-On start will have to click on  each tile/card to flip them and reveal a picture to pair it with another tile with the same picture on it.
-If the pair is successfull the tiles with the paired pictures will disappear until no tiles remain in the board.
-If the pair is unsuccesful the tiles will flip back to their original status.
-If single play is selected  the player will have a set time to finish the game, when the time is finished the play is halted.
-If the player goes against another player there won't be any time limit and the player that finishes first will win.
-BASIC GAME:
-create a 6 x 6 grid to display the game board.
-each cell of the grid corresponds to one of cards face down.
-create an array of images
-assign a pair of each picture to the cards array for a total of 36 pictures
-assign each picture randomly to each square of the game board
-the user should be able to click on only two different cards each play.
-the cards should flip on click.
-the cards with the same picture are 'paired' and should disappear from the board
-the cards that are not paired should flip back and available to be clicked again
-The game is finished when all cards are cleared from the board
COMPLICATIONS:
-add a timer to the game
-the player will have to clear the board in a set time
-the last ten seconds the timer will pulse red
-once the time has ran out the game will stop and a 'game over' message will appear on the screen
-add 'easy', 'medium', 'hard' levels of difficulty
-add the option of two player playing gainst each other
-add sounds to play when cards are paired
-display a winning message at the end of the game
-add a counter to keep track of best times, how many games won and how many games lost.
-finally style the page

*/

// create a Game object

var Game = Game || {};

Game.boardBase = 6;
Game.cards = [];
Game.board;
Game.square;

// created an array of 18 images

var deck = [
  'images/Bart1.jpeg',
  'images/Bart2.jpeg',
  'images/Brian1.jpeg',
  'images/Brian2.jpeg',
  'images/Cleveland.jpeg',
  'images/Fredflinstone.jpeg',
  'images/Homer2.jpeg',
  'images/Homers1.jpeg',
  'images/PeterG.jpeg',
  'images/PeterG2.jpeg',
  'images/Popeye.jpeg',
  'images/Quagmire3.jpeg',
  'images/Quagmire4.jpeg',
  'images/Roger1.jpeg',
  'images/Roger2.jpeg',
  'images/Rollo.jpeg',
  'images/Stewie.jpeg',
  'images/Stewie2.jpeg'
];

// this for loop will push twice the cards in our deck into the Game.cards array

for (var i = 1; i < 19; i++) {
  var randomCards = Math.floor(Math.random(deck.length));
  var playCards = deck[randomCards];
  Game.cards.push(playCards);
  Game.cards.push(playCards);
  deck.splice(randomCards, 1);
}
// This sort function will sort the cards randomly

Game.cards.sort(function() {
  return 0.5 - Math.random();
});


console.log(Game.cards);
// create gameboard with jquery

Game.createBoard = function() {
  var $body = $('body');
  var $board = $(document.createElement('div')).addClass('board');
  $body.append($board);
  Game.createSquare($board);
};

// create the square(div) elements and append it to the board
Game.createSquare = function($board) {
  $(Game.cards).each(function(index) {
    var $square = $(document.createElement('div')).addClass('square');
    $board.append($square);
  });
  // Call the createCards function
  Game.createCards();
};
// Create two divs for the card front and back
// append the cards to each square

Game.createCards = function($square) {
  $(Game.square).each(function(index) {
    var $front = $(document.createElement('div')).addClass('front');
    var $back = $(document.createElement('div')).addClass('back');
    $square.append($front, $back);
  });
};

$(start);
//
function start() {
  Game.createBoard();
}
