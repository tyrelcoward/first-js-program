
function getComputerChoice() {
    const choices = ['rock','paper', 'scissors'];
    let random =  Math.floor(Math.random() * choices.length);
    let choice = choices[random];
    return choice;
}


function play(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
         console.log("Tie! You both selected " + playerSelection);
    }else if (playerSelection == 'rock' && computerSelection == 'scissors'){
         console.log("You win, Rock beats Scissors!");
         return true;
    }else if (playerSelection == 'rock' && computerSelection == 'paper'){
         console.log("You lost! Paper beats Rock!");
         return false;
    }else if (playerSelection == 'paper' && computerSelection == 'rock'){
         console.log("You win! Paper beats Rock!");
         return true;
    }else if (playerSelection == 'paper' && computerSelection == 'scissors'){
         console.log("You lose! Scissors beats Paper!");
         return true;
    }else if (playerSelection == 'scissors' && computerSelection == 'rock'){
         console.log("You lose! Rock beats Scissors!");
         return false;
    }else if (playerSelection == 'scissors' && computerSelection == 'paper'){
         console.log("You win! Scissors beats paper!");
         return true;
    }
}

function game(){
    var userWins = 0;
    var compWins = 0;
    let i = 0;
    while (i < 5) { 
         let playerSelection = prompt("What is your choice?").toLowerCase();
         let computerSelection = getComputerChoice();
         if (play(playerSelection, computerSelection)) {
            userWins++;
         }else {
            compWins++;
         }
         i++;
     }
     if (userWins == compWins){
        console.log("There has been a tie!");
     }else if (userWins < compWins){
        console.log("The computer has won!");
     }else {
        console.log("You have won");
     }

}

console.log(game());