//-----------Variables----------
let humanScore = 0;
let computerScore = 0;
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");

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
function scoreBoard(){}










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
    } else {
      humanScore += 1;
    }
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
}

//------------------Calling playGame function----------------
playGame();
