# Rock Paper Scissors
## Objectives
- I was asked to create the rock paper scissor game as my first Javascript project.
- The game is meant to be played entirely in the console.

## About Rock Paper Scissor
### Overview  											
- Incase you don't already know by now, Rock-paper-scissors is a simple hand game usually played between two people. It is commonly used as a decision-making tool, similar to flipping a coin or drawing straws. Here's how it works:

### Basic Rules 
- Each player simultaneously forms one of three shapes with their hand:
- Rock: A fist
- Paper: An open hand
- Scissors: A fist with the index and middle fingers extended, forming a "V."											

### Outcome											
- The outcome is determined based on the following rules:
- Rock beats Scissors (Rock crushes Scissors).
- Scissors beats Paper (Scissors cut Paper).
- Paper beats Rock (Paper covers Rock).											

## Tools
- HTML
- CSS
- Javascript

## Algorithm
1. The score of the user and computer is initialized to 0; round to 1.
2. Prompt the human to pick an option (getHumanChoice) from rock, paper, scissor (case-insensitive)
3. Generate a random option from the computer (getComputerChoice) from just the 3 options rock, paper, and scissor.
4. Compare the scores:	If humanChoice beats computerChoice, increment humanScore by 1 and display "You won this round". Else if computerChoice beats humanChoice, increment computerScore by 1 and display "Computer won this round"
5. Increment round by 1 after each round until the 5th round.
6. After the 5th round compare humanScore and computerScore: if humanScore > computerScore display "You won the game". Else if computerScore > humanScore display "Computer won the game"

## Pseudocode 
