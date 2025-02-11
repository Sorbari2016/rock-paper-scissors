// To get computer choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length); //generate a random number between 0 & 2
    return choices[randomIndex]; // return any of the choices based on a random index of 0, 1, or 2 generated
}

// Function to play a single round
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "tie"; // Return "tie" for a tie
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        return "win"; // You win
    } else {
        return "lose"; // Computer wins
    }
}

// Variables to keep track of scores
let humanScore = 0;
let computerScore = 0;

// Function to handle button clicks, & obtain the user's choice
function getHumanChoice(choice) {
    const computerChoice = getComputerChoice();
    const result = playRound(choice, computerChoice);

    let resultText = `You chose ${choice}, Computer chose ${computerChoice}. `;

    if (result === "tie") {
        resultText += "It's a tie!";
    } else if (result === "win") {
        resultText += "You win this round!";
        humanScore++;
    } else {
        resultText += "Computer wins this round!";
        computerScore++;
    }

    // Update result and score display
    document.getElementById("result").textContent = resultText;
    document.getElementById("score").textContent = `Score - You: ${humanScore}, Computer: ${computerScore}`;

    // Check for game over (first to 5 points wins)
    if (humanScore === 5 || computerScore === 5) {
        let finalMessage = humanScore > computerScore 
            ? "Congratulations! You won the game! 🎉" 
            : "Computer wins the game! Better luck next time! 🤖";
        
        document.getElementById("result").textContent = finalMessage;
        document.getElementById("score").textContent = "";

        // Disable buttons after game over
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;

        // Show restart button
        document.getElementById("restart").style.display = "block";
    }
}

// Function to restart the game
function restartGame() {
    humanScore = 0;
    computerScore = 0;

    document.getElementById("result").textContent = "Make your choice!";
    document.getElementById("score").textContent = "Score - You: 0, Computer: 0";

    // Re-enable buttons
    document.getElementById("rock").disabled = false;
    document.getElementById("paper").disabled = false;
    document.getElementById("scissors").disabled = false;

    // Hide the restart button
    document.getElementById("restart").style.display = "none";
}

// Add event listeners to buttons
document.getElementById("rock").addEventListener("click", () => getHumanChoice("rock"));
document.getElementById("paper").addEventListener("click", () => getHumanChoice("paper"));
document.getElementById("scissors").addEventListener("click", () => getHumanChoice("scissors"));
document.getElementById("restart").addEventListener("click", restartGame);