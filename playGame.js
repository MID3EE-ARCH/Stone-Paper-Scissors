const { gameOver, computerScore, humanScore, checkWinner, updateScoreBoard, rock, getComputerChoice, paper, scissor, reset, resetGame } = require("./script");

//------------------------Play Game Function----------------
export function playGame() {
    function playRound(humanChoice, computerChoice) {
        if (gameOver) {
            return;
        }
        if ((humanChoice === "rock" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "scissor") ||
            (humanChoice === "scissor" && computerChoice === "rock")) {
            returnMessage = `You chose ${humanChoice}, Computer chose ${computerChoice}. Computer wins this round!`;
            computerScore += 1;
        } else if (humanChoice === computerChoice) {
            returnMessage = `Both chose ${humanChoice}. It's a draw!`;
        } else {
            returnMessage = `You chose ${humanChoice}, Computer chose ${computerChoice}. Computer wins this round!`;
            humanScore += 1;
        }
        checkWinner();
    }
    updateScoreBoard();
    //---------------EventListener------------------
    rock.addEventListener("click", () => {
        let humanChoice = "rock";
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        updateScoreBoard();
    });
    paper.addEventListener("click", () => {
        let humanChoice = "paper";
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        updateScoreBoard();
    });
    scissor.addEventListener("click", () => {
        let humanChoice = "scissor";
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        updateScoreBoard();
    });
    reset.addEventListener("click", () => {
        resetGame();
    });
}

