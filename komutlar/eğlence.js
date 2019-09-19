const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setThumbnail("https://78.media.tumblr.com/10b366f294d47b40d857d6e47872d0dc/tumblr_ntubqoYYsF1sqwlqgo3_250.gif")
  .setTitle("**Eğlence!**")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("📌 **:Eğlence Komutları:** 📌", `<:asbayraklari:502174044871720961>`)
       .addField("**x!balıktut = Balık Tutarsınız**", `**l!1vs1 = 1 VS 1**`)
  .addField("**x!bjk = Avatarınıza BJK Efekti Verir**", `**l!tavsiye = Tavsiyenizi Yapımcıya İletir**`)
    .addField("**x!fb = Avatarınıza FB Efekti Verir**", `**l!gs = Avatarınıza GS Efekti verir**`)
    .addField("**x!kartopu = Etiketldeiğiniz Kişiye kartopu atarsınız.**", `**l!öneri = Önerilerinizi Yapımcıya İletir**`)
  .addField("**x!özlüsöz = Şakir Bir Özlü Söz Söyler.**", `**l!sik = Etiketlediğiniz kişiyi sikersiniz.**`)
  .addField("**x!brilliance = Avatarınıza Brilliance Efekti Verir.**", `**l!çekiliş = Sunucudaki Üyeler Arasında Çekiliş Yaparsınız..**`)
  .addField("**x!kralol = Avatarınıza Kral Efekti Verir.**", `**l!bravery = Avatarınıza Bravery Efekti Verir.**`)
  .addField("**x!level = Seviyenizi Gösterir.**", `**l!korkut = İstediğiniz Kişiyi Korkutursunuz**`)
  .addField("**x!fakemesaj  = Fake Mesaj Atar**", `**l!atatürk-çerçeve = Avatarınıza Ataürk Çerçevesi Ekler.**`)
  .addField("**x!trigger  = Avatarınıza Triggered Efekti Verir.**", `**l!simit = Simit Yersiniz.**`)
  .addField("**x!rastgeleşifre  = Rastgele Şifre Oluşturur.**", `**l!bayrak = Bayrak **`)
  .addField("**x!kaslı = Kaslı Olursunuz**", `**l!tersrenk = Avatarınızın Rengini Tersine Çevirir.**`)
  .addField("**x!sniper = Avatarınıza Sniper Efekti Verir.**", `**l!wasted = Avatarınıza Wasted Efekti Verir.**`)  
  .addField("**x!reklamlar = Rek-lam-lar.**", `**l!su = Light Çok Susadı! Ona Su Ver**`)  
  .addField("**x!kurabiye = Kurabiye Yersin**", `**l!nahçek = İstediğin Kişiye Nah Çekersin**`)   
  .addField("**x!kedi = Rastgele Kedi Gifleri.**", `**l!bilezik:kaldırıldı :(.**`) 
  .addField("**x!ascii**", `**Ascii Yazı Yazmanızı Sağlar.** `) 
  .addField("**x!mcbaşarım**", `**Mesajınızı Minecraft Başarımına Dönüştürür.**`) 
  .addField("**x!geldim/l!afk** = **AFK Moduna Girmenizi-Çıkmanızı Sağlar**", `**l!atatürk** = **Atatürk Resimleri Gösterir.**`) 
  .addField("**x!şakir = kaldırıldı**", `**l!espri = Light Espri Yapar** `) 
  .addField("**x!gif = Rastgele Gifler**", `**l!tokat = İstediğiniz Kişiye Tokat Atarsınız**`) 
  .addField("**EĞLENCE KOMUTLARININ DEVAMI İÇİN l!eğlence2**", `**-----------**`) 

  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['e', 'eğ', '1'],
  permLevel: 0
};

exports.help = {
  name: 'eğlence',
  description: 'Eğlence komutlarını gösterir.',
  usage: 'eğlence'
};
