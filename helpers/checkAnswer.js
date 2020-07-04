const checkAnswer = (obj, goal, sqr, diff) => {
    if (obj.style.backgroundColor !== goal) { alertWrong(obj) }
    else { alertCorrect(diff, goal, sqr); }
}