function getComputerChoice() {
  let myArray = ['Rock', 'Paper', 'Scissors'];
  let pcChoice = Math.floor(Math.random() * myArray.length);
  let finalPCChoice;
  if (pcChoice === 0) {
    finalPCChoice = myArray[0];
  } else if (pcChoice === 1) {
    finalPCChoice = myArray[1];
  } else {
    finalPCChoice = myArray[2];
  }
  return finalPCChoice;
};


function getPlayerSelection() {
  let playerChoice = prompt('Rock, Paper or Scissors?');
  let finalPlayerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();
  return finalPlayerChoice;
};


function playRound() {

  let pcChoiceVar = getComputerChoice();
  let playerChoiceVar = getPlayerSelection();
  let result;

  if (pcChoiceVar === 'Rock' && playerChoiceVar === 'Paper') {
    result = 'You win! Paper beats Rock';

  } else if (pcChoiceVar === 'Rock' && playerChoiceVar === 'Scissors') {
    result = 'You lose! Rock beats Scissors';

  } else if (pcChoiceVar === 'Paper' && playerChoiceVar === 'Rock') {
    result = 'You lose! Paper beats Rock';

  } else if (pcChoiceVar === 'Paper' && playerChoiceVar === 'Scissors') {
    result = 'You win! Scissors beats Paper';

  } else if (pcChoiceVar === 'Scissors' && playerChoiceVar === 'Rock') {
    result = 'You win! Rock beats Scissors';

  } else if (pcChoiceVar === 'Scissors' && playerChoiceVar === 'Paper') {
    result = 'You lose! Scissors beats Paper';

  } else if (pcChoiceVar === playerChoiceVar) {
    result = 'Tie!';

  } else {
    result = "You didn't enter 'Rock', 'Paper' or 'Scissors'";
  
  };
  return result;
};
