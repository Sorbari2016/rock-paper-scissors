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
