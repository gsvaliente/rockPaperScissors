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
    return 'we tied';
  } else if ((userSelect === 'rock' && pcSelect === 'scissor') || (userSelect === 'paper' && pcSelect === 'rock') || (userSelect === 'scissor' && pcSelect === 'paper')) {
    console.log(`You win, ${userSelect} beats ${pcSelect}.`);
    return true;
  } else {
    console.log(`You lose, ${pcSelect} beats ${userSelect}.`);
    return false;
  }
}

function game() {
  let userScore = 0;
  let pcScore = 0;
  for (i = 1; i <= 5; i++) {
    let outcome = singleRound();
    if (outcome === false) {
      pcScore += 1;
    } else if (outcome === true) {
      userScore += 1;
    }
    console.log(userScore, pcScore);
  }
  if (userScore === pcScore) {
    console.log('WE TIED');
  } else if (userScore > pcScore) {
    console.log('ARGH YOU WON!');
  } else {
    console.log('HA HA HA YOU LOST!');
  }
}
