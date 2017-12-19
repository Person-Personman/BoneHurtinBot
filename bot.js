const Eris = require('eris');
 
const bot = new Eris('MzY3MTMyNDQwNTE2NjI0NDA1.DL2-QQ.E6fTcN8MjEKQIByqbOIWAOTla_c');
 
bot.on('ready', () => {
    console.log('Ready!');
});
 
bot.on('messageCreate', (msg) => {
    res = msg.content;
    str = res.toLowerCase();
    if(str.indexOf("bone hurting juice" && msg.member.bot == false) !== -1) {
        bot.createMessage(msg.channel.id, 'oof ouch owie mah bones');
    }
    if(str.indexOf(":bhj:" && msg.member.bot == false) !== -1) {
        bot.createMessage(msg.channel.id, 'bottoms up!');
    }
    if(str.indexOf("oof" && msg.member.bot == false) !== -1) {
        bot.createMessage(msg.channel.id, 'ouch owie mah bones');
    }
    if(str.indexOf("ouch" && msg.member.bot == false) !== -1) {
        bot.createMessage(msg.channel.id, 'owie mah bones');
    }
    if(str.indexOf("owie" && msg.member.bot == false) !== -1) {
        bot.createMessage(msg.channel.id, 'mah bones');
    }
    if(str.indexOf("pl0x" && msg.member.bot == false) !== -1) {
        bot.createMessage(msg.channel.id, 'GET OUT');
    }
    if(str.indexOf("plox" && msg.member.bot == false) !== -1) {
        bot.createMessage(msg.channel.id, 'GET OUT');
    }
    if(str.indexOf("lube" && msg.member.bot == false) !== -1) {
        bot.createMessage(msg.channel.id, 'make that ｆｉｓｈ ｌｕｂｅ');
    }
    if(str.indexOf("fish lube" && msg.member.bot == false) !== -1) {
        bot.createMessage(msg.channel.id, 'ｏｈ ｙｅａｈ ｍｏｒｅ ｆｉｓｈ ｌｕｂｅ ｏｈｈｈｈ ｙｅｅｅａａａｈｈｈ');
    }
});
 
bot.connect(); 
