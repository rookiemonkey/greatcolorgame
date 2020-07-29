const alertCorrect = (diff, goal, sqrs) => {
    switch (diff) {
        case 'Hard':
            result.textContent = "Correct!";
            question.style.display = 'none';
            setBackground(goal, sqrs);
            header.style.backgroundColor = goal;
            difficultyContainer.style.borderColor = goal;
            difficultyContainer.style.borderWidth = '3px';
            difficulty.style.color = goal;
            newColOrPlayAgain.style.borderColor = goal;
            newColOrPlayAgain.style.color = goal;
            newColOrPlayAgain.style.borderWidth = "3px";
            newColOrPlayAgain.textContent = "Play Again?"
            difficulty.removeEventListener('click', setGame, false)
            break;
        case 'Easy':
            result.textContent = "Correct!";
            question.style.display = 'none';
            setBackground(goal, sqrs);
            difficultyContainer.style.borderColor = goal;
            difficultyContainer.style.borderWidth = '3px';
            difficulty.style.color = goal;
            newColOrPlayAgain.style.borderColor = goal;
            newColOrPlayAgain.style.color = goal;
            newColOrPlayAgain.style.borderWidth = "3px";
            newColOrPlayAgain.textContent = "Play Again?"
            difficulty.removeEventListener('click', setGame, false)
            break;

        default: return new Error("Missing Parameter")
    }
}