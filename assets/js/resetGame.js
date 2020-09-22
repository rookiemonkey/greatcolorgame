const resetGame = () => {
    const body = document.body;

    // removed the onlick listener on the body
    body.removeEventListener('click', handleAlertClick, true);

    if (difficulty.textContent === 'Hard') {
        resetHard();
    }
    else {
        resetEasy();
    }
}