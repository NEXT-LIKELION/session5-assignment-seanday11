const userInput = prompt("사용 등급을 입력하세요.(단 대문자로만 입력하시오.)");

if (userInput == "A") {
    console.log("관람 가능 영화는 A,B,C 입니다.");
} else if (userInput == "B") {
    console.log("관람 가능 영화는 B,C 입니다.");
} else {
    console.log("관람 가능 영화는 C 입니다.");
}
