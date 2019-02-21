// game variables
let userPoints = 0;
let compPoints = 0;

// DOM variables
var userScore = document.querySelector('.user-score');
var compScore = document.querySelector('.comp-score');
var stat = document.querySelector('.status');
var rock = document.querySelector('.rock');
var paper = document.querySelector('.paper');
var scissors = document.querySelector('.scissors');
var reset = document.querySelector('.reset');

// events
rock.addEventListener('click', () => {
	playRound('rock', computerPlay())
});
paper.addEventListener('click', () => {
	playRound('paper', computerPlay())
});
scissors.addEventListener('click', () => {
	playRound('scissors', computerPlay())
});
reset.addEventListener('click', () => {
  userPoints = 0;
  compPoints = 0;
  userScore.textContent = 0;
  compScore.textContent = 0;
  stat.textContent = 'Waiting for input...'
})

// game logic
function computerPlay() {
    var computerOptions = ['rock','paper','scissors'];
    return computerOptions[Math.floor(Math.random()*computerOptions.length)];
}
function playRound(playerSelection, computerSelection){
  
  if (userPoints < 5 && compPoints <5){
    // draw
    if(playerSelection == computerSelection){
      stat.textContent = "It's a draw!";
    }
    // rock
    if(playerSelection == 'rock'){
      if(computerSelection == 'paper'){
        compPoints++;
        compScore.textContent = compPoints;
        stat.textContent = 'You lose! Paper beats rock.'
      }
      if(computerSelection == 'scissors'){
        userPoints++;
        userScore.textContent = userPoints;
        stat.textContent = 'You win! Rock beats scissors.'
      }
    }
    // paper
    if(playerSelection == 'paper'){
      if(computerSelection == 'scissors'){
        compPoints++;
        compScore.textContent = compPoints;
        stat.textContent = 'You lose! Scissors beats paper.'
      }
      if(computerSelection == 'rock'){
        userPoints++;
        userScore.textContent = userPoints;
        stat.textContent = 'You win! Paper beats rock.'
      }
    }
    // scissors
    if(playerSelection == 'scissors'){
      if(computerSelection == 'rock'){
        compPoints++;
        compScore.textContent = compPoints;
        stat.textContent = 'You lose! Rock beats scissors.'
      }
      if(computerSelection == 'paper'){
        userPoints++;
        userScore.textContent = userPoints;
        stat.textContent = 'You win! Scissors beats paper.'
      }
    }
  }

  // win
  if(userPoints == 5){
    stat.textContent = "You've won the game!"
  }
  if(compPoints == 5){
    stat.textContent = "You've lost the game!"
  }
}