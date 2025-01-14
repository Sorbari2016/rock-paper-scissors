// Function to get computer choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}


// Function to get human choice
function getHumanChoice() {
    let userInput = prompt("Enter rock, paper, or scissors:").trim().toLowerCase();
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
        return userInput;
    } else {
        return null; // Return null for invalid input
    }
}


// Function to play a single round
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return null; // Return null for a tie
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        return 1; // You win
    } else {
        return -1; // Computer wins
    }
}




// Function to play 5 rounds and declare the winner
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        console.log(`Round ${round}`);
        const humanChoice = getHumanChoice();

        if (!humanChoice) {
            console.log("Invalid choice. Please refresh and enter rock, paper, or scissors.");
            round--; // Allow a retry for invalid input
            continue;
        }

        const computerChoice = getComputerChoice();
        console.log(`Computer's choice: ${computerChoice}`); // Display computer's choice
        
        const result = playRound(humanChoice, computerChoice);

        if (result === null) {
            console.log("It's a tie! No points awarded.");
        } else if (result === 1) {
            console.log(`You win this round ${round}!`);
            humanScore++;
        } else if (result === -1) {
            console.log(`Computer wins this round ${round}!`);
            computerScore++;
        }

        console.log(`Scores after round ${round}: You: ${humanScore}, Computer: ${computerScore}`);
    }

    // Declare the overall winner
    console.log("Game Over!");
    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (computerScore > humanScore) {
        console.log("Computer wins the game! Better luck next time!");
    } else {
        console.log("It's a tie overall!");
    }
}

// Start the game
playGame();
