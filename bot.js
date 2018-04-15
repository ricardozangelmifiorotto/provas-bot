const Discord = require('discord.js')
const bot = new Discord.Client();


bot.on('ready', function() {
    bot.user.setUsername("Provas");
})

bot.on('ready', function() {
    bot.user.setPlayingGame("FIAP");
})

bot.on('message', message => {
    if (message.content.startsWith("!provas")) {
        message.channel.send("4 provas marcadas.", {files: ["https://i.imgur.com/RdH269v.png"]})
        
    }  
    });

bot.on('message', message => {
        if (message.content.startsWith("!drive")) {
            message.channel.send("https://drive.google.com/drive/folders/0B4gCAm3CGzEFSXBUSnd6RTY2eFE")
                
        }  
        });
    

bot.on('message', message => {
            if (message.content.startsWith("!ajuda1")) {
                message.channel.send("'!provas' para ver as provas, '!drive' para ver o link do drive, '!aulas' para ver as aulas")
                    
            }  
            });
bot.on('message', message => {
    if (message.content.startsWith("!aulas")) {
        message.channel.send("Essa sao suas aulas.", {files: ["https://i.imgur.com/kseGiVI.png"]})
        
    }  
    });

        
// THIS MUST BE THIS WAY
bot.login(process.env.BOT_TOKEN);
