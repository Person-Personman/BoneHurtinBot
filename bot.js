
const Eris = require('eris');
 
const bot = new Eris('MzY3MTMyNDQwNTE2NjI0NDA1.DL2-QQ.E6fTcN8MjEKQIByqbOIWAOTla_c');
 
bot.on('ready', () => {
    console.log('Ready!');
});
 
bot.on('messageCreate', (msg) => {
    res = msg.content;
    str = res.toLowerCase();
    if(str.indexOf("bone hurting juice") !== -1) {
        bot.createMessage(msg.channel.id, 'oof owie my bones');
    }
    if(str.indexOf(":bhj:") !== -1) {
        bot.createMessage(msg.channel.id, 'bottoms up!');
    }
    if(str.indexOf("oof") !== -1) {
        bot.createMessage(msg.channel.id, 'owie');
    }
    if(str.indexOf("ouch") !== -1) {
        bot.createMessage(msg.channel.id, 'owie');
    }
    if(str.indexOf("owie") !== -1) {
        bot.createMessage(msg.channel.id, 'mah bones');
    }
    if(str.indexOf("pl0x") !== -1) {
        bot.createMessage(msg.channel.id, 'GET OUT');
    }
    if(str.indexOf("plox") !== -1) {
        bot.createMessage(msg.channel.id, 'GET OUT');
    }
    if(str.indexOf("gay") !== -1) {
        bot.createMessage(msg.channel.id, 'no nigga you gay - @Ian');
    }
    if(str.indexOf("lube") !== -1) {
        bot.createMessage(msg.channel.id, 'make that ｆｉｓｈ ｌｕｂｅ');
    }
    if(str.indexOf("fish lube" || "ｆｉｓｈ ｌｕｂｅ") !== -1) {
        bot.createMessage(msg.channel.id, 'ｏｈ ｙｅａｈ ｍｏｒｅ ｆｉｓｈ ｌｕｂｅ ｏｈｈｈｈ ｙｅｅｅａａａｈｈｈ');
    }
});
 
bot.connect();
