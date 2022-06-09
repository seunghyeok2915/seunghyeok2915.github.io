let target = document.querySelector("#dynamic");
let toggleBtn = document.querySelector('.navbar_toggleBtn');
let menu = document.querySelector('.navbar_menu');
let icons = document.querySelector('.navbar_icons');

function randomString() {
    let stringArr = ["Learn to HTML", "Learn to JavaScript", "Learn to Python"]
    let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
    let selectStringArr = selectString.split("");

    return selectStringArr;
}

//타이핑 리셋
function resetTyping() {
    target.textContent = "";
    dynamic(randomString());
}

//한글자씩 텍스트 출력 함수
function dynamic(randomArr) {
    if (randomArr.length > 0) {
        target.textContent += randomArr.shift();
        setTimeout(() => {
            dynamic(randomArr);
        }, 80)
    }
    else {
        setTimeout(() => {
            resetTyping();
        }, 3000);
    }
}

dynamic(randomString());

//커서 깜빡거림 효과
function blink() {
    target.classList.toggle("active");
}

setInterval(blink, 500);

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});