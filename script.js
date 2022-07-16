function getComputerChoice() {
  choice = Math.floor(Math.random() * 3) + 1;
  choiceValue = '';
  if (choice === 1) {
    choiceValue = 'rock';
    return choiceValue;
  } else if (choice === 2) {
    choiceValue = 'paper';
    return choiceValue;
  } else {
    choiceValue = 'scissor';
    return choiceValue;
  }
}

function singleRound(userSelect, pcSelect) {
  userSelect = prompt('write your value', 'rock, paper, or scissor');
  // userSelect = 'rock';
  userSelect = userSelect.toLowerCase();
  pcSelect = getComputerChoice();
  console.log(pcSelect);

  if (userSelect === pcSelect) {
    console.log('we tied');
  } else if ((userSelect === 'paper' && pcSelect === 'rock') || (userSelect === 'rock' && pcSelect === 'scissor') || (userSelect === 'scissor' && pcSelect === 'paper')) {
    console.log(`congratulations you win, you chose ${userSelect} and i chose ${pcSelect}`);
  } else {
    console.log(`too bad, i beat you! , you chose ${userSelect} and i chose ${pcSelect}`);
  }
}
