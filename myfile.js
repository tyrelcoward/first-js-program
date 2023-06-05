const playerSelection = prompt("What is your choice?");
const computerSelection = getComputerChoice();

function getComputerChoice() {
    const choices = ['rock','paper', 'scissors'];
    random =  Math.floor(Math.random() * choices.length);
    choice = choices[random];
    return choice;
}
