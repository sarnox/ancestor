const Discord = require('discord.js');
const client = new Discord.Client({autoReconnect: true});

client.on('ready', () => {
    console.log('I am ready!');
    //client.user.setGame(`on ${client.guilds.size} servers`);
});

const narratorstr = [
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

const pastaarray = [
    "This guy's pasta is CRAZY!",
    "My rigatoni can't win against a linguini like that.",
    "He NEEDED that alfredo to win.",
    "He meatballed the only marinara that could beat me.",
    "He had the perfect fettucini.",
    "There was nothing I could cook.",
    "I cooked that al dente!"
    ];

const prefix = "!";

client.on('message', message => {
    if(message.author.bot) return;
    if(message.content.indexOf(prefix) !== 0) return;
  
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if(command === "say") {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage);
    }
    
    if (command === 'team') {
        var randomNumber = Math.floor(Math.random()*narratorstr.length);
        message.reply(narratorstr[randomNumber],{tts:true});  
    }
    if (command === 'pasta') {
        var randomNumber = Math.floor(Math.random()*pastaarray.length);
        message.reply(pastaarray[randomNumber],{tts:true}); 
    }
    if (command === 'bronze') {
        message.reply("Some players should have never installed. You are doing just work, stomping them." 
                      ,{tts:true});
    }
    if (command === 'shitters') {
        message.reply("Gatekeeping the shitters is an endless battle, but one that must be fought." 
                      ,{tts:true});
    }
    if (command === 'pug') {
        message.reply("Bronzers may indeed stalk these queues, but yonder – a pug playing support." 
                      ,{tts:true});
    }
    if (command === 'bug') {
        message.reply("Such queue bugs are unsurprising -- this matchmaking predates even the earliest beta testers." 
                      ,{tts:true});
    }
    if (command === 'hanzo') {
        message.reply("", {file:"https://i.imgur.com/UwpqyMh.mp4"}
                      ,{tts:false});
    }
    if (command === 'qm') {
        message.reply("You remember our venerable quick match... it is a festering abomination! I beg you, turn back now, and save yourselves from the ravenous shadows of... the darkest quickmatch." 
                      ,{tts:true});
    }
    if (command === 'black') {
        message.reply("see !Kunryul");
    }
    if (command === 'kunryul') {
        message.reply("see !black");
    }
    if (command === 'hl') {
        message.reply("Hero league is a lot like trench warfare -- you don't want to be there."
                      ,{tts:true});
    }
    if (command === 'valeera') {
        message.reply("The only thing longer than our team league queues is the duration of Valeera's silence."
                      ,{tts:true});
    }
    
});

client.login(process.env.BOT_TOKEN);
