const Discord = require("discord.js");

module.exports = {
    name: "ban",
    aliases: [],
    run: async (client, message, args) => {
        if (!message.guild.me.hasPermission("BAN_MEMBERS")) {
            return message.reply("I do not have sufficient permissions to do this.");
        }

        if (message.member.hasPermission("BAN_MEMBERS")) {
            let user = message.mentions.users.first();
            let reason = args.slice(1).join(" ") || "Unspecified";

            if (!user) {
                return message.reply("please provide a valid user to ban.");
            }

            try {
                user.ban({ reason: reason + ` - Banned by: ${message.author.tag}` });
                message.channel.send(`**${user.tag}** has been banned.\nReason: ${reason}`);
            } catch (error) {
                console.error(error);
                message.channel.send("I was unable to ban the user.");
            }
        } else {
            message.reply("you do not have sufficient permissions to run this command.");
        }
    }
}