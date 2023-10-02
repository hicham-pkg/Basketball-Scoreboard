let counterHome = 0;
let counterGuest = 0;
let gameEnded = false;

function add1PointHome() {
    if (!gameEnded) {
        counterHome += 1;
        document.getElementById("box-home").innerHTML = counterHome;
        highlightWinner();
    }
}

function add2PointsHome() {
    if (!gameEnded) {
        counterHome += 2;
        document.getElementById("box-home").innerHTML = counterHome;
        highlightWinner();
    }
}

function add3PointsHome() {
    if (!gameEnded) {
        counterHome += 3;
        document.getElementById("box-home").innerHTML = counterHome;
        highlightWinner();
    }
}

function add1PointGuest() {
    if (!gameEnded) {
        counterGuest += 1;
        document.getElementById("box-guest").innerHTML = counterGuest;
        highlightWinner();
    }
}

function add2PointsGuest() {
    if (!gameEnded) {
        counterGuest += 2;
        document.getElementById("box-guest").innerHTML = counterGuest;
        highlightWinner();
    }
}

function add3PointsGuest() {
    if (!gameEnded) {
        counterGuest += 3;
        document.getElementById("box-guest").innerHTML = counterGuest;
        highlightWinner();
    }
}

function highlightWinner() {
    const winningMessage = document.getElementById("winning-message");

    if (counterHome > counterGuest) {
        winningMessage.innerHTML = "HOME IS WINNING";
    } else if (counterGuest > counterHome) {
        winningMessage.innerHTML = "GUEST IS WINNING";
    } else {
        winningMessage.innerHTML = "IT'S A TIE";
    }
}
function newGame()
{
     counterHome = 0
     counterGuest = 0
     document.getElementById("box-home").innerHTML = counterHome;
     document.getElementById("box-guest").innerHTML = counterGuest;
     document.getElementById("winning-message").innerHTML = "";
     gameEnded = false;
}
function endGame() {
    const difference = Math.abs(counterHome - counterGuest);
    let message;

    if (counterHome > counterGuest) {
        message = `HOME wins by ${difference} points!`;
    } else if (counterGuest > counterHome) {
        message = `GUEST wins by ${difference} points!`;
    } else {
        message = "It's a tie!";
    }

    document.getElementById("winning-message").innerHTML = message;
    gameEnded = true;
}
