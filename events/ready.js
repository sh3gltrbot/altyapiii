const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("online");
   var oyun = [
        " SH3GLTR V3 - BOT",
     "💯|Kullanışlılık",
     "⚠| x!sunucukurucu Ile Kanalları Oluştur",
     "🔰| x!davet Botumuzu Ekleyin",
     "💳| x!canlıdestek Ile Destek Alın",
     "💲| x!dolar Dolar Fiyatı",
     "📗| x!Eğlence1-2 ",
     "🎼| x!çal Müzik Çalar",     
     "🍕| x!sipariş Komutu Aktif",
     "🕛| x!saat Komutu Ile Saati Öğrenin ",
    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+1);

        client.user.setGame(oyun[random], "https://www.twitch.tv/elanur");
        }, 2 * 700);
}
