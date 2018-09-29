const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'no') {

       message.reply('OH YEAH!!!');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NDk1Mzg5MDQ0ODM5Mjg0NzY3.DpBWxA.zq2pBqlFvcJ_h6WCZrtTjUq3JJg);//where BOT_TOKEN is the token of our bot
