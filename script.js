function getComputerChoice() {
  let myArray = ['Rock', 'Paper', 'Scissors'];
  let pcChoice = Math.floor(Math.random() * myArray.length);
  let finalChoice;
  if (pcChoice === 0) {
    finalChoice = myArray[0];
  } else if (pcChoice === 1) {
    finalChoice = myArray[1];
  } else {
    finalChoice = myArray[2];
  }
  return finalChoice;
};

