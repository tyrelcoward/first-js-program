const playerSelection = prompt("What is your choice?");
const computerSelection = getComputerChoice();

function getComputerChoice() {
    const choices = ['rock','paper', 'scissors'];
    random =  Math.floor(Math.random() * choices.length);
    choice = choices[random];
    return choice;
}

function play(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        console.log("Tie! You both selected" + playerSelection);
    }else if (playerSelection == 'rock' && computerSelection == 'scissors'){
        console.log("You win, Rock beats Scissors!");
    }else if (playerSelection == 'rock' && computerSelection == 'paper'){
        console.log("You lost! Paper beats Rock!")
    }else if (playerSelection == 'paper' && computerSelection == 'rock'){
        console.log("You win! Paper beats Rock!")
    }else if (playerSelection == 'paper' && computerSelection == 'scissors'){
        console.log("You lose! Scissors beats Paper!")
    }else if (playerSelection == 'scissors' && computerSelection == 'rock'){
        console.log("You lose! Rock beats Scissors!")
    }else if (playerSelection == 'scissors' && computerSelection == 'paper'){
        console.log("You win! Scissors beats paper!")
    }
}