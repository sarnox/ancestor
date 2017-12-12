const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!team') {
        message.tts(':ancestor01: Our HotS team, once so well regarded, is now barely whispered aloud by decent folk.');
        message.channel.send("A text to speech message from a bot.", {
 tts: true
})
    }
});

client.login(process.env.BOT_TOKEN);
