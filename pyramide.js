function fullpyramid(rows) {
    let pattern = "";

    for (let i = 1; i <= rows; i++) {
        for (let s = 1; s <= rows - i; s++) {
            pattern += " ";
        }
        for (let j = 1; j <= 2 * i - 1; j++) {
            pattern += "*";
        }
        pattern += "\n";
    }

    console.log(pattern);
}

fullpyramid(5);
