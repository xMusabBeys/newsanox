const Discord = require("discord.js");
const moment = require("moment");
const os = require('os');
const db = require("quick.db")
require("moment-duration-format");












exports.run = async (bot, message, args) => {
  const msg = message

  let p = args[0];
  let prefix = await require('quick.db').fetch(`prefix_${msg.guild.id}`) || `n!`
let onlycode = args.slice(0).join(' ');
}

exports.run = async (bot, message, args) => {
  const msg = message

  let kontrol = await db.fetch(`dil_${msg.guild.id}`);
  if (kontrol == "tr") {
    let p = args[0];
    let prefix = await require('quick.db').fetch(`prefix_${msg.guild.id}`) || `n!`
  let onlycode = args.slice(0).join(' ');
  
  

   const annencilermaldır = new Discord.MessageEmbed()

  .setColor('BLUE')
  .setFooter('Sanox  \'Sanox Yardım', bot.user.displayAvatarURL())
  .setImage('https://cdn.discordapp.com/attachments/793502641418010624/796385452021907486/standard_15.gif')
  .addField(`**<:fixit:793770061386743818> Sa-As Ayarla**`, `${prefix}sa-as`, false)
  .addField(`**<:fixit:793770061386743818> Caps Engel**`, `${prefix}capsengel <% yüzde>`, false)
  .addField(`**<:fixit:793770061386743818> Reklam Engel*`, `${prefix}link-engel <kapat/aç>`, false)
  .addField(`**<:fixit:793770061386743818> Küfür Engel*`, `${prefix}küfür-engel <kapat/aç>`, false)


  .addField('\u200b', '\u200B')
  .addField("**<:discord:793769836068470816> Önemliler**", " [Beni Davet et](https://discordapp.com/oauth2/authorize?client_id=733720326646792263&scope=bot&permissions=2146958847) \n[Destek Sunucusu](https://discord.gg/plasmic)")


 return msg.channel.send(annencilermaldır);

  }else{  

    let p = args[0];
    let prefix = await require('quick.db').fetch(`prefix_${msg.guild.id}`) || `n!`
  let onlycode = args.slice(0).join(' ');
  
  
    const aa2 = new Discord.MessageEmbed()
 

    .setColor('BLUE')
    .setFooter('Sanox  \'Sanox Help', bot.user.displayAvatarURL())
    .addField(`**<:fixit:793770061386743818> Caps-Lock Blocking**`, `${prefix}capslock <% percentage>`, false)
    .addField(`**<:fixit:793770061386743818> AdBlocker*`, `${prefix}adblocker <on/off>`, false)
    .addField(`**<:fixit:793770061386743818> Anticurse*`, `${prefix}anticuese <on/off>`, false)
      .addField('\u200b', '\u200B')
    .addField("**<:discord:793769836068470816> Important**", " [Invite Me](https://discordapp.com/oauth2/authorize?client_id=733720326646792263&scope=bot&permissions=2146958847) \n[Support Realm](https://discord.gg/plasmic)")

   
   






  return msg.channel.send(aa2);

  
  }


};

   
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [ 'system', 'sistem', 'sistemler'],
  permLevel: 0
};
 
exports.help = {
  name: "sistem"
};