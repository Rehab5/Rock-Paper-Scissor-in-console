const options = ['rock', 'paper', 'scissor'];
const winners = [];
const buttonEl = document.getElementById("btn");

// play the game
buttonEl.onclick = function game() {
    // play 5 rounds
    for (var i = 0; i <= 5; i++) {
        playRound(i);
    }
    buttonEl.textContent = "Play New Game";
    logWinners();
};


function playRound(r) {
    const playerSelection = playerOption();
    const computerSelection = computerOption();
    const winner = checkWinner(playerSelection, computerSelection);

    winners.push(winner);
    logRounds(playerSelection, computerSelection, winner, r);
};


// player options
function playerOption() {
    const option = prompt("Choose Rock, Paper, Scissors");
    while (option == null) {
        option = prompt("Choose Rock, Paper, or Scissors");
    }
    option.toLowerCase();

    let check = validateOption(option);
    while (check == false) {
        option = prompt("Choose Rock, Paper, or Scissors");
        while (option == null) {
            option = prompt("Choose Rock, Paper, or Scissors");
        }
        option.toLowerCase();
        check = validateOption(option);
    }
    return option;
}


// computer random options
function computerOption() {
    return options[Math.floor(Math.random() * options.length)];
}

function validateOption(option) {
    return options.includes(option);
};

function checkWinner(optionB, optionC) {
    if (optionB === optionC) {
        return "tie";
    } else if (
        (optionB === "rock" && optionC == "scissors") ||
        (optionB === "paper" && optionC == "rock") ||
        (optionB === "scissors" && optionC == "paper")
    ) {
        return "Player";
    } else {
        return "Computer";
    }
};

function logRounds(playerOption, computerOption, winner, r) {
    console.log("Round:", r);
    console.log("Player Option:", playerOption);
    console.log("Computer Option:", computerOption);
    console.log(winner, "Won the Round");
}

// results
function logWinners() {
    let playerWins = winners.filter((item) => item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    let ties = winners.filter((item) => item == "Tie").length;
    console.log("Results:");
    console.log("Player Wins:", playerWins);
    console.log("Computer Wins:", computerWins);
    console.log("Ties:", ties);
}