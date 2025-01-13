
// Initializing variables
const computerScore = 0;
const humanScore = 0; 
playRound = 1; 

// To obtain the Computer's random choice 
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    
    // Generate a random index between 0 and 2
    const randomIndex = Math.floor(Math.random() * choices.length);
    
    // Return the random choice
    return choices[randomIndex];
}

console.log(getComputerChoice());


// To obtain Human or the user's choice
function getHumanChoice() {
    // Prompt the user for input
    let userInput = prompt("Enter rock, paper, or scissors:").trim();

    // Convert the input to lowercase
    userInput = userInput.toLowerCase();

    // Validate the input
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
        return userInput;
    } else {
        return "Invalid choice. Please enter rock, paper, or scissors.";
    }
}

// Example usage
console.log(getHumanChoice()); // Prompts the user and logs their valid choice or an error message
