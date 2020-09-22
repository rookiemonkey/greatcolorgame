const resetGame = () => {
    if (difficulty.textContent === 'Hard') {
        resetHard();
    }
    else {
        resetEasy();
    }
}