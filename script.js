let clickCount = 0; // 클릭 카운터 초기화

document.getElementById('rantButton').addEventListener('click', function() {
    const messages = [
        "정말 화가 나네요!",
        "오늘은 그냥 모든 게 다 짜증나!",
        "왜 이렇게 됐을까요?",
        "정말 미치겠어!",
        "이런 상황을 어떻게 해야 할까요?"
    ];
    const emojis = ["😠", "😡", "🤬", "😤", "😒"]; // 이모티콘 배열
    const randomIndex = Math.floor(Math.random() * messages.length);
    const message = messages[randomIndex];
    const emoji = emojis[randomIndex]; // 랜덤 이모티콘 선택

    document.getElementById('message').textContent = message;
    document.getElementById('message').classList.remove('hidden');
    document.getElementById('emoji').textContent = emoji; // 이모티콘 업데이트

    clickCount++; // 클릭 카운터 증가
    document.getElementById('counter').textContent = clickCount; // 클릭 카운터 표시 업데이트
});
