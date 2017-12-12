const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

var narratorstr = [
    'Our HotS team, once so well regarded, is now barely whispered aloud by the bronzers.',
    'I remember days when the team lived, and laughter could be heard from the teamspeak.',
    'Our HotS team, once so well regarded, is now barely whispered aloud by decent folk.',
    'Women and men; bronzies and silvers; fools and flamers. All will find their way to us now that the queue is clear.',
    'The cobwebs have been dusted, the channels set straight. The teamspeak calls for its team, but there is no answer.',
    'Once, our HotS team was the envy of team league...',
    'I was lord of this game once, before the shitters and rejects made it their domain.',
    'In time, you will know the tragic extent of my HotS team...',
    'An eternity of futile queue times -- a penance for my unspeakable retirement.',
    'Curiosity, interest and overwatch heroes -- mile markers on my road to damnation.',
    "In truth I cannot tell how much time has passed since I've been queuing for team league.",
    'I can still see their angry faces as they stormed the skype group, but the team was dead before they found me, and the meems were on their way.',
    'Our HotS team, once so well regarded, is now barely whispered aloud by decent folk.'
    ];

function rng(low, high) {
    return Math.random() * (high - low) + low;
};

client.on('message', message => {
    if (message.content === '!team') {
        message.reply('Our HotS team, once so well regarded, is now barely whispered aloud by the bronzers.',{tts:true});
    }
});

client.login(process.env.BOT_TOKEN);
