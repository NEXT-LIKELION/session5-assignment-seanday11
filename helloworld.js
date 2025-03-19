alert("Hello, world");

let age = prompt("나이를 입력해주세요.", 20);

let isAge = confirm("당신은20세인가요?");

const matrix = [
    ["넥", "스", "트"],
    ["자", "바", "스"],
    ["크", "립", "트"],
];

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
}

const userInput = prompt("사용 등급을 입력하세요.(단 대문자로만 입력하시오.)");

if (userInput == "A") {
    console.log("관람 가능 영화는 A,B,C 입니다.");
} else if (userInput == "B") {
    console.log("관람 가능 영화는 B,C 입니다.");
} else {
    console.log("관람 가능 영화는 C 입니다.");
}
