/* Copyright (C) 2020 afnanplk
PINKY V2
*/

const Asena = require('../events');
const config = require('../config');
const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: config.HEROKU.API_KEY
});
let baseURI = '/apps/' + config.HEROKU.APP_NAME;

   var l_dsc = ''
    var alr_on = ''
    var alr_off = ''
    var THERI_on = ''
    var THERI_off = ''
   
    if (config.LANG == 'EN') {
        l_dsc = 'Removes when callaing some bad words...'        
        THERI_on = '*eni chilla theri vilcha kick akkum*'
        THERI_off = '*eni enth theri vennelum vili*'
    }
   
   
    if (config.LANG == 'ML') {
        l_dsc = 'തിരഞ്ഞെടുത്ത ചില തെറി വിളിച്ചാൽ remove ആകും. Bot owner command.'
        THERI_on = 'തിരഞ്ഞെടുത്ത തെറിയിൽ നിന്നും എന്തെങ്കിലും വിളിച്ചാൽ ഞാൻ തൂക്കി എടുത്ത് വെളിയിൽ കളയും🌚'
        THERI_off = 'ഇനി എന്ത് തെറി വേണേലും വിളിക്കാം👀.'
    }
   
    Asena.addCommand({pattern: 'theri ?(.*)', fromMe: true, desc: l_dsc, usage: '.theri no / yes' }, (async (message, match) => {
        if (match[1] == 'yes') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['THERI_KICK']: 'false'
                    } 
                });
                await message.sendMessage(THERI_off)
        } else if (match[1] == 'no') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['THERI_KICK']: 'true'
                    } 
                });
                await message.sendMessage(THERI_on)
        }
    }));
