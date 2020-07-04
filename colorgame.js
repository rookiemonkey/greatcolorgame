// KNOW BUGS
// initial, switched to easy, then hard bug on the swtich difficulty colors

const music = new Howl({
    src: ['./background.mp3'],
    autoplay: true,
    loop: true,
    volume: 0.5,
});

music.play();

let colors = generateColor();
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
hardLevel.addEventListener("click", wholeGameHard);

// displays the color to guess
colorDisplay.textContent = goalColor;

// reset button only refreshes the page
newColOrPlayAgain.addEventListener("click", function(){
    location.reload();
});

// LOGIC: picks a random color for hard/deafult
function generateColor() {
    let colors = [];
    for (let i = 1; i<=6; i++) {
        let randomR= Math.floor(Math.random() * 200 + 55);
        let randomG= Math.floor(Math.random() * 200 + 55);
        let randomB= Math.floor(Math.random() * 200 + 55);
        let randomColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
        colors.push(randomColor);
    }
    return colors;
 };

 // LOGIC: picks a random color for easy
 function generateColorEasy() {
    let colors = [];
    for (let i = 1; i<=3; i++) {
        let randomR= Math.floor(Math.random() * 200 + 55);
        let randomG= Math.floor(Math.random() * 200 + 55);
        let randomB= Math.floor(Math.random() * 200 + 55);
        let randomColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
        colors.push(randomColor);
    }
    return colors;
 };


// LOGIC: changes bg when correct
const changeBg = (color, arr) => {
    for (let i=0; i<=arr.length-1; i++) {
        squares[i].style.backgroundColor = color;
    }
};





function wholeGameHard() {
    colors = generateColor();
    goalColor = colors[Math.floor(Math.random() * 5 + 1)]
    colorDisplay.textContent = goalColor;
    hardLevel.classList.add("chosenDifficulty");
    easyLevel.classList.remove("chosenDifficulty");
    let specialSquare = document.getElementsByClassName("specialSquare");
    for (let i =0; i<=specialSquare.length-1;i++) {
        specialSquare[i].style.display = "block";
    };
    for (let i=0; i<=squares.length-1; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener('click', function(){
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
                newColOrPlayAgain.style.borderWidth ="3px";
                newColOrPlayAgain.textContent = "Play Again?"
                easyLevel.removeEventListener("click", easyGame);
                hardLevel.removeEventListener("click", wholeGameHard);
            }
        })
    }
};

wholeGameHard(); // calls the whole game loop

function easyGame() {
    colors = generateColorEasy();
    goalColor = colors[Math.floor(Math.random() * 4) - 1];
        if(goalColor === undefined){
            // sometimes random index returns an undefined value this fixes it instead..
            console.error("unfortunately, goal color became undefined. calling easyGame() again...");
            easyGame();
        }
    hardLevel.addEventListener("click", wholeGameHard);
    colorDisplay.textContent = goalColor;
    hardLevel.classList.remove("chosenDifficulty");
    easyLevel.classList.add("chosenDifficulty");

    // hides the 3 bottom squaers
    let specialSquare = document.getElementsByClassName("specialSquare");
    for (let i =0; i<=specialSquare.length-1;i++) {
        specialSquare[i].style.display = "none";
    };

    // assigns random colors for the 3 upper squears
    let easySquares = document.getElementsByClassName("easySquare");
    for (let i=0; i<=easySquares.length-1; i++) {
        easySquares[i].style.backgroundColor = colors[i];
        easySquares[i].addEventListener('click', function(){
            let bgColor = this.style.backgroundColor;
            if (bgColor !== goalColor) {
                result.textContent = "Please try again"
                this.style.backgroundColor = "#2f2f2f";
            }  else {
                easyLevel.style.backgroundColor = goalColor;
                easyLevel.style.color = "#2f2f2f";
                hardLevel.style.backgroundColor = "transparent"
                hardLevel.style.color = goalColor;
                easyLevel.removeEventListener("click", easyGame);
                hardLevel.removeEventListener("click", wholeGameHard);
            }
        });
    }
}
