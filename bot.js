const { Telegraf } = require("telegraf");
const axios = require("axios");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(3000, () => {
  console.log("Starting server");
});

const TOKEN = "7162733485:AAE7qf0rbq258QuYM6WepPK4hOLh4htUHZA";
const bot = new Telegraf(TOKEN);

const web_link = "https://murodcombat.netlify.app/";

bot.start((ctx) => {
  console.log(ctx.update.message.text);
  console.log(ctx.update.message.from);

  return ctx.reply(
    `Assalomu aleykum ${ctx.update.message.from.first_name}! Siz bizning yangi CombatGame 🎮 o'yinimizga tashrif buyurdingiz... \nMuallif: @MurodjonHalilov`,
    {
      reply_markup: {
        inline_keyboard: [
          [{ text: "O'yinni boshlash 🎮", web_app: { url: web_link } }],
        ],
      },
    }
  );
});

bot.launch();
