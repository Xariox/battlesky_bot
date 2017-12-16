import { MessageEmbedAuthor } from 'discord.js';

const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = ("/");

bot.on('ready', () => {
    bot.user.setPresence({ game: { name: 'BattleSky [/help]', type: 0} });
    console.log("Bot Ready !");
});

bot.login('MzU0OTg2MjQwNDc2NDQ2NzIx.DRbmHg.HEuanQT8kjVE8pQbuUL7MeHDbwI');

bot.on("guildMemberAdd", member => {
    let role = member.guild.roles.find("name", "☃️ Visiteur ☃️");
    member.addRole(role)
})

bot.on('message', message => {

    if (message.content === prefix + "help"){
        var help_embed = new Discord.RichEmbed()
            .setColor('#CC00DB')
            .addField("Général", "    - /help : Affiche les commandes du bot !")
            .addField("Interaction", "    - /ping : Le bot répond pong !")
            .setFooter("BattleSky by Xari0x", "https://cdn.discordapp.com/avatars/282147518958272512/4746c6bc75b7de27df5990a4fb70ec1c.png")
            .setThumbnail("https://cdn.discordapp.com/avatars/354986240476446721/954bbdcc03988600ad8fae6226c3726a.png")
        message.channel.sendEmbed(help_embed);
        console.log("Commande /help demandée !");
    }

    if (message.content === prefix + "ping"){
        var ping_embed = new Discord.RichEmbed()
            .setColor('#07DB00')
            .addField("Ping", "Pong !")
            .setFooter("BattleSky by Xari0x", "https://cdn.discordapp.com/avatars/282147518958272512/4746c6bc75b7de27df5990a4fb70ec1c.png")
        message.channel.sendEmbed(ping_embed);
        console.log('Commande /ping demandée ! Pong !');
    }

    if (message.content === prefix + "stats"){
        var stats_embed = new Discord.RichEmbed()
            .setColor('#0FFFE7')
            .setTitle('Stats : ${message.author.username}')
            .addField("User ID", "test")
            .setFooter("BattleSky by Xari0x", "https://cdn.discordapp.com/avatars/282147518958272512/4746c6bc75b7de27df5990a4fb70ec1c.png")
        message.channel.sendEmbed(stats_embed);
        console.log('Commande /ping demandée ! Pong !');
    }

});
