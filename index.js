//  Variables for each tic-tac-toe space.

var topLeft = document.getElementById('top-left');
var topMiddle = document.getElementById('top-middle');
var topRight = document.getElementById('top-right');
var middleLeft = document.getElementById('middle-left');
var middleMiddle = document.getElementById('middle-middle');
var middleRight = document.getElementById('middle-right');
var bottomLeft = document.getElementById('bottom-left');
var bottomMiddle = document.getElementById('bottom-middle');
var bottomRight = document.getElementById('bottom-right');

//  Variables for the turn/info message and the buttons.


var message = document.getElementById('player-turn');
var resetButton = document.getElementById('reset-button');
var resetMatchButton = document.getElementById('reset-match-button');

//  This variable is used to determine whose turn it is.

var player1Turn = true;

//  Variable for the scoreboard.

var player1Score = document.getElementById("player-1-score");
var player2Score = document.getElementById("player-2-score");

//  Functions that are used to allow the input of the player.
//  These functions are also being used to determine whose turn it is.

//  Top Row.

function topLeftPlay() {

    if (player1Turn == true) {
        topLeft.value = 'X';
        topLeft.disabled = true;
        player1Turn = false;
        message.textContent = "Player Two's turn!";
    }
    else { 
        topLeft.value = 'O';
        topLeft.disabled = true;
        player1Turn = true;
        message.textContent = "Player One's turn!";
    }
}

function topMiddlePlay() {

    if (player1Turn == true) {
        topMiddle.value = 'X';
        topMiddle.disabled = true;
        player1Turn = false;
        message.textContent = "Player Two's turn!";
    }
    else { 
        topMiddle.value = 'O';
        topMiddle.disabled = true;
        player1Turn = true;
        message.textContent = "Player One's turn!";
    }
}

function topRightPlay() {

    if (player1Turn == true) {
        topRight.value = 'X';
        topRight.disabled = true;
        player1Turn = false;
        message.textContent = "Player Two's turn!";
    }
    else { 
        topRight.value = 'O';
        topRight.disabled = true;
        player1Turn = true;
        message.textContent = "Player One's turn!";
    }
}

//  Middle Row.

function middleLeftPlay() {

    if (player1Turn == true) {
        middleLeft.value = 'X';
        middleLeft.disabled = true;
        player1Turn = false;
        message.textContent = "Player Two's turn!";
    }
    else { 
        middleLeft.value = 'O';
        middleLeft.disabled = true;
        player1Turn = true;
        message.textContent = "Player One's turn!";
    }
}

function middleMiddlePlay() {

    if (player1Turn == true) {
        middleMiddle.value = 'X';
        middleMiddle.disabled = true;
        player1Turn = false;
        message.textContent = "Player Two's turn!";
    }
    else { 
        middleMiddle.value = 'O';
        middleMiddle.disabled = true;
        player1Turn = true;
        message.textContent = "Player One's turn!";
    }
}

function middleRightPlay() {

    if (player1Turn == true) {
        middleRight.value = 'X';
        middleRight.disabled = true;
        player1Turn = false;
        message.textContent = "Player Two's turn!";
    }
    else { 
        middleRight.value = 'O';
        middleRight.disabled = true;
        player1Turn = true;
        message.textContent = "Player One's turn!";
    }
}

//  Bottom Row.

function bottomLeftPlay() {

    if (player1Turn == true) {
        bottomLeft.value = 'X';
        bottomLeft.disabled = true;
        player1Turn = false;
        message.textContent = "Player Two's turn!";
    }
    else { 
        bottomLeft.value = 'O';
        bottomLeft.disabled = true;
        player1Turn = true;
        message.textContent = "Player One's turn!";
    }
}

function bottomMiddlePlay() {

    if (player1Turn == true) {
        bottomMiddle.value = 'X';
        bottomMiddle.disabled = true;
        player1Turn = false;
        message.textContent = "Player Two's turn!";
    }
    else { 
        bottomMiddle.value = 'O';
        bottomMiddle.disabled = true;
        player1Turn = true;
        message.textContent = "Player One's turn!";
    }
}

function bottomRightPlay() {

    if (player1Turn == true) {
        bottomRight.value = 'X';
        bottomRight.disabled = true;
        player1Turn = false;
        message.textContent = "Player Two's turn!";
    }
    else { 
        bottomRight.value = 'O';
        bottomRight.disabled = true;
        player1Turn = true;
        message.textContent = "Player One's turn!";
    }
}

//  Function for checking to see who won the games or the overall match.
//  This also keeps track of the score of the games won per match.

function gamePlay() {

    //  Top Row.

    if (topLeft.value == "X" && topMiddle.value == "X" && topRight.value == "X") {

        message.textContent = "Player One wins the GAME!";
        message.style.color = "red";
        topLeft.style.color = "red";
        topMiddle.style.color = "red";
        topRight.style.color = "red";
        middleLeft.disabled = true;
        middleMiddle.disabled = true;
        middleRight.disabled = true;
        bottomLeft.disabled = true;
        bottomMiddle.disabled = true;
        bottomRight.disabled = true;
        resetButton.style.display = "block";
        scoreboard();
    }
    else if (topLeft.value == "O" && topMiddle.value == "O" && topRight.value == "O") {

        message.textContent = "Player Two wins the GAME!";
        message.style.color = "red";
        topLeft.style.color = "red";
        topMiddle.style.color = "red";
        topRight.style.color = "red";
        middleLeft.disabled = true;
        middleMiddle.disabled = true;
        middleRight.disabled = true;
        bottomLeft.disabled = true;
        bottomMiddle.disabled = true;
        bottomRight.disabled = true;
        resetButton.style.display = "block";
        scoreboard();
    }

    //  Middle Row.

    else if (middleLeft.value == "X" && middleMiddle.value == "X" && middleRight.value == "X") {

        message.textContent = "Player One wins the GAME!";
        message.style.color = "red";
        middleLeft.style.color = "red";
        middleMiddle.style.color = "red";
        middleRight.style.color = "red";
        topLeft.disabled = true;
        topMiddle.disabled = true;
        topRight.disabled = true;
        bottomLeft.disabled = true;
        bottomMiddle.disabled = true;
        bottomRight.disabled = true;
        resetButton.style.display = "block";
        scoreboard();
    }
    else if (middleLeft.value == "O" && middleMiddle.value == "O" && middleRight.value == "O") {

        message.textContent = "Player Two wins the GAME!";
        message.style.color = "red";
        middleLeft.style.color = "red";
        middleMiddle.style.color = "red";
        middleRight.style.color = "red";
        topLeft.disabled = true;
        topMiddle.disabled = true;
        topRight.disabled = true;
        bottomLeft.disabled = true;
        bottomMiddle.disabled = true;
        bottomRight.disabled = true;
        resetButton.style.display = "block";
        scoreboard();
    }

    //  Bottom Row.

    else if (bottomLeft.value == "X" && bottomMiddle.value == "X" && bottomRight.value == "X") {

        message.textContent = "Player One wins the GAME!";
        message.style.color = "red";
        bottomLeft.style.color = "red";
        bottomMiddle.style.color = "red";
        bottomRight.style.color = "red";
        topLeft.disabled = true;
        topMiddle.disabled = true;
        topRight.disabled = true;
        middleLeft.disabled = true;
        middleMiddle.disabled = true;
        middleRight.disabled = true;
        resetButton.style.display = "block";
        scoreboard();
    }
    else if (bottomLeft.value == "O" && bottomMiddle.value == "O" && bottomRight.value == "O") {

        message.textContent = "Player Two wins the GAME!";
        message.style.color = "red";
        bottomLeft.style.color = "red";
        bottomMiddle.style.color = "red";
        bottomRight.style.color = "red";
        topLeft.disabled = true;
        topMiddle.disabled = true;
        topRight.disabled = true;
        middleLeft.disabled = true;
        middleMiddle.disabled = true;
        middleRight.disabled = true;
        resetButton.style.display = "block";
        scoreboard();
    }

    //  Left Column.

    else if (topLeft.value == "X" && middleLeft.value == "X" && bottomLeft.value == "X") {

        message.textContent = "Player One wins the GAME!";
        message.style.color = "red";
        topLeft.style.color = "red";
        middleLeft.style.color = "red";
        bottomLeft.style.color = "red";
        topMiddle.disabled = true;
        middleMiddle.disabled = true;
        bottomMiddle.disabled = true;
        topRight.disabled = true;
        middleRight.disabled = true;
        bottomRight.disabled = true;
        resetButton.style.display = "block";
        scoreboard();
    }
    else if (topLeft.value == "O" && middleLeft.value == "O" && bottomLeft.value == "O") {

        message.textContent = "Player Two wins the GAME!";
        message.style.color = "red";
        topLeft.style.color = "red";
        middleLeft.style.color = "red";
        bottomLeft.style.color = "red";
        topMiddle.disabled = true;
        middleMiddle.disabled = true;
        bottomMiddle.disabled = true;
        topRight.disabled = true;
        middleRight.disabled = true;
        bottomRight.disabled = true;
        resetButton.style.display = "block";
        scoreboard();
    }

    // Middle Column.

    else if (topMiddle.value == "X" && middleMiddle.value == "X" && bottomMiddle.value == "X") {

        message.textContent = "Player One wins the GAME!";
        message.style.color = "red";
        topMiddle.style.color = "red";
        middleMiddle.style.color = "red";
        bottomMiddle.style.color = "red";
        topLeft.disabled = true;
        middleLeft.disabled = true;
        bottomLeft.disabled = true;
        topRight.disabled = true;
        middleRight.disabled = true;
        bottomRight.disabled = true;
        resetButton.style.display = "block";
        scoreboard();
    }
    else if (topMiddle.value == "O" && middleMiddle.value == "O" && bottomMiddle.value == "O") {

        message.textContent = "Player Two wins the GAME!";
        message.style.color = "red";
        topMiddle.style.color = "red";
        middleMiddle.style.color = "red";
        bottomMiddle.style.color = "red";
        topLeft.disabled = true;
        middleLeft.disabled = true;
        bottomLeft.disabled = true;
        topRight.disabled = true;
        middleRight.disabled = true;
        bottomRight.disabled = true;
        resetButton.style.display = "block";
        scoreboard();
    }

    //  Right Column

    else if (topRight.value == "X" && middleRight.value == "X" && bottomRight.value == "X") {

        message.textContent = "Player One wins the GAME!";
        message.style.color = "red";
        topRight.style.color = "red";
        middleRight.style.color = "red";
        bottomRight.style.color = "red";
        topLeft.disabled = true;
        middleLeft.disabled = true;
        bottomLeft.disabled = true;
        topMiddle.disabled = true;
        middleMiddle.disabled = true;
        bottomMiddle.disabled = true;
        resetButton.style.display = "block";
        scoreboard();
    }
    else if (topRight.value == "O" && middleRight.value == "O" && bottomRight.value == "O") {

        message.textContent = "Player Two wins the GAME!";
        message.style.color = "red";
        topRight.style.color = "red";
        middleRight.style.color = "red";
        bottomRight.style.color = "red";
        topLeft.disabled = true;
        middleLeft.disabled = true;
        bottomLeft.disabled = true;
        topMiddle.disabled = true;
        middleMiddle.disabled = true;
        bottomMiddle.disabled = true;
        resetButton.style.display = "block";
        scoreboard();
    }

    //  Top-Left to Bottom-Right Diagonal.

    else if (topLeft.value == "X" && middleMiddle.value == "X" && bottomRight.value == "X") {

        message.textContent = "Player One wins the GAME!";
        message.style.color = "red";
        topLeft.style.color = "red";
        middleMiddle.style.color = "red";
        bottomRight.style.color = "red";
        topMiddle.disabled = true;
        topRight.disabled = true;
        middleLeft.disabled = true;
        middleRight.disabled = true;
        bottomLeft.disabled = true;
        bottomMiddle.disabled = true;
        resetButton.style.display = "block";
        scoreboard();
    }
    else if (topLeft.value == "O" && middleMiddle.value == "O" && bottomRight.value == "O") {

        message.textContent = "Player Two wins the GAME!";
        message.style.color = "red";
        topLeft.style.color = "red";
        middleMiddle.style.color = "red";
        bottomRight.style.color = "red";
        topMiddle.disabled = true;
        topRight.disabled = true;
        middleLeft.disabled = true;
        middleRight.disabled = true;
        bottomLeft.disabled = true;
        bottomMiddle.disabled = true;
        resetButton.style.display = "block";
        scoreboard();
    }

    //  Top-Right to Bottom-Left Diagonal.

    else if (topRight.value == "X" && middleMiddle.value == "X" && bottomLeft.value == "X") {

        message.textContent = "Player One wins the GAME!";
        message.style.color = "red";
        topRight.style.color = "red";
        middleMiddle.style.color = "red";
        bottomLeft.style.color = "red";
        topMiddle.disabled = true;
        topLeft.disabled = true;
        middleLeft.disabled = true;
        middleRight.disabled = true;
        bottomRight.disabled = true;
        bottomMiddle.disabled = true;
        resetButton.style.display = "block";
        scoreboard();
    }
    else if (topRight.value == "O" && middleMiddle.value == "O" && bottomLeft.value == "O") {

        message.textContent = "Player Two wins the GAME!";
        message.style.color = "red";
        topRight.style.color = "red";
        middleMiddle.style.color = "red";
        bottomLeft.style.color = "red";
        topMiddle.disabled = true;
        topLeft.disabled = true;
        middleLeft.disabled = true;
        middleRight.disabled = true;
        bottomRight.disabled = true;
        bottomMiddle.disabled = true;
        resetButton.style.display = "block";
        scoreboard();
    }
    else if ((topLeft.value == "X" || topLeft.value == "O") 
        && (topMiddle.value == "X" || topMiddle.value == "O") 
        && (topRight.value == "X" || topRight.value == "O") 
        && (middleLeft.value == "X" || middleLeft.value == "O") 
        && (middleMiddle.value == "X" || middleMiddle.value == "O") 
        && (middleRight.value == "X" || middleRight.value == "O") 
        && (bottomLeft.value == "X" || bottomLeft.value == "O") 
        && (bottomMiddle.value == "X" || bottomMiddle.value == "O") 
        && (bottomRight.value == "X" || bottomRight.value == "O")) {

        message.textContent = "It's a TIE!";
        resetButton.style.display = "block";
    }
}

//  Function for keeping track of the score.

function scoreboard () {

    if (message.textContent == "Player One wins the GAME!") {

        player1Score.textContent += "X";

        if (player1Score.textContent == "XXXXX") {

            message.style.color = "green";
            message.textContent = "Player One wins the MATCH!";
            resetButton.style.display = "none";
            resetMatchButton.style.display = "block";
        }
    }
    else if (message.textContent == "Player Two wins the GAME!") {

        player2Score.textContent += "O";

        if (player2Score.textContent == "OOOOO") {
            
            message.style.color = "green";
            message.textContent = "Player Two wins the MATCH!";
            resetButton.style.display = "none";
            resetMatchButton.style.display = "block";
        }
    }
}

//  Function for resetting the game.

function resetGame() {

    topLeft.disabled = false;
    topMiddle.disabled = false;
    topRight.disabled = false;
    middleLeft.disabled = false;
    middleMiddle.disabled = false;
    middleRight.disabled = false;
    bottomLeft.disabled = false;
    bottomMiddle.disabled = false;
    bottomRight.disabled = false;
    topLeft.value = '';
    topMiddle.value = '';
    topRight.value = '';
    middleLeft.value = '';
    middleMiddle.value = '';
    middleRight.value = '';
    bottomLeft.value = '';
    bottomMiddle.value = '';
    bottomRight.value = '';
    topLeft.style.color = "blue";
    topMiddle.style.color = "blue";
    topRight.style.color = "blue";
    middleLeft.style.color = "blue";
    middleMiddle.style.color = "blue";
    middleRight.style.color = "blue";
    bottomLeft.style.color = "blue";
    bottomMiddle.style.color = "blue";
    bottomRight.style.color = "blue";
    message.textContent = "Player One starts the GAME!";
    message.style.color = "black";
    player1Turn = true;
    resetButton.style.display = "none";
}

//  Function for resetting the match (entire Page).

function resetMatch () {

    location.reload();
}