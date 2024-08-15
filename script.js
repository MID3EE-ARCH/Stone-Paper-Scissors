let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const computer = Math.floor(Math.random() * 3);
  if (computer === 0) {
    return "rock";
  } else if (computer === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let humanChoice = prompt("Choose rock, paper or scissors").toLowerCase();
  if (
    humanChoice !== "rock" &&
    humanChoice !== "paper" &&
    humanChoice !== "scissors"
  ) {
    humanChoice = "Invalid Input";
    alert("Invalid Input. Exiting the Program.");
  }
  return humanChoice;
}

function playGame() {
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === "Invalid Input") {
      console.log("Invalid Input");
      return;
    }
    if (humanChoice === "rock" && computerChoice === "paper") {
      console.log("Paper Wins Against Rock ");
      console.log("You Lost!!");
      computerScore += 1;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      console.log("Scissors Wins Against Paper");
      console.log("You Lost!!");
      computerScore += 1;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      console.log("Rock Wins Against Scissors");
      console.log("You Lost!!");
      computerScore += 1;
    } else if (humanChoice === computerChoice) {
      console.log("It's a Draw");
      console.log(`You both chose ${humanChoice}`);
    } else {
      console.log(`${humanChoice} Wins Against ${computerChoice}`);
      console.log("You Won!!");
      humanScore += 1;
    }
  }
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  if (humanSelection !== "Invalid Input") {
    playRound(humanSelection, computerSelection);
  }
  if (humanScore > computerScore) {
    console.log("Hurray !!You Won The Game");
  } else if (humanScore < computerScore) {
    console.log("Bash!! You Lost The Game");
  }
  console.log(`Your Score ${humanScore}`);
  console.log(`Computer Score ${computerScore}`);
}
playGame();
