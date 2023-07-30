let playerScore = 0;
let computerScore = 0;

function play(playerChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  const result = playRound(playerChoice, computerChoice);
  document.getElementById('results').innerText = result;
}

function updateScores() {
  document.getElementById('player-score').innerText = `Player: ${playerScore}`;
  document.getElementById('computer-score').innerText = `Computer: ${computerScore}`;
}

function playRound(playerChoice, computerChoice) {
  if (!['rock', 'paper', 'scissors'].includes(playerChoice)) {
    return "Invalid choice. Please choose 'rock', 'paper', or 'scissors'.";
  }

  let result = '';

  if (playerChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    playerScore++;
    result = `You win! You chose ${playerChoice}, computer chose ${computerChoice}.`;
  } else {
    computerScore++;
    result = `You lose! You chose ${playerChoice}, computer chose ${computerChoice}.`;
  }
  updateScores();

  return result;
}

function game() {
  playerScore = 0;
  computerScore = 0;

  for (let x = 0; x < 5; x++) {
    const choices = ['rock', 'paper', 'scissors'];
    const playerChoice = choices[Math.floor(Math.random() * choices.length)];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const result = playRound(playerChoice, computerChoice);
    document.getElementById('results').innerText += result + "\n";
  }
  if (playerScore > computerScore) {
    document.getElementById('results').innerText += "You have won the game!";
  } else if (playerScore < computerScore) {
    document.getElementById('results').innerText += "Computer won the game!";
  } else {
    document.getElementById('results').innerText += "It's a tie!";
  }
}
