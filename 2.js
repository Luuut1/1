// 模拟聊天输入
document.querySelector('.chat-input')?.addEventListener('keypress', function(e) {
  if (e.key === 'Enter' && this.value.trim()) {
    const chatBox = document.querySelector('.chat-box');
    
    // 用户消息
    const userMsg = document.createElement('div');
    userMsg.className = 'message user';
    userMsg.textContent = this.value;
    chatBox.appendChild(userMsg);

    // 机器人回复（模拟）
    setTimeout(() => {
      const botMsg = document.createElement('div');
      botMsg.className = 'message bot';
      botMsg.textContent = "感谢您的提问，我们正在为您处理...";
      chatBox.appendChild(botMsg);
      chatBox.scrollTop = chatBox.scrollHeight;
    }, 600);

    this.value = '';
    chatBox.scrollTop = chatBox.scrollHeight;
  }
});
