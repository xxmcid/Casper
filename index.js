// Import discord API and assign it to a variable called Discord.
const Discord = require("discord.js");
require("dotenv").config();

// List of intents specify what the bot should look for.
// in this case it is looking for particular messages.
// hence 'GUILD_MESSAGES'
const client = new Discord.Client({
    intents:
    [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
});

// A prompt from the bot to verify that it has successfully logged into the server.
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
});

// Action listener that listens for whenever a user enters Test
client.on("messageCreate", (message) => {
    if (message.content == 'Test')
        message.reply("BOO!");

})

client.login(process.env.TOKEN);