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
  let userScore = 0;
  let pcScore = 0;

  if (userSelect === pcSelect) {
    console.log('we tied');
  } else if ((userSelect === 'rock' && pcSelect === 'scissor') || (userSelect === 'paper' && pcSelect === 'rock') || (userSelect === 'scissor' && pcSelect === 'paper')) {
    console.log(`You win, ${userSelect} beats ${pcSelect}.`);
    userScore += 1;
    return userScore;
  } else {
    console.log(`Yo lose, ${pcSelect} beats ${userSelect}.`);
    pcScore += 1;
    return pcScore;
  }
}

function game() {
  let userScore = 0;
  let pcScore = 0;
  for (i = 1; i <= 5; i++) {}
  if (userScore > pcScore) {
    console.log('CONGRATULATIONS YOU BEAT ME');
  } else {
    console.log('HA HA HA YOU LOST');
  }
}
