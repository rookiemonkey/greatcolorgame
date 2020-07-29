const switchDifficulty = difficulty => {
    switch (difficulty) {
        case 'Hard':
            question.style.display = 'block';
            // hardLevel.classList.add("chosenDifficulty");
            // easyLevel.classList.remove("chosenDifficulty");
            break;
        case 'Easy':
            question.style.display = 'block';
            // hardLevel.classList.remove("chosenDifficulty");
            // easyLevel.classList.add("chosenDifficulty");
            break;
        default: return new Error("Missing Parameter");
    }
}
