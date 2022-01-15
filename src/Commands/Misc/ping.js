const Discord = require("discord.js")
const Command = require("../../Structures/Command.js");

module.exports = new Command({
	name: "ping",
	description: "Checks the bot's latency!",
	permission: "SEND_MESSAGES",

	async run(message, args, client) {

		const embed = new Discord.MessageEmbed()
		message.reply("Calculating ping").then(resultMessage => {
			const ping = resultMessage.createdTimestamp - message.createdTimestamp
			resultMessage.edit(`Bot latency: ${ping}ms\nAPI Latency: ${client.ws.ping}ms`)
		})
	},
});

// lets code an 8ball command to see if that fixes it.