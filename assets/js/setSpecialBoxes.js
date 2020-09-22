const setSpecialBoxes = toShow => {
    let specialSquare = document.getElementsByClassName("specialSquare");
    for (let i = 0; i <= specialSquare.length - 1; i++) {
        specialSquare[i].style.display = toShow;
    };
}