new Howl({
    src: ['./background.mp3'],
    autoplay: true,
    loop: true,
    volume: 0.5,
}).play();

let colors = setColor(6);
let header = document.getElementById("header");
let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let newColOrPlayAgain = document.getElementById("newColOrPlayAgain");
let difficultyContainer = document.getElementById("difficultyContainer");
let easyLevel = document.getElementById("easyLevel");
let hardLevel = document.getElementById("hardLevel");
let result = document.getElementById("result");
let goalColor = colors[Math.floor(Math.random() * 5 + 1)];

easyLevel.addEventListener("click", easyGame);
hardLevel.addEventListener("click", hardGame);

// displays the color to guess
colorDisplay.textContent = goalColor;

// reset button only refreshes the page
newColOrPlayAgain.addEventListener("click", function () {
    location.reload();
});

// LOGIC: changes bg when correct
const changeBg = (color, arr) => {
    for (let i = 0; i <= arr.length - 1; i++) {
        squares[i].style.backgroundColor = color;
    }
};

function hardGame() {
    switchDifficulty('Hard');
    setSpecialBoxes("Block");
    colors = setColor(6);
    goalColor = colors[Math.floor(Math.random() * 5 + 1)]
    checkGoalColor(goalColor, hardGame);
    colorDisplay.textContent = goalColor;

    for (let i = 0; i <= squares.length - 1; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener('click', function () {
            let bgColor = this.style.backgroundColor;
            if (bgColor !== goalColor) {
                result.textContent = "Please try again"
                this.style.backgroundColor = "#2f2f2f";
            } else {
                changeBg(goalColor, squares); // calls this function
                header.style.backgroundColor = goalColor;
                difficultyContainer.style.borderColor = goalColor;
                easyLevel.style.borderColor = goalColor;
                easyLevel.style.color = goalColor;
                hardLevel.style.borderColor = goalColor;
                hardLevel.style.backgroundColor = goalColor;
                result.textContent = "Correct!";
                newColOrPlayAgain.style.borderColor = goalColor;
                newColOrPlayAgain.style.color = goalColor;
                newColOrPlayAgain.style.borderWidth = "3px";
                newColOrPlayAgain.textContent = "Play Again?"
                easyLevel.removeEventListener("click", easyGame);
                hardLevel.removeEventListener("click", hardGame);
            }
        })
    }
};

hardGame(); // calls the whole game loop

function easyGame() {
    switchDifficulty('Easy');
    setSpecialBoxes("none");
    colors = setColor(3);
    goalColor = colors[Math.floor(Math.random() * 4) - 1];
    checkGoalColor(goalColor, easyGame);
    colorDisplay.textContent = goalColor;

    // assigns random colors for the 3 upper squears
    let easySquares = document.getElementsByClassName("easySquare");
    for (let i = 0; i <= easySquares.length - 1; i++) {
        easySquares[i].style.backgroundColor = colors[i];
        easySquares[i].addEventListener('click', function () {
            let bgColor = this.style.backgroundColor;
            if (bgColor !== goalColor) {
                result.textContent = "Please try again"
                this.style.backgroundColor = "#2f2f2f";
            } else {
                easyLevel.style.backgroundColor = goalColor;
                easyLevel.style.color = "#2f2f2f";
                hardLevel.style.backgroundColor = "transparent"
                hardLevel.style.color = goalColor;
                easyLevel.removeEventListener("click", easyGame);
                hardLevel.removeEventListener("click", hardGame);
            }
        });
    }
}
