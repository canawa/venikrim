import fetch from 'node-fetch';

const TELEGRAM_TOKEN = '7631558170:AAGGhh10UuegU3XVA06e9hmL__CxXWqTy4Q';
const CHAT_ID = '1015628413';

async function sendTelegramMessage(message) {
  try {
    const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;
    const fullUrl = `${url}?chat_id=${CHAT_ID}&text=${encodeURIComponent(message)}`;
    const response = await fetch(fullUrl);
    const data = await response.json();
    if (data.ok) {
      console.log('Message sent successfully to Telegram');
    } else {
      console.error('Failed to send message:', data.description);
    }
  } catch (error) {
    console.error('Error sending Telegram message:', error);
  }
}

let lastCheckedId = 0;

async function checkNewRows() {
  try {
    // TODO: получать новые заявки из локальной БД (API), например:
    // const rows = await fetchFromLocalDB('info', { gt: lastCheckedId })
    const data = []
    if (data && data.length > 0) {
      data.forEach(row => {
        const message = `⚡ Новая заявка:\n\n👨Имя: ${row.name}\n\n☎️ Телефон: ${row.phone}\n\n💖Описание: ${row.message || 'Нет описания'}`;
        sendTelegramMessage(message);
      });
      lastCheckedId = data[data.length - 1].id;
    }
  } catch (error) {
    console.error('Unexpected error in checkNewRows:', error);
  }
}

setInterval(checkNewRows, 36000);

console.log('SERVER RUNNING!!!');
