const setColor = num => {
    let colors = [];
    for (let i = 1; i <= num; i++) {
        let randomR = Math.floor(Math.random() * 200 + 55);
        let randomG = Math.floor(Math.random() * 200 + 55);
        let randomB = Math.floor(Math.random() * 200 + 55);
        let randomColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
        colors.push(randomColor);
    }
    return colors;
};