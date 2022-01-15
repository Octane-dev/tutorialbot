const { MessageEmbed } = require("discord.js");
const Command = require("../../Structures/Command.js");
const { permission } = require("../Misc/ping.js");

module.exports = new Command({
        name: "8ball",
        description: ":8ball:",
        permission: "SEND_MESSAGES",
    async run(message, args, client) {
        let q = args.slice(1).join(" ")
        let array = ["Yes","No","What even is that question?!","LMAO NO WAY","OH BABY YES","HAHAHAHAHA no.","Yeeee","Ahem do you think I care?","Couldn't care less lol."] // just make an array like this
        let random = array[Math.floor(Math.random()*array.length)]
        message.reply(`What you wrote: ${q}\n:8ball:'s answer: ${random}`)
    }
});