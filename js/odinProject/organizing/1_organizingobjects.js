// simple rock paper scissors game using javascript

const GameEngine = {
    player: 0,
    computer: 0,
    playRound(choice) {
        _validChoices = ["rock", "paper", "scissor"]; // _ is for private variables
        if (!_validChoices.includes(choice.toLowerCase())) {
            console.log("Invalid selection");
        } else {
            computerChoice = _validChoices[Math.floor(Math.random() * _validChoices.length)];
            switch (computerChoice) { //there is no way this is good code
                case "rock":
                    if (choice == "rock") {
                        console.log("draw");
                        break;
                    } else if (choice == "paper") {
                        console.log("win! +1 score");
                        this.player++;
                        break;
                    } else {
                        console.log("lose! comp +1");
                        this.computer++;
                        break;
                    }
                    
                case "paper":
                    if (choice == "paper") {
                        console.log("draw");
                        break;
                    } else if (choice == "scissor") {
                        console.log("win! +1 score");
                        this.player++;
                        break;
                    } else {
                        console.log("lose! comp +1");
                        this.computer++;
                        break;
                    }
                    
                case "scissor":
                    if (choice == "scissor") {
                        console.log("draw");
                        break;
                    } else if (choice == "rock") {
                        console.log("win! +1 score");
                        this.player++;
                        break;
                    } else {
                        console.log("lose! comp +1");
                        this.computer++;
                        break;
                    }
            }
        }
    },

    endGame() {
        if (this.player > this.computer) {
            console.log("Player wins! (" + this.player + ")");
        } else if (this.computer > this.player) {
            console.log("Computer wins! (" + this.computer + ")");
        } else {
            console.log("Score draws.");
        }
    },

    resetScore() {
        this.player = 0;
        this.computer = 0;
        console.log("Score reset!")
    }
}

const game = GameEngine
game.playRound("rock")
game.playRound("rock")
game.playRound("rock")
game.playRound("rock")
game.playRound("rock")
game.endGame()
console.log(game.player)
console.log(game.computer)