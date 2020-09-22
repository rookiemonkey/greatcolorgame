const setGame = () => {
    if (difficulty.textContent === 'Hard') {
        difficulty.textContent = 'Easy'
        easyGame();
    }
    else {
        difficulty.textContent = 'Hard'
        hardGame();
    }
}