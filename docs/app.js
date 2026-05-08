const input = document.getElementById("input");
const output = document.getElementById("output");

const commands = {
  help: `
可用指令：
help       - 顯示指令
about      - 關於我
skills     - 我的技能
projects   - 我的專案
contact    - 聯絡方式
clear      - 清空畫面
  `,

  about: `
👋 Hi，我是 陳怡杉

📚 實踐大學 資訊科技與管理學系三年級
💡 熱衷於軟體開發與問題解決，享受從 0 到 1 打造作品的過程
🚀 擅長在實作中學習，持續探索資訊與科技領域的更多可能
  `,

  skills: `
💻 前端開發 Frontend:
- HTML, CSS, JavaScript, TypeScript
- React, Next.js

⚙️ 後端開發 Backend:
- Node.js, Express
- RESTful API 設計

📱 行動裝置 Mobile:
- Android（Java / Kotlin）

🗄️ 資料庫 Database:
- MySQL

🧠 其他 Others:
- Git / GitHub
- Python
- n8n
  `,

  projects: `
📌 貪食蛇小遊戲
🌐 <a href="https://tanyee65.github.io/SnakeGame/" target="_blank">查看專案</a>

📌 少兒 BMI 計算APP
🌐 <a href="https://github.com/tanyee65/Children_BMIApp" target="_blank">查看專案</a>

📌 科技新聞 App
🌐 <a href="https://github.com/tanyee65/MyNewsApp" target="_blank">查看專案</a>
  `,

  contact: `
📧 email: tanyee65@email.com
🐙 GitHub: github.com/tanyee65
📱 Phone: +886-908-521-081
  `
};

function print(text) {
  output.innerHTML += `<div class='line'>${text}</div>`;
}

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const cmd = input.value.trim();

    print(`visitor@portfolio:~$ ${cmd}`);

    if (cmd === "clear") {
      output.innerHTML = "";
    } else if (commands[cmd]) {
      print(commands[cmd]);
    } else {
      print("❌ 指令不存在，輸入 help 查看可用指令");
    }

    input.value = "";
  }
});
