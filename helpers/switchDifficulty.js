const switchDifficulty = difficulty => {
    switch (difficulty) {
        case 'Hard':
            hardLevel.classList.add("chosenDifficulty");
            easyLevel.classList.remove("chosenDifficulty");
            break;
        case 'Easy':
            hardLevel.classList.remove("chosenDifficulty");
            easyLevel.classList.add("chosenDifficulty");
            break;
        default: return new Error("Missing Parameter");
    }
}
