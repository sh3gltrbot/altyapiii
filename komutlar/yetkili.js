const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setThumbnail("https://78.media.tumblr.com/10b366f294d47b40d857d6e47872d0dc/tumblr_ntubqoYYsF1sqwlqgo3_250.gif")
  .setTitle("**Yetkili**")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**:gear: :Yetkili Komutları: :gear:**", `x!log-ayarla = Log Kanalını Ayarlar \n x!sunucukurucu = Otomatik Sunucu Kurar! \n x!otorol = Otorol Ayarlamınızı Sağlar. \n x!rol = Rol vermenizi sağlar. \n x!mesajküçült = Mesajınızı Küçültür. \n x!ban = İstediğiniz kişiyi sunucudan banlar. \n x!kick = İstediğiniz kişiyi sunucudan kickler. \n x!unban = İstediğiniz kişinin banını kaldırır. \n x!sustur = İstediğiniz kişiyi susturur. \n x!oylama = Oylama açar. \n x!duyuru = Güzel bir duyuru görünümü sağlar. \n x!kanalbilgi = Kanal Hakkinda Bilgi Verir. \n x!geçici-sustur = Belirtilen Kişiyi Geçici Susturur \n------------------------------------- \n [DavetLink](https://discordapp.com/oauth2/authorize?client_id=334490425408749570&scope=bot&permissions=805314622),[Bot Sahibi](https://instagram.com/efe.gktg06).  `)
  
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
  aliases: ['yet', 'ye', '2'],
  permLevel: 0
};

exports.help = {
  name: 'yetkili',
  description: 'Yetkili Komutlarını Gösterir.',
  usage: 'yetkili'
};
