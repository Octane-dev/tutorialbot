console.clear();

const Client = require("./Structures/Client.js")

const Discord = require("discord.js");

const config = require("./Data/config.json");

const client = new Client();

process.on('unhandledRejection', (err) => {
    console.log('err'+err)})

client.start(config.token);