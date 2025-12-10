function upsidedownpyamide(n) {
    let pattern = "";
    for (let i = n; i >= 1; i--) {
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

upsidedownpyamide(5);