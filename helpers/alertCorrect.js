const alertCorrect = (diff, goal, sqrs) => {
    switch (diff) {
        case 'Hard':
            result.textContent = "Correct!";
            question.style.display = 'none';
            setBackground(goal, sqrs);
            header.style.backgroundColor = goal;
            difficultyContainer.style.borderColor = goal;
            difficultyContainer.style.borderWidth = '3px';
            newColOrPlayAgain.style.borderColor = goal;
            newColOrPlayAgain.style.color = goal;
            newColOrPlayAgain.style.borderWidth = "3px";
            newColOrPlayAgain.textContent = "Play Again?"
            break;
        case 'Easy':
            result.textContent = "Correct!";
            question.style.display = 'none';
            setBackground(goal, sqrs);
            newColOrPlayAgain.style.borderColor = goal;
            newColOrPlayAgain.style.color = goal;
            newColOrPlayAgain.style.borderWidth = "3px";
            newColOrPlayAgain.textContent = "Play Again?"
            break;

        default: return new Error("Missing Parameter")
    }
}