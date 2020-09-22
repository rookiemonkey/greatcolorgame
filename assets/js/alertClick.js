function handleAlertClick() {
    const resetBtn = document.getElementById('newColOrPlayAgain');

    resetBtn.classList.add('alert');

    // // add a timeout to remove the class name 
    // // in a few seconds after the animation
    setTimeout(() => {
        resetBtn.classList.remove('alert');
    }, 1000)
}