const Eris = require('eris');
 
const bot = new Eris('MzY3MTMyNDQwNTE2NjI0NDA1.DL2-QQ.E6fTcN8MjEKQIByqbOIWAOTla_c');
 
bot.on('ready', () => {
    console.log('Ready!');
});
 
bot.on('messageCreate', (msg) => {
    str = msg.content.toLowerCase();
    if(str.indexOf("bone hurting juice" && msg.member.bot !== false) !== -1) {
        bot.createMessage(msg.channel.id, 'ｏｏｆ ｏｕｃｈ ｏｗｉｅ ｍａｈ ｂｏｎｅｓ');
    }
    if(str.indexOf(":bhj:") !== -1) {
        bot.createMessage(msg.channel.id, 'ｂｏｔｔｏｍｓ ｕｐ！');
    }
    if(str.indexOf("oof") !== -1) {
        bot.createMessage(msg.channel.id, 'ｏｕｃｈ ｏｗｉｅ ｍａｈ ｂｏｎｅｓ');
    }
    if(str.indexOf("ouch") !== -1) {
        bot.createMessage(msg.channel.id, 'ｏｗｉｅ ｍａｈ ｂｏｎｅｓ');
    }
    if(str.indexOf("owie") !== -1) {
        bot.createMessage(msg.channel.id, 'ｍａｈ ｂｏｎｅｓ');
    }
    if(str.indexOf("pl0x") !== -1) {
        bot.createMessage(msg.channel.id, 'ＧＥＴ ＯＵＴ');
    }
    if(str.indexOf("plox") !== -1) {
        bot.createMessage(msg.channel.id, 'ＧＥＴ ＯＵＴ');
    }
    if(str.indexOf("lube") !== -1) {
        bot.createMessage(msg.channel.id, 'ｍａｋｅ ｔｈａｔ ｆｉｓｈ ｌｕｂｅ');
    }
    if(str.indexOf("fish lube") !== -1) {
        bot.createMessage(msg.channel.id, 'ｏｈ ｙｅａｈ ｍｏｒｅ ｆｉｓｈ ｌｕｂｅ ｏｈｈｈｈ ｙｅｅｅａａａｈｈｈ');
    }
});

 
bot.connect(); 
