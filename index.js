const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'ODA1MDQ5NDg2NzIwMTA2NTE3.YBVOwg.-xZOihJJWrVH7Qso5H684jhoFHw';


client.on('ready', () => {
    console.log('DISCORD BOT LOGIN');
});


client.on('message', (message) => {
    if(message.content === 'Hello') {
        message.reply('Hello, world!')
    }
});

client.login(token);

