const asena = require('../events');

const {MessageType} = require('@adiwajshing/baileys');

const OWNER = "it sends details of owner"

const GIT = "it sends links"

const Config = require('../config');

if (Config.WORKTYPE == 'private') {

        asena.addCommand({pattern: 'owner', fromMe: true, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();

    

    r_text[1] = "*╔══➪ιтѕ мє ┆мєℓ-вσт┆══╗*\n           \n*⚜═MEL-BOT═⚜*\n\n*owner ᴠɪᴄʜᴜ⸙ - http://wa.me/+916282715084*\n* *\n🔰EMAIL : adarshmohanj07@gmail.com*            *\n*╚══════🔱🔱🔱🔱🔱═════╝*\n\n*▷Creator:ᴠɪᴄʜᴜ⸙*"

    

    await message.client.sendMessage(

        message.jid,(r_text[1]), MessageType.text);

    }));

        asena.addCommand({pattern: 'git', fromMe: true, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();

    

        r_text[1] = "*Git links*\n           *\n💥═MEL-BOT by VICHU═💥*\n\n*💘 https://github.com/Hisham-Muhammed/Sophia*\n*     *\n💓Liyamol═Owner Saidali═*\n\n  \n\n⚜yt link to set bot:- https://youtu.be/_D4ZYuUSXjs*"

    

        await message.client.sendMessage(

            message.jid,(r_text[1]), MessageType.text);

    

        }));    

    }

    

    if (Config.WORKTYPE == 'public') {

        asena.addCommand({pattern: 'creator', fromMe: false, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();

    

    r_text[1] = "*╔══ιтѕ мє ┆мєℓ-вσт┆══╗*\n           \n*⚜═MEL-BOT═⚜*\n\n*owner VICHU - http://Wa.me/+916282715084*\n* *\n🔰EMAIL : adarshmohanj07@gmail.com*            *\n*╚══════🔱🔱🔱🔱🔱═════╝*\n\n*▷Creator: Vichu🔥*"

    

    await message.client.sendMessage(

        message.jid,(r_text[1]), MessageType.text);

    }));

        asena.addCommand({pattern: 'git', fromMe: false, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();

    

        r_text[1] = "*Git links*\n           *\n💥═MEL-BOT by TOMMY SHELBY═💥*\n\n*💘 https://github.com/MelbotV1/Sophia-2*\n*     *\n*💓FOR HELP: wa.me/916282715084*\n*"

    

        await message.client.sendMessage(

            message.jid,(r_text[1]), MessageType.text);

    

        }));    

    }

