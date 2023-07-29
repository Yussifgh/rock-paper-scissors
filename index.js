// JavaScript
function play(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const result = playround(playerChoice, computerChoice);
    document.getElementById('results').innerText = result;
  }
  
  function playround(playerChoice, computerChoice) {
    if (!['rock', 'paper', 'scissors'].includes(playerChoice)) {
      return "Invalid choice. Please choose 'rock', 'paper', or 'scissors'.";
    }
    if (playerChoice === computerChoice) {
      return "It's a tie!";
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      return `You win! You chose ${playerChoice}, computer chose ${computerChoice}.`;
    } else {
      return `You lose! You chose ${playerChoice}, computer chose ${computerChoice}.`;
    }
  }
  
  function game() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let x = 0; x < 5; x++) {
      const playerChoice = prompt("Enter your choice: rock, paper, or scissors");
      const computerChoice = choices[Math.floor(Math.random() * choices.length)];
      const result = playround(playerChoice, computerChoice);
      document.getElementById('results').innerHTML = result;
  
      if (result.includes('win')) {
        playerScore++;
      } else if (result.includes('lose')) {
        computerScore++;
      }
    }
  
    if (playerScore > computerScore) {
      document.getElementById('results').innerHTML = "You have won!";
    } else if (playerScore < computerScore) {
      document.getElementById('results').innerHTML = "Computer won!";
    } else {
      document.getElementById('results').innerHTML = "It's a tie!";
    }
  }
  
  // Call the game function to start the game
  game();
  