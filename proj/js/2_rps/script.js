function getComputerChoice() {
    _validChoices = ["rock", "paper", "scissors"]; // _ is for private variables
    return _validChoices[Math.floor(Math.random() * _validChoices.length)];
}

function getHumanChoice() {
    return prompt("Choose: Rock, Paper, Scissors")
}

function playRound(computerChoice) {
    humanChoice = getHumanChoice().toLowerCase()
    computerChoice = computerChoice.toLowerCase()

    switch (computerChoice) { //there is no way this is good code
                case "rock":
                    if (humanChoice == "rock") {
                        return "draw"
                    } else if (humanChoice == "paper") {
                        return "human"
                    } else {
                        return "comp"
                    }
                    
                case "paper":
                    if (humanChoice == "paper") {
                        return "draw"
                    } else if (humanChoice == "scissors") {
                        return "human"
                    } else {
                        return "comp"
                    }
                    
                case "scissors":
                    if (humanChoice == "scissors") {
                        return "draw"
                    } else if (humanChoice == "rock") {
                        return "human"
                    } else {
                        return "comp"
                    }
            }
}

function playGame(rounds) {
    let computerScore = 0;
    let humanScore = 0;

    for (let i = 0; i < rounds; i++) {
        let o = playRound(getComputerChoice());
        if (o == "draw") {
            alert("Draw! No points gained for both sides!")
        } else if (o == "human") {
            alert("You won! +1 Score")
            humanScore++;
        } else if (o == "comp") {
            alert("Computer wins!")
            computerScore++;
        }
    }

    alert("Your Score: " + humanScore + " Computer Score: " + computerScore)
}

playGame(5)