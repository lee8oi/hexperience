// ==UserScript==
// @name         Hexperience Tools
// @namespace    https://github.com/lee8oi/hexperience
// @version      0.1
// @description  Auto hide-me (with more tools to be added).
// @author       lee8oi
// @match        *://hackerexperience.com/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_listValues
// @grant        GM_deleteValue
// ==/UserScript==

function hideMe() {
    if ($('form.log').find('.logarea').val().length > 0) {
        var logLines = $('form.log').find('.logarea').val().split('\n');
        var newLines = [];
        var foundIP = false;

        $.each(logLines, function(i, el) {
            if (el.indexOf($('.header-ip-show').text()) != -1) {
                foundIP = true;
            } else {
                if (el.length > 0) newLines.push(el);
            }
        });
        
        if (foundIP) {
            $('form.log').find('.logarea').val(newLines.join('\n'));
            $('form.log').submit();
        }
    } else {
        console.log('No log found');
    }
}

if (window.location.href.indexOf("internet") != -1) {
    setTimeout(hideMe, 500);
}