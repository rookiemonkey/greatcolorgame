function resetEasy() {
    question.style.display = 'block';
    difficulty.textContent = 'Easy'
    difficultyContainer.style.borderColor = 'whitesmoke';
    difficultyContainer.style.borderWidth = '1px';
    difficulty.style.color = 'whitesmoke';
    newColOrPlayAgain.style.borderColor = 'whitesmoke';
    newColOrPlayAgain.style.color = 'whitesmoke';
    newColOrPlayAgain.style.borderWidth = "1px";
    newColOrPlayAgain.textContent = "New Color Set"
    header.style.backgroundColor = '#2f2f2f';
    result.textContent = '';
    difficultyContainer.addEventListener('click', setGame)
    easyGame();
}