// ==UserScript==
// @name         Hexperience Tools
// @namespace    https://github.com/lee8oi/hexperience
// @version      0.1
// @description  Log helper with auto hide-me & clear buttons.
// @author       lee8oi
// @match        *://hackerexperience.com/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_listValues
// @grant        GM_deleteValue
// ==/UserScript==

// Clear buttons

if ($('#link2').text() == " Log file" || $('#link0').text() == " Log File") {
    $('form.log input.btn').before('<input class="btn btn-inverse" id="clearlog" type="button" value="Clear" style="width: 80px;"><span>     </span>');
}

$('#clearlog').click(function(){
    if ($('form.log').length) {
        $('form.log').find('.logarea').val('');
        $('form.log').submit();
    } else {
        console.log('No log found');
    }
});

// Auto hide-me

function hideMe() {
    var logArea = $('form.log').find('.logarea'), val = logArea.val();
    if (typeof(val) != "undefined" && val.length > 0) {
        var logLines = val.split('\n'), newLines = [], foundIP = false;
        $.each(logLines, function(i, el) {
            if (el.indexOf($('.header-ip-show').text()) != -1) {
                foundIP = true;
            } else {
                if (el.length > 0) newLines.push(el);
            }
        });
        if (foundIP) {
            logArea.val(newLines.join('\n'));
            $('form.log').submit();
        }
    }
}

if (window.location.href.indexOf("internet") != -1) {
    setTimeout(hideMe, 500);
}