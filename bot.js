const Discord = require('discord.js')
const bot = new Discord.Client();


bot.on('ready', function() {
    bot.user.setUsername("Provas");
})

bot.on('message', message => {
    if (message.content.startsWith("!provas")) {
        message.channel.send("5 provas marcadas.", {files: ["https://i.imgur.com/vijYhLM.png"]})
        
    }  
    });

bot.on('message', message => {
        if (message.content.startsWith("!drive")) {
            message.channel.send("https://drive.google.com/drive/folders/0B4gCAm3CGzEFSXBUSnd6RTY2eFE")
                
        }  
        });
    

bot.on('message', message => {
            if (message.content.startsWith("!ajuda1")) {
                message.channel.send("'!provas' para ver as provas, '!drive' para ver o link do drive, '!aulas' para ver as aulas, '!calendario' para ver o calendario,'!am' dia da prova am,'!ps' para ver o dia das ps")
                    
            }  
            });
bot.on('message', message => {
    if (message.content.startsWith("!aulas")) {
        message.channel.send("Essa sao suas aulas.", {files: ["https://i.imgur.com/kseGiVI.png"]})
        
    }  
    });
bot.on('message', message => {
    if (message.content.startsWith("!aulas")) {
        message.channel.send("Essa sao suas aulas.", {files: ["https://i.imgur.com/kseGiVI.png"]})
        
    }  
    });

bot.on('message', message => {
        if (message.content.startsWith("!calendario")) {
           message.channel.send("https://www2.fiap.com.br/Updown/upload_fiap/CalendarioEscolarGraduacao/Calendario_Academico_2018_1_Semestre.pdf");    
        }  
        });

bot.on('message', message => {
        if (message.content.startsWith("!am")) {
            message.channel.send("Dia 17 de Maio")
                
        }  
        });
bot.on('message', message => {
        if (message.content.startsWith("!ps")) {
                  message.channel.send("Essa as datas da ps.", {files: ["https://i.imgur.com/QWUDNx7.jpg"]})
                  message.channel.send("", {files: ["https://i.imgur.com/aAyrPvS.jpg"]})
        }  
        });
        

        
// THIS MUST BE THIS WAY
bot.login(process.env.BOT_TOKEN);
