const TelegramBot = require('node-telegram-bot-api');
const crawler = require('./crawler')
const token = '275399831:AAHvjSOiGLxgXmff9wgdECdrZXfMtvnKURw';

const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/NadaPraFazer (.+)/, (msg, match) => {
  const chatId = msg.chat.id;

  const resp = crawler.yourReading(match[1]);

  bot.sendMessage(chatId, resp);
});
