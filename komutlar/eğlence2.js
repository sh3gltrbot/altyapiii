const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setThumbnail("https://78.media.tumblr.com/10b366f294d47b40d857d6e47872d0dc/tumblr_ntubqoYYsF1sqwlqgo3_250.gif")
  .setTitle("**Eğlence!**")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("📌 **:Eğlence Komutları 2:** 📌", `<:asbayraklari:502174044871720961>`)
  .addField("**x!hayvan = Rastgele Hayvan Gifleri**", `**l!stresçarkı = Stres Çarkı Çevirirsiniz**`) 
  .addField("**x!tkm = Şakirle Taş-Kağıt-Makas Oynarsınız. **", `**l!starwars = StarWars izlersiniz.**`) 
  .addField("**x!kahkaha = Kahkaha Atarsınız**", `**l!sigara = Sigara Sağlığa Zararlıdır! **`) 
  .addField("**x!urfagönder = Urfa Yersiniz.**", `**l!sins-aga = Johnny Sins Gifi.**`) 
  .addField("**x!arkadaşın = Şakir Arkadaşını Bilir.**", `**l!söv = İstediğiniz Kişiye Söversiniz.**`) 
  .addField("**x!emojiyazı = Mesajınızı Emoji Metnine Dönüştürür. **", `**l!8ball = Sihirli 8ball Sorularınızı Yanıtlar.**`) 
  .addField("**x!avatarım = Avatarınızı Gösterir.**", `**l!banned = Admin Banhammeri .**`) 
  .addField("**x!koş = Koşarsınız **", `**l!çayiç = Çay İçersiniz.**`) 
  .addField("**x!çekiç = İstediğiniz Kişiye Çekiç Atarsınız**", `**l!yumruh-at = İstediğiniz Kişiye Yumruk Atarsınız**`) 
  .addField("**x!sunucubilgi = Sunucu Bilgisini Verir**", `**l!kullanıcıbilgim = Kullanıcı Bilginizi Verir.**`) 

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
  aliases: ['e2', 'eğ2', '4'],
  permLevel: 0
};

exports.help = {
  name: 'eğlence2',
  description: 'Eğlence komutlarını gösterir.',
  usage: 'eğlence2'
};
