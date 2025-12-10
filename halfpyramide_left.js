function halfpyramid_left(n) {
    let pattern = "";
    for (let i = 1; i <= n; i++) {
        for (let s = 1; s <= n - i; s++) {
            pattern += " ";
        }
        for (let j = 1; j <= i; j++) {
            pattern += "*";
        }
        pattern += "\n";
    }
    console.log(pattern);
}

halfpyramid_left(5);
