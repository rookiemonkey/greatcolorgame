const alertCorrect = (diff, goal, sqrs) => {
    const body = document.body;

    // add the alert animation and restBtn click listener
    body.addEventListener('click', handleAlertClick, true)

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
            difficultyContainer.removeEventListener('click', setGame, false)
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
            difficultyContainer.removeEventListener('click', setGame, false)
            break;

        default: return new Error("Missing Parameter")
    }
}