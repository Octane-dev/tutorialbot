const { Message } = require("discord.js");
const Discord = require("discord.js");
const Event = require("../Structures/Event.js");
module.exports = new Event("ready", (client) => {
    console.log("Bot is online and ready!")

    const arrayOfStatus = [
        "Hello!",
        "How are you?",
        "I'm doing well!",
    ];
    let index = 0;
    setInterval(() => {
        if (index === arrayOfStatus.length) index = 0;
        const status = arrayOfStatus[index];
        client.user.setStatus('dnd'); 
        client.user.setActivity(status, { type: "Listening", url: "https://google.com" })
        index++;
    }, 30000)
})