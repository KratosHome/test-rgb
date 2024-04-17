'use server';
import TelegramBot from 'node-telegram-bot-api';
import {formatDate} from "@/utils/formatDate";

export async function telegramAction(formData: any) {
    const formattedDate = formatDate(new Date());
    const chatId = `${process.env.TELEGRAM_BOT_CHAT_ID}`;
    const bot = new TelegramBot(`${process.env.TELEGRAM_BOT_TOKEN}`, {polling: true});

    await bot.sendMessage(chatId, `
    Data: ${formattedDate},
    Name: ${formData.name},
    Email: ${formData.email},
    Phone: ${formData.phone},
 `)

}

// 6163382681 -