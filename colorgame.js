new Howl({
    src: ['./background.mp3'],
    autoplay: true,
    loop: true,
    volume: 0.5,
}).play();

let colors = setColor(6);
let header = document.getElementById("header");
let question = document.querySelector('h2');
let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let newColOrPlayAgain = document.getElementById("newColOrPlayAgain");
let difficulty = document.getElementById("difficulty");
let difficultyContainer = document.getElementById("difficultyContainer");
let result = document.getElementById("result");
let goalColor = colors[Math.floor(Math.random() * 5 + 1)];

colorDisplay.textContent = goalColor;
newColOrPlayAgain.addEventListener("click", resetGame)
difficultyContainer.addEventListener('click', setGame)
hardGame();

function hardGame() {
    setSpecialBoxes("Block");
    colors = setColor(6);
    goalColor = colors[Math.floor(Math.random() * 5 + 1)]
    checkGoalColor(goalColor, hardGame);
    colorDisplay.textContent = goalColor;

    for (let i = 0; i <= squares.length - 1; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener('click', function () {
            checkAnswer(this, goalColor, squares, 'Hard')
        });
    }
};

function easyGame() {
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
            checkAnswer(this, goalColor, easySquares, 'Easy')
        });
    }
}
