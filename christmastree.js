let height = 5;

for (let i = 1; i <= height; i++) {
    let line = "";

    // 왼쪽 공백 추가
    for (let j = 0; j < height - i; j++) {
        line += " ";
    }

    // 별 추가
    for (let j = 0; j < 2 * i - 1; j++) {
        line += "*";
    }

    console.log(line);
}
