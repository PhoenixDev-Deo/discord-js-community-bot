const Discord = require("discord.js");
const db = require("quick.db");
const afks = new db.table("AFKs");

module.exports = {
    name: "afk",
    aliases: [],
    run: async (client, message, args) => {

        if (!args[0]) {
            message.channel.send("Sub Commands: `set <message>`, `delete`.");
        } else if (args[0] == "set") {
            let m = args.slice(1).join(" ");

            afks.set(message.author.id, m);

            message.channel.send("Your AFK has been set.");
        } else if (args[0] == "delete") {
            afks.delete(message.author.id);

            message.channel.send("Your AFK has been deleted.");
        }
    }
}