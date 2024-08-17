//-----------Variables----------
let gameOver = false;
let humanScore = 0;
let computerScore = 0;
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");
let reset = document.querySelector("#reset");
let resetButton = document.querySelector("#resetButton");
let scoreBoard = document.querySelector(".scoreBoard");
let resultDiv = document.createElement("div");
resultDiv.classList.add("result");
document.querySelector("main").appendChild(resultDiv);

//---------------Computer Choice Function----------------
function getComputerChoice() {
  const computer = Math.floor(Math.random() * 3);
  if (computer === 0) {
    return "rock";
  } else if (computer === 1) {
    return "paper";
  } else {
    return "scissor";
  }
}

//-----------------------checkWinner-----------------------
function checkWinner() {
  if (humanScore === 5) {
    gameOver = true;
    scoreBoard.textContent = "Congratulations! You Won!";
    scoreBoard.classList.add("game-over");
    resetButton.textContent = "Play Again";
    resultDiv.textContent = "GameOver !!";
  } else if (computerScore === 5) {
    gameOver = true;
    scoreBoard.textContent = "Sorry, You Lost!";
    scoreBoard.classList.add("game-over");
    resetButton.textContent = "Play Again";
    resultDiv.textContent = "GameOver !!";
  }
}

//----------------ScoreBoard Function----------------
function updateScoreBoard() {
  scoreBoard.textContent = `${humanScore}:${computerScore}`;
}

//-----------------Reset Function-----------------
function resetGame() {
  humanScore = 0;
  computerScore = 0;
  gameOver = false;
  updateScoreBoard();
  resultDiv.textContent = ""; // Clear result message
}

//------------------------Play Game Function----------------
function playGame() {
  function playRound(humanChoice, computerChoice) {
    if (gameOver) {
      return;
    }

    if (
      (humanChoice === "rock" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "scissor") ||
      (humanChoice === "scissor" && computerChoice === "rock")
    ) {
      resultDiv.textContent = `You chose ${humanChoice}. Computer chose ${computerChoice}. Computer wins this round!`;
      computerScore += 1;
    } else if (humanChoice === computerChoice) {
      resultDiv.textContent = `Both chose ${humanChoice}. It's a draw!`;
    } else {
      resultDiv.textContent = `You chose ${humanChoice}. Computer chose ${computerChoice}. You win this round!`;
      humanScore += 1;
    }
    updateScoreBoard();
    checkWinner();
  }

  //---------------EventListener------------------
  rock.addEventListener("click", () => {
    let humanChoice = "rock";
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  });
  paper.addEventListener("click", () => {
    let humanChoice = "paper";
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  });
  scissor.addEventListener("click", () => {
    let humanChoice = "scissor";
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  });
  reset.addEventListener("click", () => {
    resetGame();
  });
  updateScoreBoard();
}

//------------------Calling playGame function----------------
playGame();
