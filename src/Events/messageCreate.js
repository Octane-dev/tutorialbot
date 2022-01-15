const Event = require("../Structures/Event.js");

const Command = require("../Structures/Command.js");

const Discord = require("discord.js");

module.exports = new Event("messageCreate", (client, message) => {
    if (message.author.bot) return;

    if (!message.content.startsWith(client.prefix)) return;

    const args = message.content.substring(client.prefix.length).split(/ +/);
    
    const command = client.commands.find(cmd => cmd.name == args[0].toLowerCase())


    if (!command) return message.reply(`:x: The command \`${args[0]}\` is not valid!`);;

    const permission = message.member.permissions.has(command.permission, true);


    if (!permission) return message.reply(`:x: You do not have the permission \`${command.permission}\` to run this command!`)

    command.run(message, args, client);
});