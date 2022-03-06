chrome.tabs.executeScript({
    code:'for ( let i = 0; i < document.querySelectorAll("".link_author").length; i++) {' +
        '    window.open(document.querySelectorAll(".link_author")[i].href);' +
        '}'
}, function(result) { // After executing 'code' (callback)

});