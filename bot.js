const TelegramBot = require('node-telegram-bot-api');

const token ='8634160086:AAFxlqTENwErq0kdHrMrs-eoER_pFRoPCYQ'; // yaha apna naya token daalo

const bot = new TelegramBot(token, { polling: true });


// ================== START COMMAND ==================
bot.onText(/\/start/, (msg) => {
  sendMainMenu(msg.chat.id);
});


// ================== CALLBACK HANDLER ==================
bot.on("callback_query", (query) => {
  const chatId = query.message.chat.id;
  const data = query.data;

  // 🔹 Open Tools Menu
  if (data === "tools_menu") {
    bot.sendMessage(chatId, "🛠 Select a Tool:", {
      reply_markup: {
        inline_keyboard: [
          [{ text: "📷 CamPhish", callback_data: "camphish" }],
          [{ text: "🌐 Zphisher", callback_data: "zphisher" }],
          [{ text: "🔍 Nmap", callback_data: "nmap" }],
          [{ text: "⬅ Back to Main Menu", callback_data: "back_main" }]
        ]
      }
    });
  }

  // 🔹 CamPhish
  if (data === "camphish") {
    bot.sendMessage(chatId, `
📷 CamPhish Install:

git clone https://github.com/techchipnet/CamPhish.git
cd CamPhish
bash camphish.sh
`);
  }

  // 🔹 Zphisher
  if (data === "zphisher") {
    bot.sendMessage(chatId, `
🌐 Zphisher Install:

git clone https://github.com/htr-tech/zphisher.git
cd zphisher
bash zphisher.sh
`);
  }

  // 🔹 Nmap
  if (data === "nmap") {
    bot.sendMessage(chatId, `
🔍 Nmap Usage:

apt install nmap
nmap -sV target.com
`);
  }

  // 🔹 Developer Info
  if (data === "developer_info") {
    bot.sendMessage(chatId, `
👤 Developer Information

Name: Munir Choudhary
Role: Developer & Cyber Security Learner
Focus: Ethical Hacking | Kali Linux | Web Development

🚀 Building automation & security tools
💻 Passionate about technology

Thank you for using this bot ❤️
`);
  }

  // 🔹 Back to Main Menu
  if (data === "back_main") {
    sendMainMenu(chatId);
  }

  bot.answerCallbackQuery(query.id);
});


// ================== MAIN MENU FUNCTION ==================
function sendMainMenu(chatId) {
  bot.sendMessage(chatId, "Welcome to Read Kali Linux 🚀\nChoose an option:", {
    reply_markup: {
      inline_keyboard: [
        [{ text: "🌐 Open Website", url: "https://readkali.netlify.app/" }],
        [{ text: "🛠 Show Tools Code", callback_data: "tools_menu" }],
        [{ text: "👤 Who Created This Bot", callback_data: "developer_info" }],
        [{ text: "📞 Contact Us (Instagram)", url: "https://www.instagram.com/coming_soon____2029?igsh=MTZwNHcxdHBjc3JsMQ==" }]
      ]
    }
  });
}