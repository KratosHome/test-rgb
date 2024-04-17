/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN,
        TELEGRAM_BOT_CHAT_ID: process.env.TELEGRAM_BOT_CHAT_ID,
    }
};

export default nextConfig;
