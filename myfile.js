function getComputerChoice() {
    const choices = ['rock','paper', 'scissors'];
    random =  Math.floor(Math.random() * choices.length);
    choice = choices[random];
    return choice;
}
