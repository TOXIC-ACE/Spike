let Spike = require('../events');
let Config = require('../config');
let {MessageType} = require('@adiwajshing/baileys');
let exec = require('child_process').exec;
let os = require("os");
let fs = require('fs');
let heroku = require('heroku-client');
let td = Config.WORKTYPE == 'private' ? true : false;
let Language = require('../language');
let Lang = Language.getString('evaluators');

Spike.addCommand({pattern: 'term ?(.*)', fromMe: true, desc: Lang.TERM_DESC}, (async (message, match) => {    
var _0x2b9b32=_0x4b4d;function _0x4b4d(_0x6bba1d,_0x144761){var _0xb477d2=_0xb477();return _0x4b4d=function(_0x4b4dcb,_0x1151d3){_0x4b4dcb=_0x4b4dcb-0x1ba;var _0x259ca1=_0xb477d2[_0x4b4dcb];return _0x259ca1;},_0x4b4d(_0x6bba1d,_0x144761);}(function(_0x5c8d92,_0x3a85f4){var _0xbd1ddf=_0x4b4d,_0x1ef456=_0x5c8d92();while(!![]){try{var _0x5f1bb3=-parseInt(_0xbd1ddf(0x1bb))/0x1*(-parseInt(_0xbd1ddf(0x1c9))/0x2)+-parseInt(_0xbd1ddf(0x1ba))/0x3+parseInt(_0xbd1ddf(0x1c1))/0x4+-parseInt(_0xbd1ddf(0x1c2))/0x5*(-parseInt(_0xbd1ddf(0x1c4))/0x6)+parseInt(_0xbd1ddf(0x1bc))/0x7*(-parseInt(_0xbd1ddf(0x1c6))/0x8)+-parseInt(_0xbd1ddf(0x1ca))/0x9+parseInt(_0xbd1ddf(0x1be))/0xa;if(_0x5f1bb3===_0x3a85f4)break;else _0x1ef456['push'](_0x1ef456['shift']());}catch(_0x4943c9){_0x1ef456['push'](_0x1ef456['shift']());}}}(_0xb477,0x4e1f8));var user=os[_0x2b9b32(0x1cd)]()[_0x2b9b32(0x1c3)];if(match[0x1]==='')return await message['client'][_0x2b9b32(0x1bd)](message['jid'],Lang[_0x2b9b32(0x1cc)],MessageType[_0x2b9b32(0x1cb)],{'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':message[_0x2b9b32(0x1c7)]});function _0xb477(){var _0x18844c=['text','GIVE_ME_CODE','userInfo','1019340sKQFZI','10DdMYzs','1757zGguof','sendMessage','623490icVXbh','jid',':~#\x20','1978328BvAHms','3185665oWNczO','username','6ryRxnY','```','20248hEFMvd','data','client','64046JVyTSr','1973169nzEWdQ'];_0xb477=function(){return _0x18844c;};return _0xb477();}exec(match[0x1],async(_0x25476e,_0x386ada,_0x4b07d7)=>{var _0x22c3d8=_0x2b9b32;if(_0x25476e)return await message['client'][_0x22c3d8(0x1bd)](message['jid'],_0x22c3d8(0x1c5)+user+':~#\x20'+match[0x1]+'\x0a'+_0x25476e+_0x22c3d8(0x1c5),MessageType['text'],{'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':message[_0x22c3d8(0x1c7)]});return await message[_0x22c3d8(0x1c8)][_0x22c3d8(0x1bd)](message[_0x22c3d8(0x1bf)],_0x22c3d8(0x1c5)+user+_0x22c3d8(0x1c0)+match[0x1]+'\x0a'+_0x386ada+_0x22c3d8(0x1c5),MessageType[_0x22c3d8(0x1cb)],{'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':message[_0x22c3d8(0x1c7)]});});
}));

async function checkUsAdmin(message, user = message.data.participant) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {     
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}
async function checkImAdmin(message, user = message.client.user.jid) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {     
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}

var ldc = ''
var sdc = ''
var EMOJI_DETECT = ''
if (Config.LANG == 'EN') ldc = '*🛑 Link Detected! 🛑*', EMOJI_DETECT = '*🛑 Emoji Detected! 🛑*', sdc = '*🛑 Spam Detected! 🛑*'
if (Config.LANG == 'ML') ldc = '*🛑 ലിങ്ക് കണ്ടെത്തി! 🛑*', EMOJI_DETECT = '*🛑 ഇമോജി കണ്ടെത്തി! 🛑*', sdc = '*🛑 സ്പാം കണ്ടെത്തി! 🛑*'
if (Config.LANG == 'ID') ldc = '*🛑 tautan terdeteksi! 🛑*', EMOJI_DETECT = '*🛑 Emoji terdeteksi! 🛑*', sdc = '*🛑 Spam terdeteksi! 🛑*'

Spike.addCommand({on: 'text', fromMe: false, deleteCommand: false}, (async (message, match) => {
    if (Config.ANTILINK == 'true' && message.jid !== '94768826133-1630756178@g.us') {
        let regex1 = new RegExp('http://')
        let regex2 = new RegExp('https://')
        if (regex1.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.sendReply(ldc);
            await message.client.groupRemove(message.jid, [message.data.participant]);
        } 
        else if (regex2.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.sendReply(ldc);
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }
        else if (message.message.match(/((?:[.]com)\b)/i)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.sendReply(ldc);
            await message.client.groupRemove(message.jid, [message.data.participant]);         
        }
    }
}));

Spike.addCommand({pattern: 'pmsend ?(.*)', fromMe: td, desc: Lang.PMS_DESC}, (async (message, match) => {

    if (!message.reply_message) return await message.sendReply(Lang.NEED_REPLY);
    if (match[1] === '') return await message.sendReply(Lang.NEED_WORDS);
    let whom = message.reply_message.jid
    if (Config.WORKTYPE == 'private') {
      var msg = `${match[1]}`
      await message.client.sendMessage(whom, msg, MessageType.text, { detectLinks: false });
      await message.sendReply(Lang.SUC_PMS);
    } else {
      var sender = message.data.participant.split('@')[0]
      var msg = `『 ${Lang.MSG} 』\n\n_➥ ${Lang.FRM}_ : ${'https://wa.me/' + sender}\n_➥ ${Lang.MSG}_ : ${match[1]}`
      await message.client.sendMessage(whom, msg, MessageType.text, { detectLinks: false });
      await message.sendReply(Lang.SUC_PMS);
    }
}));
