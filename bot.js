const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

var narratorstr = [
    'Our HotS team, once so well regarded, is now barely whispered aloud by the bronzers.',
    'I remember days when the team lived, and laughter could be heard from the teamspeak.',
    'Women and men; bronzies and silvers; fools and flamers. All will find their way to us now that the queue is clear.',
    'The cobwebs have been dusted, the channels set straight. The teamspeak calls for its team, but there is no answer.',
    'Once, our HotS team was the envy of team league...',
    'I was lord of this game once, before the shitters and rejects made it their domain.',
    'In time, you will know the tragic extent of my HotS team...',
    'An eternity of futile queue times -- a penance for my unspeakable retirement.',
    'Curiosity, interest and overwatch heroes -- mile markers on my road to damnation.',
    "In truth I cannot tell how much time has passed since I've been queuing for team league.",
    'I can still see their angry faces as they stormed the skype group, but the team was dead before they found me, and the meems were on their way.',
    ];

function rng(low, high) {
    return Math.random() * (high - low) + low;
};

var pastaarray = [
    "This guy's pasta is CRAZY!",
    "My rigatoni can't win against a linguini like that.",
    "He NEEDED that alfredo to win.",
    "He meatballed the only marinara that could beat me.",
    "He had the perfect fettucini.",
    "There was nothing I could cook.",
    "I cooked that al dente!"
    ];

client.on('message', function(message) {
    if (message.content === '!team') {
        var randomNumber = Math.floor(Math.random()*narratorstr.length);
        message.reply(narratorstr[randomNumber],{tts:true});  
    }
    if (message.content === '!pasta') {
        var randomNumber = Math.floor(Math.random()*pastaarray.length);
        message.reply(pastaarray[randomNumber],{tts:true}); 
    }
    if (message.content === '!bronze') {
        message.reply("Some players should have never installed. You are doing just work, stomping them." 
                      ,{tts:true});
    }
    if (message.content === '!shitters') {
        message.reply("Gatekeeping the shitters is an endless battle, but one that must be fought." 
                      ,{tts:true});
    }
    if (message.content === '!pug') {
        message.reply("Bronzers may indeed stalk these queues, but yonder – a pug playing support." 
                      ,{tts:true});
    }
    if (message.content === '!bug') {
        message.reply("Such queue bugs are unsurprising -- this matchmaking predates even the earliest beta testers." 
                      ,{tts:true});
    }
    
});

client.login(process.env.BOT_TOKEN);
