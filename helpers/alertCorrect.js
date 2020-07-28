const alertCorrect = (diff, goal, sqrs) => {
    switch (diff) {
        case 'Hard':
            result.textContent = "Correct!";
            question.style.display = 'none';
            setBackground(goal, sqrs);
            header.style.backgroundColor = goal;
            difficultyContainer.style.borderColor = goal;
            difficultyContainer.style.borderWidth = '3px';
            easyLevel.style.borderColor = goal;
            easyLevel.style.color = goal;
            hardLevel.style.borderColor = goal;
            hardLevel.style.backgroundColor = goal;
            newColOrPlayAgain.style.borderColor = goal;
            newColOrPlayAgain.style.color = goal;
            newColOrPlayAgain.style.borderWidth = "3px";
            newColOrPlayAgain.textContent = "Play Again?"
            easyLevel.removeEventListener("click", easyGame);
            hardLevel.removeEventListener("click", hardGame);
            break;
        case 'Easy':
            result.textContent = "Correct!";
            question.style.display = 'none';
            setBackground(goal, sqrs);
            easyLevel.style.backgroundColor = goal;
            easyLevel.style.color = "#2f2f2f";
            hardLevel.style.backgroundColor = "transparent";
            hardLevel.style.color = goal;
            newColOrPlayAgain.style.borderColor = goal;
            newColOrPlayAgain.style.color = goal;
            newColOrPlayAgain.style.borderWidth = "3px";
            newColOrPlayAgain.textContent = "Play Again?"
            easyLevel.removeEventListener("click", easyGame);
            hardLevel.removeEventListener("click", hardGame);
            break;

        default: return new Error("Missing Parameter")
    }
}