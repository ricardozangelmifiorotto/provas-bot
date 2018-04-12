const Discord = require('discord.js')
const bot = new Discord.Client();


bot.login('NDMwODU4NjEyMzYyMTgyNjU5.Da7RkA.NeBWaeMdWafU7e2gHXbTYSBSsXU');
bot.on('ready', function() {
    bot.user.setUsername("Provas");
})

bot.on('message', message => {
    if (message.content.startsWith("!provas")) {
        message.channel.send("3 provas marcadas.", {files: ["https://i.imgur.com/sy8oVj0.png"]})
        
    }  
    });

bot.on('message', message => {
        if (message.content.startsWith("!drive")) {
            message.channel.send("https://drive.google.com/drive/folders/0B4gCAm3CGzEFSXBUSnd6RTY2eFE")
                
        }  
        });
    

bot.on('message', message => {
            if (message.content.startsWith("!ajuda1")) {
                message.channel.send("'!provas' para ver as provas, '!drive' para ver o link do drive")
                    
            }  
            });
        
// THIS MUST BE THIS WAY
client.login(process.env.BOT_TOKEN);
