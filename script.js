// wins
// losses
// ties
// computerChoices = ["R","P","S"]
// userChoice

//prompt the user for their answer and store in userChoice

var stats = {
    win: 0,
    loss: 0,
    tie: 0
};

function play() {

    var rPS = prompt("Rock, Paper, or Scissors. (Select r, p, or s)");

    var userChoice = ["r","p","s"]
    
    var computerChoice = userChoice[Math.floor(Math.random() * userChoice.length)];
    
    
    
    if (rPS == userChoice[0] && computerChoice == userChoice[0]) {
        alert("Computer selected Rock. It's a tie!");
        stats.tie++
    } else if (rPS == userChoice[0] && computerChoice == userChoice[1]) {
        alert("Computer selected Paper. You lose!");
        stats.loss++
    } else if (rPS == userChoice[0] && computerChoice == userChoice[2]) {
        alert("Computer selected Scissors. You win!");
        stats.win++
    } else if (rPS == userChoice[1] && computerChoice == userChoice[1]) {
        alert("Computer selected Paper. It's a tie!");
        stats.tie++
    } else if (rPS == userChoice[1] && computerChoice == userChoice[2]) {
        alert("Computer selected Scissors. You lose!");
        stats.loss++
    } else if (rPS == userChoice[1] && computerChoice == userChoice[0]) {
        alert("Computer selected Rock. You win!");
        stats.win++
    } else if (rPS == userChoice[2] && computerChoice == userChoice[2]) {
        alert("Computer selected Scissors. It's a tie!");
        stats.tie++
    } else if (rPS == userChoice[2] && computerChoice == userChoice[1]) {
        alert("Computer selected Paper. You win!");
        stats.win++
    } else if (rPS == userChoice[2] && computerChoice == userChoice[0]) {
        alert("Computer selected Rock. You lose!");
        stats.loss++
    }

    alert("Wins: " + stats.win + "\nLosses: " + stats.loss + "\nTies: " + stats.tie);

    if( confirm("Would you like to play again?") ) play();


};

play();

//Determine the win, loss, or tie condition using an if else statement and alert them of win/loss/tie and IF the user wins then we increment wins by 1