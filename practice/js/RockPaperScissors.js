// Rock paper scissors is a classic two player game. Each player chooses either rock, paper, or scissors. The items are compared, and whichever player chooses the more powerful item wins.

const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        console.log('Invalid option.');
    }
}

const getComputerChoice = () => {
    let randomNum = Math.floor(Math.random());
    if (randomNum === 0) {
        return 'rock';
    } else if (randomNum === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return `Player chose ${userChoice} and Computer chose ${computerChoice}. The game is a tie.`;
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
          return `Human player chose ${userChoice} and Computer chose ${computerChoice}. The computer won.`;
        } else {
          return `Player chose ${userChoice} and Computer chose ${computerChoice}. The human player won.`;
        }
      }
      if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
          return `Human player chose ${userChoice} and Computer chose ${computerChoice}. The computer won.`;
        } else {
          return `Player chose ${userChoice} and Computer chose ${computerChoice}. The human player won.`;
        }
      }
      if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
          return `Human player chose ${userChoice} and Computer chose ${computerChoice}. The computer won.`;
        } else {
          return `Player chose ${userChoice} and Computer chose ${computerChoice}. The human player won.`;
        }
      }
}

const playGame = () => {
    let userChoice = getUserChoice('paper');
    let computerChoice = getComputerChoice();
    console.log(determineWinner(userChoice, computerChoice));
}
playGame();
