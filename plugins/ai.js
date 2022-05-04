let Spike = require('../events');
let Bot = require('../events');
let {MessageType} = require('@adiwajshing/baileys');
let fs = require('fs');
let axios = require('axios');
let PD = require('./sql/plugin');
let Config = require('../config');
let td = Config.WORKTYPE == 'public' ? false : true
let Language = require('../language');
let Lang = Language.getString('ai');

var NAME = "Name"
var ABOUT = "About"
var NUMBER = "Number"
var LINK = "Link"
var VERSION = "Version"
var BRANCH = "Branch"
var INT_CMD = "Internal Commands"
var EXT_CMD = "External Commands"
var TTL_CMD = "Total Commands"
var OWNER = "Owner"
var C_OWNER = "Contact Owner"
var DEV = "Developer"
if (Config.LANG == 'ML') NAME = "പേര്", ABOUT = "എബൌട്ട്‌", NUMBER = "നമ്പർ", LINK = "ലിങ്ക്", VERSION = "പതിപ്പ്", BRANCH = "ബ്രാഞ്ച്", INT_CMD = "ആന്തരിക കമാൻഡുകൾ", EXT_CMD = "ബാഹ്യ കമാൻഡുകൾ", TTL_CMD = "മൊത്തം കമാൻഡുകൾ", OWNER = "ഉടമ", C_OWNER = "ഉടമയെ ബന്ധപ്പെടുക", DEV = "ഡെവലപ്പർ"
if (Config.LANG == 'ID') NAME = "Nama", ABOUT = "Tentang", NUMBER = "Nomor", LINK = "Tautan", VERSION = "Versi", BRANCH = "Cabang", INT_CMD = "Perintah Internal", EXT_CMD = "Perintah External", TTL_CMD = "Total Perintah", OWNER = "Pemilik", C_OWNER = "Hubungi Pemilik", DEV = "Pengembang"

Spike.addCommand({pattern: 'simi ?(.*)', fromMe: td, desc: Lang.SIMI_DESC}, async (message, match) => {
    try {
      await axios.get(Config.API + '/ai/simi?text=' + encodeURIComponent(match[1]) + '&lang=' + Config.LANG).then(async (json) => {
        await message.sendReply('\n*🤖 '+ Lang.BOT_DIVIDER +'* ```' + json.data.response + '```\n');
      });
    } catch (e) {
      await message.sendReply(Lang.NOT_FOUND_RESPONSE);
    }
});

Spike.addCommand({pattern: 'aco ?(.*)', fromMe: td, desc: Lang.ACO_DESC}, async (message, match) => {
    try {
      var id = message.jid.endsWith('g.us') ? message.data.participant.split('@')[0] : message.jid.split('@')[0]
      if (id == message.client.user.jid.split('@')[0]) id = message.client.user.jid.split('@')[0]
      await axios.get(Config.API + '/ai/aco?text=' + encodeURIComponent(match[1]) + '&id=' + id + '&lang=' + Config.LANG).then(async (json) => {
        await message.sendReply('\n*💬 '+ Lang.BOT_DIVIDER +'* ```' + json.data.response + '```\n');
      });
    } catch (e) {
      await message.sendReply(Lang.NOT_FOUND_RESPONSE);
    }
});

Spike.addCommand({pattern: 'info ?(.*)', fromMe: td, desc: Lang.INFO_BOT}, (async (message, match) => {

var _0x2db458=_0x4a93;function _0x4a93(_0xad1977,_0x5a5fc1){var _0x2dda42=_0x2dda();return _0x4a93=function(_0x4a930a,_0x271dbd){_0x4a930a=_0x4a930a-0x128;var _0x3f5c60=_0x2dda42[_0x4a930a];return _0x3f5c60;},_0x4a93(_0xad1977,_0x5a5fc1);}(function(_0x4d38a4,_0x1fe07a){var _0x5f693d=_0x4a93,_0xbf463d=_0x4d38a4();while(!![]){try{var _0x2e461a=-parseInt(_0x5f693d(0x143))/0x1+-parseInt(_0x5f693d(0x129))/0x2*(-parseInt(_0x5f693d(0x13a))/0x3)+parseInt(_0x5f693d(0x12e))/0x4*(parseInt(_0x5f693d(0x133))/0x5)+parseInt(_0x5f693d(0x141))/0x6*(parseInt(_0x5f693d(0x140))/0x7)+-parseInt(_0x5f693d(0x147))/0x8+-parseInt(_0x5f693d(0x145))/0x9+-parseInt(_0x5f693d(0x131))/0xa*(parseInt(_0x5f693d(0x12d))/0xb);if(_0x2e461a===_0x1fe07a)break;else _0xbf463d['push'](_0xbf463d['shift']());}catch(_0x5e2f06){_0xbf463d['push'](_0xbf463d['shift']());}}}(_0x2dda,0x1bf5a));var me=message[_0x2db458(0x136)][_0x2db458(0x13b)][_0x2db458(0x13c)],ppUrl=await message[_0x2db458(0x136)][_0x2db458(0x13f)](me);if(ppUrl===undefined||ppUrl===null||ppUrl=='')ppUrl=_0x2db458(0x14a);function _0x2dda(){var _0x82cad3=['60755uXYfCw','arraybuffer','data','client','_➥\x20','from','findAll','21EmwKfn','user','jid','split','sendImage','getProfilePicture','7mhEGrm','363372nKBfKv','_\x20:\x20*https://wa.me/','49954cQVOMQ','name','667368lBkfQS','PluginDB','1360024JyoYfr','status','getStatus','https://i.ibb.co/bdy0JSB/avatar-contact.png','_\x20:\x20*TOXIC\x20ACE*','58494IMYwDf','commands','*\x0a_➥\x20','_\x20:\x20*','11XAhpOB','52TISDDm','length','VERSION','146230KYKnDn','isOnWhatsApp'];_0x2dda=function(){return _0x82cad3;};return _0x2dda();}var pp=await axios['get'](ppUrl,{'responseType':_0x2db458(0x134)}),about=await message[_0x2db458(0x136)][_0x2db458(0x149)](me),us=await message['client'][_0x2db458(0x132)](me),name=message['client'][_0x2db458(0x13b)][_0x2db458(0x144)],ec=await PD[_0x2db458(0x146)][_0x2db458(0x139)]();ec=ec[_0x2db458(0x12f)];var ic=Bot[_0x2db458(0x12a)][_0x2db458(0x12f)]-ec,ttc=ic+ec,msg=_0x2db458(0x137)+NAME+'_\x20:\x20*'+name+_0x2db458(0x12b)+ABOUT+'_\x20:\x20*'+about[_0x2db458(0x148)]+'*\x0a_➥\x20JID_\x20:\x20*'+us[_0x2db458(0x13c)]+'*\x0a_➥\x20'+NUMBER+_0x2db458(0x12c)+us[_0x2db458(0x13c)][_0x2db458(0x13d)]('@')[0x0]+_0x2db458(0x12b)+LINK+_0x2db458(0x142)+us['jid'][_0x2db458(0x13d)]('@')[0x0]+_0x2db458(0x12b)+VERSION+_0x2db458(0x12c)+Config[_0x2db458(0x130)]+_0x2db458(0x12b)+BRANCH+_0x2db458(0x12c)+Config['BRANCH']+_0x2db458(0x12b)+INT_CMD+'_\x20:\x20*'+ic+'*\x0a_➥\x20'+EXT_CMD+_0x2db458(0x12c)+ec+_0x2db458(0x12b)+TTL_CMD+_0x2db458(0x12c)+ttc+'*\x0a_➥\x20'+OWNER+_0x2db458(0x12c)+Config['OWNER']+_0x2db458(0x12b)+C_OWNER+'_\x20:\x20*https://wa.me/'+Config['OWNERNUM']+_0x2db458(0x12b)+DEV+_0x2db458(0x128);return await message[_0x2db458(0x13e)](Buffer[_0x2db458(0x138)](pp[_0x2db458(0x135)]),msg);
}));
