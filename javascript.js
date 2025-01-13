
// Initializing variables
const computerScore = 0;
const humanScore = 0; 
playRound = 1; 

// Logic to get computer choice 
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    
    // Generate a random index between 0 and 2
    const randomIndex = Math.floor(Math.random() * choices.length);
    
    // Return the random choice
    return choices[randomIndex];
}

console.log(getComputerChoice());