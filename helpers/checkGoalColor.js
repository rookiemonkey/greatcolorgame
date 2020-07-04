const checkGoalColor = (g, f) => {
    // sometimes random index returns an undefined value this fixes it instead..
    if (g === undefined) { f(); }
}