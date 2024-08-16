//-----------Variables----------
let humanScore = 0;
let computerScore = 0;
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");
let reset = document.querySelector("#reset");

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

//----------------ScoreBoard Function----------------
function scoreBoard() {
  let scoreBoard = document.querySelector(".scoreBoard");
  scoreBoard.textContent = `${humanScore}:${computerScore}`;
}

//------------------------Play Game Function----------------
function playGame() {
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "paper") {
      computerScore += 1;
    } else if (humanChoice === "paper" && computerChoice === "scissor") {
      computerScore += 1;
    } else if (humanChoice === "scissor" && computerChoice === "rock") {
      computerScore += 1;
    } else if (humanChoice === computerChoice) {
      humanScore = humanScore;
      computerScore = computerScore;
    } else {
      humanScore += 1;
    }
  }
  scoreBoard();
  //---------------EventListener------------------
  rock.addEventListener("click", () => {
    let humanChoice = "rock";
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    scoreBoard();
  });
  paper.addEventListener("click", () => {
    let humanChoice = "paper";
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    scoreBoard();
  });
  scissor.addEventListener("click", () => {
    let humanChoice = "scissor";
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    scoreBoard();
  });
  reset.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    scoreBoard();
  });
}

//------------------Calling playGame function----------------
playGame();
