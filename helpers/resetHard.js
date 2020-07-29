function resetHard() {
    difficultyContainer.style.borderColor = 'whitesmoke';
    difficultyContainer.style.borderWidth = '0px';
    newColOrPlayAgain.style.borderColor = 'whitesmoke';
    newColOrPlayAgain.style.color = 'whitesmoke';
    newColOrPlayAgain.style.borderWidth = "1px";
    newColOrPlayAgain.textContent = "New Color Set"
    header.style.backgroundColor = '#2f2f2f';
    result.textContent = '';
    hardGame();
}