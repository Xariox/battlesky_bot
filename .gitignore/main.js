const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = ("/");

bot.on('ready', () => {
    bot.user.setPresence({ game: { name: 'BattleSky [/help]', type: 0} });
    console.log("Bot Ready !");
});

bot.login('MzU0OTg2MjQwNDc2NDQ2NzIx.DRcWoA.2QRf2_s5EuEPzUlfIIqKHlgrmUU');

bot.on("guildMemberAdd", member => {
    let role = member.guild.roles.find("name", "☃️ Visiteur ☃️");
    member.addRole(role)
})

bot.on('message', message => {

    if (message.content === prefix + "help"){
        var help_embed = new Discord.RichEmbed()
            .setColor('#B200FE')
            .setTitle('Liste des commandes du bot !')
            .addField("/help", "Affiche les commandes du bot !", true)
            .addField("/ping", "Le bot répond pong !", true)
            .addField("/stats", "Affiche votre profil discord !", true)
            .setFooter("BattleSky by Xari0x", "https://cdn.discordapp.com/avatars/282147518958272512/4746c6bc75b7de27df5990a4fb70ec1c.png")
            .setThumbnail("https://cdn.discordapp.com/avatars/354986240476446721/954bbdcc03988600ad8fae6226c3726a.png")
        message.channel.sendEmbed(help_embed);
        console.log("Commande /help demandée !");
    }

    if (message.content === prefix + "ping"){
        var ping_embed = new Discord.RichEmbed()
            .setColor('#B200FE')
            .addField("Ping", "Pong !")
            .setFooter("BattleSky by Xari0x", "https://cdn.discordapp.com/avatars/282147518958272512/4746c6bc75b7de27df5990a4fb70ec1c.png")
        message.channel.sendEmbed(ping_embed);
        console.log('Commande /ping demandée ! Pong !');
    }

    if (message.content === prefix + "stats"){
        var userCreateDate = message.author.createdAt.toString().split(' ');
        var userPing = message.author.client.ping
        var stats_embed = new Discord.RichEmbed()
            .setColor('#B200FE')
            .addField("Utilisateur", message.author, true)
            .addField("UserID", message.author.id, true)
            .addField("Date de création", userCreateDate[1] + ' ' + userCreateDate[2] + ', ' + userCreateDate[3], true)
            .addField("Ping", userPing, true)
            .setThumbnail(message.author.avatarURL)
            .setFooter("BattleSky by Xari0x", "https://cdn.discordapp.com/avatars/282147518958272512/4746c6bc75b7de27df5990a4fb70ec1c.png")
        message.channel.sendEmbed(stats_embed);
    }

});
