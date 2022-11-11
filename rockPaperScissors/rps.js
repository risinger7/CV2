const buttons = document.getElementById("buttons");
const rpsDivs = buttons.children;
const rpsList = [...rpsDivs];

const playerEle = document.getElementById("player");
const computerEle = document.getElementById("computer");
const result = document.getElementById("result");

let playerChoice;
let computer;

rpsList.forEach((e) => {
    e.addEventListener("click", clickedButton);
});

function clickedButton(e) {
    let computer = getCompChoice();

    //player choice
    const target = e.target;
    player = target.getAttribute("data");

    playerEle.textContent = player;
    computerEle.textContent = computer;

    let resultString = "";

    if (player == computer) {
        resultString = "Tied";
    } else if (
        (player == "rock" && computer == "scissors") ||
        (player == "scissors" && computer == "paper") ||
        (player == "paper" && computer == "rock")
    ) {
        resultString = "Winner";
    } else resultString = "Loser";

    result.textContent = resultString;
}

function getCompChoice() {
    let string;
    let number = Math.floor(Math.random() * 3);
    if (number === 0) {
        string = "rock";
    } else if (number === 1) {
        string = "paper";
    } else {
        string = "scissors";
    }
    return string;
}
