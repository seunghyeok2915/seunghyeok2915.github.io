document.getElementById('rantButton').addEventListener('click', function() {
    const messages = [
        "정말 화가 나네요!",
        "오늘은 그냥 모든 게 다 짜증나!",
        "왜 이렇게 됐을까요?",
        "정말 미치겠어!",
        "이런 상황을 어떻게 해야 할까요?"
    ];
    const randomIndex = Math.floor(Math.random() * messages.length);
    const message = messages[randomIndex];
    document.getElementById('message').textContent = message;
    document.getElementById('message').classList.remove('hidden');
});
