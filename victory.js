const choices = ["가위", "바위", "보"];

const userChoice = prompt("가위, 바위, 보 중 하나를 입력하세요:");

let isValidChoice = false;
for (let i = 0; i < choices.length; i++) {
    if (userChoice === choices[i]) {
        isValidChoice = true;
        break;
    }
}

if (!isValidChoice) {
    console.log("올바른 값을 입력하세요: 가위, 바위, 보");
} else {
    const randomIndex = Math.random() * choices.length;
    const computerChoice = choices[parseInt(randomIndex)];

    console.log(`사용자 선택: ${userChoice}`);
    console.log(`컴퓨터 선택: ${computerChoice}`);

    let result = "";

    if (userChoice === computerChoice) {
        result = "무승부!";
    } else if (
        (userChoice === "가위" && computerChoice === "보") ||
        (userChoice === "바위" && computerChoice === "가위") ||
        (userChoice === "보" && computerChoice === "바위")
    ) {
        result = "사용자 승리!";
    } else {
        result = "컴퓨터 승리!";
    }

    console.log(result);
}
