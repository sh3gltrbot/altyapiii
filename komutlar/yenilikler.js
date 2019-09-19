const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const botbilgi = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Yenilikler: \n**1** x!roller komutu eklendi! \n**2** x!kaçcm komutu eklendi! \n**3**x!windows Komutu eklendi! \n**4** x!rastgele-renk komutu eklendi! \n**5** x!level Sistemi Eklendi \n **6**x!blok-kırmaca Eklendi  \n**7** x!nsfw komutu kaldirildi \n**8** x!rol komutu eklendi!');
    message.channel.sendEmbed(botbilgi) }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot bilgi', 'botbilgi', 'bb', 'botb', 'bbot', 'hakkında', 'bot hakkında', 'bothakkında'],
  permLevel: 0
};

exports.help = {
  name: 'yenilikler',
  description: 'Yenilikleri gösterir.',
  usage: 'yenilikler'
};
