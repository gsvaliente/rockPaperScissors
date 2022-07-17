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
}

function game() {
  if (userScore > pcScore) {
    console.log('CONGRATULATIONS YOU BEAT ME');
  } else {
    console.log('HA HA HA YOU LOST');
  }
}
