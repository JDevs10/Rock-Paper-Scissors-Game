let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const result_p = document.querySelector(".result p");
const rock_section = document.getElementById("rock");
const paper_section = document.getElementById("paper");
const scissors_section = document.getElementById("scissors");

function getComputerChoice() {
    const choices = ['rock','paper','scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(userChoice,computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallComputerWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);

    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = userChoice+smallUserWord+" beats "+computerChoice+smallComputerWord+". You win!!!";

    userChoice_div.classList.add('green-shine');
    setTimeout(function (){userChoice_div.classList.remove('green-shine')}, 500);

    document.getElementById('user-label').classList.add('green-shine');
    setTimeout(function (){document.getElementById('user-label').classList.remove('green-shine')}, 500);

    document.getElementById('computer-label').classList.add('red-shine');
    setTimeout(function (){document.getElementById('computer-label').classList.remove('red-shine')}, 500);
}

function lose(userChoice,computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallComputerWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);

    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = userChoice+smallUserWord+" loses to "+computerChoice+smallComputerWord+". You lost!!!";

    userChoice_div.classList.add('red-shine');
    setTimeout(function (){userChoice_div.classList.remove('red-shine')}, 500);

    document.getElementById('computer-label').classList.add('green-shine');
    setTimeout(function (){document.getElementById('computer-label').classList.remove('green-shine')}, 500);

    document.getElementById('user-label').classList.add('red-shine');
    setTimeout(function (){document.getElementById('user-label').classList.remove('red-shine')}, 500);
}

function draw(userChoice,computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallComputerWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);

    result_p.innerHTML = userChoice+smallUserWord+" equals "+computerChoice+smallComputerWord+". It's a draw!!!";

    userChoice_div.classList.add('gray-shine');
    setTimeout(function (){userChoice_div.classList.remove('gray-shine')}, 500);

    document.getElementById('user-label').classList.add('gray-shine');
    setTimeout(function (){document.getElementById('user-label').classList.remove('gray-shine')}, 500);

    document.getElementById('computer-label').classList.add('gray-shine');
    setTimeout(function (){document.getElementById('computer-label').classList.remove('gray-shine')}, 500);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userChoice,computerChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(userChoice,computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(userChoice,computerChoice);
            break;
    }
}

function main() {
    rock_section.addEventListener("click", function () {
        game("rock");
    });

    paper_section.addEventListener("click", function () {
        game("paper");
    });

    scissors_section.addEventListener("click", function () {
        game("scissors");
    });
}


main();